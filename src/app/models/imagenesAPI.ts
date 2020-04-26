export interface ImagenesI {
  id: string;
  original_title: string;
  overview: string;
  poster_path: string;
  original_name: string;
  backdrops: [
    {
      file_path: string;
    }
  ];
  results: [
    {
      id: number;
      original_title: string;
      overview: string;
    }
  ];
}
