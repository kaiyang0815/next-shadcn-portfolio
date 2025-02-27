export const IMAGE_WIDTH_SMALL = 50;
export const IMAGE_WIDTH_MEDIUM = 300;
export const IMAGE_WIDTH_LARGE = 1000;

export default async function PhotosPage() {
  const photos: string[] = [
    "/photos/photo1.jpg",
    "/photos/photo2.jpg",
    "/photos/photo3.jpg",
    "/photos/photo4.jpg",
  ];
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="grid gap-4">
        {photos.map((photo) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo}
            alt=""
            className="h-auto max-w-full rounded-lg"
            key={photo}
          />
        ))}
      </div>
      <div className="grid gap-4">
        {photos.reverse().map((photo) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo}
            alt=""
            className="h-auto max-w-full rounded-lg"
            key={photo}
          />
        ))}
      </div>
      <div className="grid gap-4">
        {photos.map((photo) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo}
            alt=""
            className="h-auto max-w-full rounded-lg"
            key={photo}
          />
        ))}
      </div>
    </div>
  );
}
