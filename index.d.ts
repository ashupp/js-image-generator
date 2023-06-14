export interface RawImageData<T> { 
  data: T;
}

export declare function generateImage(
  width: number,
  height: number,
  quality: number,
  callback: (error: Error | null, imageData: RawImageData<Buffer>) => any
): void
