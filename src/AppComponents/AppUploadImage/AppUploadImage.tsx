"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AppUploadImage({ handleImageUpload }: any) {
  const [image, setImage] = useState<any>(null);
  const ImageInputRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [isDropping, setIsDropping] = useState(false);

  const handleFile = (file: any) => {
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };
  const handleOndragOver = (event: any) => {
    event.preventDefault();
    setIsDropping(true);
  };
  const handleOndragLeave = (event: any) => {
    event.preventDefault();
    setIsDropping(false);
  };
  const handleOndrop = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];
    handleFile(imageFile);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleUploadImage = () => {
    handleImageUpload(image);
  };

  return (
    <>
      <Card>
        {previewUrl ? (
          <div className="image p-[1em] m-auto relative w-full h-full flex flex-col justify-center items-center">
            <img
              className="h-full max-h-[250px]"
              src={previewUrl}
              alt="image"
            />
          </div>
        ) : (
          <div
            className={`drop_zone relative p-[1em] h-[15em] ${
              isDropping ? "bg-slate-500" : ""
            } flex flex-col`}
            onDragOver={(e) => handleOndragOver(e)}
            onDragLeave={(e: any) => handleOndragLeave(e)}
            onDrop={(e) => handleOndrop(e)}
          >
            {isDropping ? (
              <div className="h-full relative flex-[12] flex flex-col text-[black] justify-center items-center">
                Drop your image here
              </div>
            ) : (
              <div className="h-full relative flex-[12] flex flex-col">
                <div className="flex justify-center items-center m-auto h-full gap-[0.5em]">
                  <p className="text-[1em]">Drag and drop image here or </p>
                  <div>
                    <label htmlFor="fileInput">
                      <div className="cursor-pointer text-[rgb(138,180,248)]">
                        {" "}
                        Upload Image{" "}
                      </div>
                    </label>
                    <input
                      className="hidden"
                      type="file"
                      id="fileInput"
                      accept="image/*"
                      onChange={(e) => handleFile(e.target.files?.[0])}
                      ref={ImageInputRef}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </Card>
      <Button
        onClick={handleUploadImage}
        // onClick={() => ImageInputRef.current?.click()}
      >
        अपलोड
      </Button>
    </>
  );
}
