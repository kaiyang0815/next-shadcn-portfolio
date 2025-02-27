interface PhotoProps {
  params: Promise<{ photoId: string }>;
}

export default async function PhotoPage({ params }: PhotoProps) {
  const { photoId } = await params;
  return (
    <div className="container-wrapper">
      <div className="container py-6">
        <div>{photoId}</div>
      </div>
    </div>
  );
}
