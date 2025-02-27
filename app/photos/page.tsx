import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GalleryVertical, Grid2x2 } from "lucide-react";
import Image from "next/image";

export default async function PhotosPage() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1740564014446-f07ea2da269c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1740487092927-d6e9d14373cb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1740600379671-46903506e162?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1740382281576-95db2cf42d72?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1738005787906-11fe4d0bcdad?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1580784355703-37c3f6c29052?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmF3fGVufDB8fDB8fHww",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1734899848867-02ac05338425?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1734983235410-cbbc5f5fcdaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1736077722346-31ba59414728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8fHw%3D",
      alt: "",
    },
  ];
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>
          <span>Photos</span>
          <span>The world I meet with.</span>
        </PageHeaderHeading>
        <PageHeaderDescription>
          {"These are the scenes I've encountered along the path I've walked."}
        </PageHeaderDescription>
      </PageHeader>
      <Tabs defaultValue="list">
        <div className="border-grid border-b">
          <div className="container-wrapper">
            <div className="container py-4">
              <TabsList>
                <TabsTrigger value="list">
                  <GalleryVertical size={"16"} />
                </TabsTrigger>
                <TabsTrigger value="grid">
                  <Grid2x2 size={"16"} />
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
        </div>
        <div className="container-wrapper">
          <div className="container py-6">
            <TabsContent value="list">
              <div className="m-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square overflow-hidden bg-gray-100"
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-all hover:scale-105 hover:opacity-90"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="grid">
              <div className="m-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {images.reverse().map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square overflow-hidden bg-gray-100"
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-all hover:scale-105 hover:opacity-90"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </>
  );
}
