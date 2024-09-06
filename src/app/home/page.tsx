"use client";
import * as React from "react";
import { motion } from "framer-motion";
// import Autoplay from "embla-carousel-autoplay";
import SampleImage from "@/assets/GramLogo.jpeg";

import { Card, CardContent } from "@/components/ui/card";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header";
import { GramMembers } from "./data";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useInView } from "react-intersection-observer";

const HomePage = () => {
  // const plugin = React.useRef(
  //   Autoplay({ delay: 2000, stopOnInteraction: true })
  // );
  const cardVariants = {
    // hidden: { opacity: 0, y: 50 },
    //   opacity: 1,
    //   y: 0,
    //   transition: {
    //     delay: i * 0.2,
    //     duration:1,
    //   },
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }, // Increase duration for a slower transition
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });

  const Hero = () => {
    return (
      <div className="relative bg-primary w-full">
        <PageHeader>
          <PageHeaderHeading className="text-white text-4xl ">
            <motion.div
              className="flex m-2 gap-2 justify-center items-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              // variants={cardVariants}
                
              // initial="hidden"
              // animate="visible"
            >
              <Image
                className="rounded-xl"
                src={SampleImage}
                alt="test image"
                width={120}
                height={120}
                // style={{ width: "100%", height: "100%" }}
              />
              आपली ग्रामपंचायत
            </motion.div>
          </PageHeaderHeading>
          <PageHeaderDescription className="text-primary-foreground">
            <motion.div
              className="flex m-2 gap-2 justify-center font-semibold items-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              // variants={cardVariants}
              // initial="hidden"
              // animate="visible"
            >
              {" "}
              फूटजवळगाव ग्रामपंचायत{" "}
            </motion.div>
          </PageHeaderDescription>
        </PageHeader>
      </div>
    );
  };

  // const ref = React.useRef(null);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Hero />
      <div>
        <h2 className="text-2xl mt-4 font-semibold tracking-normal">
          ग्रामपंचायत कार्यकारणी{" "}
        </h2>
        <Separator className="my-3 max-w-xl" />
      </div>
      <div className="mx-5 mt-5 flex flex-wrap justify-center items-center gap-8">
        {GramMembers.slice(0, 3).map((member: any, i: any) => {
          return (
            <motion.div
              // variants={cardVariants}
              // initial="hidden"
              // animate="visible"
              // custom={i}
              key={i}
              ref={ref}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Card className="p-3 flex flex-col justify-center items-center object-cover">
                <Image
                  className="w-[200px] h-[200px] rounded mb-3"
                  src={member.img}
                  alt="member image"
                  width={0}
                  height={0}
                  // style={{ width: "100%", height: "100%" }}
                />
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  {member.memberName}
                </h3>
                <p className="font-semibold">{member.designation}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div className="mt-4">
        <h2 className="text-2xl mt-4 font-semibold tracking-tight">सदस्य</h2>
        <Separator className="my-3 max-w-xl" />
      </motion.div>

      <div className="mx-5 mt-5 flex flex-wrap justify-center items-center gap-8">
        {GramMembers.slice(3, 8).map((member: any, idx: any) => {
          return (
            <motion.div
              // variants={cardVariants}
              // initial="hidden"
              // animate="visible"
              // custom={i}
              key={idx}
              ref={ref}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Card className="p-3 flex flex-col justify-center items-center object-cover">
                <Image
                  className="w-[200px] h-[200px] rounded mb-3"
                  src={member.img}
                  alt="member image"
                  width={0}
                  height={0}
                  // style={{ width: "100%", height: "100%" }}
                />
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  {member.memberName}
                </h3>
                <p>{member.designation}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-4">
        <h2 className="text-2xl mt-4 font-semibold tracking-tight">
          कर्मचारी{" "}
        </h2>
        <Separator className="my-3 max-w-xl" />
      </div>

      <div className="mx-5 mt-5 flex flex-wrap justify-center items-center gap-8 mb-5">
        {GramMembers.slice(8, 11).map((member: any, idx: any) => {
          return (
            <motion.div
              // variants={cardVariants}
              // initial="hidden"
              // animate="visible"
              // custom={i}
              key={idx}
              ref={ref}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Card className="p-3 flex flex-col  justify-center items-center object-cover">
                <Image
                  className="w-[200px] h-[200px] rounded mb-3"
                  src={member.img}
                  alt="member image"
                  width={0}
                  height={0}
                  // style={{ width: "100%", height: "100%" }}
                />
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  {member.memberName}
                </h3>
                <p>{member.designation}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
