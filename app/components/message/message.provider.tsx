import React, {
  useState,
  useContext,
  useEffect,
  RefObject,
  useRef,
} from 'react';
import { MessageContext, IMessage, IMessageContext } from './message.context';
import { Message } from './message';
import { Sibling, SiblingHandles } from '../sibling/sibling';
import { findIndex, propEq } from 'ramda';

type MessageOptions = IMessage & { unquie: string };
type SiblingRef = RefObject<SiblingHandles>;

export const useMessage = () => useContext(MessageContext);

const createSafeDuration = 300;
let createSafeTimer: number;

const clearCreateSafeTimer = () => {
  clearTimeout(createSafeTimer);
  createSafeTimer = undefined;
};

export const MessageProvider: React.FC<{ stacked?: boolean }> = ({
  children,
  stacked = true,
}) => {
  const rootSiblingRef = useRef<SiblingHandles>();
  const [messageOptionsWeakMap] = useState<
    WeakMap<SiblingRef, MessageOptions[]>
  >(new WeakMap());

  const recycle = (recycledSiblingRef: SiblingRef, unquie: string) => {
    if (!(recycledSiblingRef && recycledSiblingRef.current)) {
      return;
    }
    const recycledMessageOptions = messageOptionsWeakMap.get(
      recycledSiblingRef,
    );
    const dropIndex = findIndex(propEq('unquie', unquie))(
      recycledMessageOptions,
    );
    recycledMessageOptions.splice(dropIndex, 1);
    !recycledMessageOptions.length && recycledSiblingRef.current.recycle();
  };

  const createMessage = (
    options: IMessage,
    siblingRef: SiblingRef = rootSiblingRef,
  ) => {
    if (!siblingRef || createSafeTimer) {
      return;
    }
    // stop with safe task
    createSafeTimer = setTimeout(clearCreateSafeTimer, createSafeDuration);

    // create only
    const messageOptions: MessageOptions = {
      ...options,
      unquie: Date.now().toString(),
    };

    // inset to store
    const targetMessageOptions = messageOptionsWeakMap.get(siblingRef);
    if (!targetMessageOptions) {
      messageOptionsWeakMap.set(siblingRef, [messageOptions]);
    } else {
      targetMessageOptions.unshift(messageOptions);
    }

    const { unquie } = messageOptions;
    const MessageItem = (
      <Message
        key={unquie}
        onHide={() => recycle(siblingRef, unquie)}
        {...messageOptions}
      />
    );
    stacked
      ? siblingRef.current.appendNode(MessageItem)
      : siblingRef.current.createNode(MessageItem);
  };

  const context: IMessageContext = {
    show: createMessage,
    error: (options, siblingRef) =>
      createMessage({ type: 'error', ...options }, siblingRef),
    success: (options, siblingRef) =>
      createMessage({ type: 'success', ...options }, siblingRef),
    info: (options, siblingRef) =>
      createMessage({ type: 'info', ...options }, siblingRef),
    warning: (options, siblingRef) =>
      createMessage({ type: 'warning', ...options }, siblingRef),
  };

  useEffect(
    () => () => {
      clearCreateSafeTimer();
    },
    [],
  );

  return (
    <MessageContext.Provider value={context}>
      {children}
      <Sibling ref={rootSiblingRef} />
    </MessageContext.Provider>
  );
};
