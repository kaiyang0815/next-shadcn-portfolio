import Image from "next/image";

export default async function PhotosPage() {
  const photos: string[] = [
    "/photos/photo1.jpg",
    "/photos/photo2.jpg",
    "/photos/photo3.jpg",
    "/photos/photo4.jpg",
  ];
  return (
    <div className="grid max-w-[1280px] grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-12 lg:gap-6">
      <div className="col-span-1 md:col-span-9">
        <div className="mt-1.5 space-y-8">
          <div className="space-y-0.5 sm:space-y-1">
            {photos.map((photo) => (
              <div key={photo}>
                <Image
                  src={photo}
                  alt="photo"
                  objectFit="fit"
                  width={"200"}
                  height={"200"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-sapn-1 md:col-span-3">sidebar</div>
    </div>
  );
}
