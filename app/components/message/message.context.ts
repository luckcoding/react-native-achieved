import { createContext, RefObject } from 'react';
import { SiblingHandles } from '../sibling/sibling';

type SiblingRef = RefObject<SiblingHandles>;

export type IMessageType = 'error' | 'success' | 'info' | 'warning';
export type IMessage = { type?: IMessageType; title?: string; text?: string };
export type IMessageContext = {
  [key in IMessageType]: (
    options: Omit<IMessage, 'type'>,
    siblingRef?: SiblingRef,
  ) => void;
} & {
  show: (options: IMessage, siblingRef?: SiblingRef) => void;
};

export const MessageContext = createContext<IMessageContext>(
  {} as IMessageContext,
);
