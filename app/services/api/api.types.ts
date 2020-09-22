export type Content = {
  data: {
    id: string;
    author_id: string;
    comment_num: number;
    content: string;
    images: {
      file_uri: string;
      metadata: {
        width: number;
        height: number;
      };
    }[];
  };
  scope: 'post';
};
export type ContentsResult = Content[];
