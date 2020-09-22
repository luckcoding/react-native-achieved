import React, {
  useState,
  memo,
  RefForwardingComponent,
  useImperativeHandle,
  forwardRef,
} from 'react';

export interface SiblingHandles {
  createNode: (node: React.ReactNode) => void;
  appendNode: (node: React.ReactNode) => void;
  recycle: () => void;
}

const SiblingCore: RefForwardingComponent<SiblingHandles, any> = (
  props,
  ref,
) => {
  const [nodes, setNodes] = useState<React.ReactNode[]>([]);

  useImperativeHandle(ref, () => ({
    createNode: setNodes,
    appendNode: (newNode) => {
      setNodes([...nodes, newNode]);
    },
    recycle: () => setNodes([]),
  }));

  return (
    <React.Fragment>
      {React.Children.map(nodes, (child) => child)}
    </React.Fragment>
  );
};

export const Sibling = memo(forwardRef(SiblingCore));
