import {useState} from 'react';

export const useForceUpdate = (): [number, () => void] => {
  const [updated, forceUpdate] = useState(0);
  const handleForceUpdate = () => forceUpdate((prev) => prev + 1);
  return [updated, handleForceUpdate];
};
