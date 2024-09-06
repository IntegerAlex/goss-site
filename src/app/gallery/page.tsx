"use client";
import { Button } from "@/components/ui/button";
import { ImagePlus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AppUploadImage from "@/AppComponents/AppUploadImage/AppUploadImage";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import data from "./data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import SampleImage from "@/assets/GramLogo.jpeg";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';

const GalleryPage = () => {
  const [newImageSrc, setNewImageSrc] = useState("");
  const [newImageAlt, setNewImageAlt] = useState("");
  const [newImageTitle, setNewImageTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [imageDetails, setImageDetails] = useState({
    images: [
      {
        src: "",
        alt: "",
        title: "",
        description: "",
        category: "",
      },
    ],
  });

  const handleAddImage = () => {
    const newImage = {
      src: newImageSrc,
      alt: newImageAlt,
      title: newImageTitle,
      Description: newDescription,
      category: newCategory,
    };
    setImageDetails((prevImageDetails: any) => ({
      ...prevImageDetails,
      Images: [...prevImageDetails.images, newImage],
    }));
    setNewImageSrc("");
    setNewImageAlt("");
    setNewImageTitle("");
    setNewDescription("");
    setNewCategory("");
  };
  const handleImageUpload = () => {};
  const [open, setOpen] = useState<any>(false);
  // console.log(data);
  useEffect(() => {
    console.log(data);
  }, []);
  const aspectRatio = "portrait"; // Or determine the value dynamically based on your needs

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5, // Duration of the animation
      },
    },
  };

  return (
    <div>
      <div className="relative bg-primary w-full">
        <PageHeader>
          <PageHeaderHeading className="text-white">गॅलरी </PageHeaderHeading>
          <PageHeaderDescription className="text-primary-foreground"></PageHeaderDescription>
        </PageHeader>
        <PageActions>
          {/* <Button variant="secondary" className="dark:bg-white text-primary">
            Arrange
          </Button> */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                variant="secondary"
                className="dark:bg-white text-primary"
              >
                <PlusCircledIcon className="mr-2 h-4 w-4" />
                Add Image
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <AppUploadImage handleImageUpload={handleImageUpload} />
              <Label>शीर्षक </Label>
              <Input
                type="text"
                value={newImageTitle}
                onChange={(e: any) => setNewImageTitle(e.target.value)}
              />
              <Label>वर्णन</Label>
              <Input
                type="text"
                value={newDescription}
                onChange={(e: any) => setNewDescription(e.target.value)}
              />
              <Select
              // value={newCategory}
              // onChange={(e: any) => setNewCategory(e.target.value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="विभाग निवडा" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    <SelectLabel>विभाग निवडा </SelectLabel>
                    <SelectItem value="edSection">शैक्षणिक विभाग </SelectItem>
                    <SelectItem value="cleanSection">स्वच्छता विभाग</SelectItem>
                    <SelectItem value="healthSection">आरोग्य विभाग</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button
                className="justify-center gap-2 "
                onClick={handleAddImage}
                type="submit"
              >
                अपलोड <ImagePlus />
              </Button>
            </DialogContent>
          </Dialog>
        </PageActions>
      </div>

      <Tabs defaultValue="edSection" className="p-5 items-center">
        <TabsList className="grid w-full flex-wrap grid-cols-3">
          <TabsTrigger value="edSection">शैक्षणिक विभाग</TabsTrigger>
          <TabsTrigger value="cleanSection">स्वच्छता विभाग </TabsTrigger>
          <TabsTrigger value="healthSection">आरोग्य विभाग </TabsTrigger>
        </TabsList>
        <TabsContent value="edSection">
          <div className="flex items-center justify-between">
            <div className="space-y-1  mt-4 ml-4">
              <h2 className="text-2xl font-semibold tracking-tight">
                शैक्षणिक विभाग
              </h2>
              <Separator className="my-4" />
            </div>
          </div>
          <motion.div
            className="flex flex-wrap justify-start items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {data
              .filter((item) => item.category === "edSection")
              .map((item, index) => (
                <motion.div key={index} className="p-4" variants={itemVariants}>
                  <div className="overflow-hidden rounded-md">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={250}
                      height={300}
                      className="h-auto w-auto object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <div className="mt-2 max-w-lg text-clip">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    {/* <p className="text-sm text-gray-600">{item.description}</p> */}
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </TabsContent>
        <TabsContent value="cleanSection">
          <div className="flex items-center justify-between">
            <div className="space-y-1  mt-4 ml-4">
              <h2 className="text-2xl font-semibold tracking-tight">
                स्वच्छता विभाग
              </h2>
              <Separator className="my-4" />
            </div>
          </div>
          <motion.div className="flex flex-wrap justify-start items-center"
           variants={containerVariants}
           initial="hidden"
           animate="visible">
            {data
              .filter((item) => item.category === "cleanSection")
              .map((item, index) => (
                <motion.div key={index} className="p-4">
                  <div className="overflow-hidden rounded-md">
                    <Image
                      src={item.src}
                      
                      alt={item.alt}
                      width={250}
                      height={300}
                      className="h-auto w-auto object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    {/* <p className="text-sm text-gray-600">{item.description}</p> */}
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </TabsContent>
        <TabsContent value="healthSection">
          <div className="flex items-center justify-between">
            <div className="space-y-1  mt-4 ml-4">
              <h2 className="text-2xl font-semibold tracking-tight">
                आरोग्य विभाग
              </h2>
              <Separator className="my-4" />
            </div>
          </div>
          <motion.div className="flex flex-wrap justify-start items-center"
           variants={containerVariants}
           initial="hidden"
           animate="visible">
            {data
              .filter((item) => item.category === "healthSection")
              .map((item, index) => (
                <motion.div key={index} className="p-4">
                  <div className="overflow-hidden rounded-md">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={250}
                      height={300}
                      className="h-auto w-auto object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GalleryPage;
