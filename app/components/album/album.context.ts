import { createContext } from 'react';

export type IAlbumOptions = {
  selected?: string[];
  onSelect?: (selected: string[]) => void;
};

export type IAlbumContext = {
  show: (options?: IAlbumOptions) => void;
};

export const AlbumContext = createContext<IAlbumContext>({} as IAlbumContext);
