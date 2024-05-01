export type AudioType = {
  src: string;
  transcript: string;
};

export type AudioMapType = {
  [key: string]: AudioType;
};
