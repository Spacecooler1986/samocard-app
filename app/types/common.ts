export interface IFile {
  url: string;
  title?: string;
}

export interface IImage extends IFile {
  alt?: string;
  width?: number | null;
  height?: number | null;
}
