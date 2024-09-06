import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import SampleImage from "../../../assets/GramLogo.jpeg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ComplaintCard = (props: any) => {
  return (
    <div className="w-full mt-4 flex justify-center items-center">
      <Card className="w-full mx-4 p-4 flex flex-col justify-center gap-2">
        <div className="flex gap-2 mb-3">
          <Card>
            <Image
              className="rounded-lg"
              src={SampleImage}
              alt="test image"
              width={200}
              height={300}
              // style={{ width: "100%", height: "100%" }}
            />
          </Card>
          <Card>
            <Image
              className="rounded-lg"
              src={SampleImage}
              alt="test image"
              width={200}
              height={300}
              // style={{ width: "100%", height: "100%" }}
            />
          </Card>
          <Card>
            <Image
              className="rounded-lg"
              src={SampleImage}
              alt="test image"
              width={200}
              height={300}
              // style={{ width: "100%", height: "100%" }}
            />
          </Card>
          <Card>
            <Image
              className="rounded-lg"
              src={SampleImage}
              alt="test image"
              width={200}
              height={300}
              // style={{ width: "100%", height: "100%" }}
            />
          </Card>
        </div>
        <div>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {props.title}
          </h4>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            {props.description}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <Badge className="bg-green-200  text-green-800 dark:bg-green-900 dark:text-green-300">
            Resolved
          </Badge>
          <p className="text-base font-semibold text-muted-foreground">
            तक्रारकर्ता : Aniket Dhumal
          </p>
        </div>
        <div className="flex justify-end items-center">
          <Button className="font-semibold" variant="outline">
            कारवाई केली
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ComplaintCard;
