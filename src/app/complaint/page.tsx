"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header";
import Link from "next/link";
import ComplaintCard from "./_components/ComplaintCard";
import { getComplaints } from "./_context";
import { useEffect, useState } from "react";

const ComplaintPage = () => {
  const [complaints, setComplaints] = useState<any[]>([]);

  const getAllComplaints = async () => {
    try {
      const res: any = await getComplaints();
      console.log(res);
      setComplaints(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllComplaints();
  }, []);

  const Hero = () => {
    return (
      <div className="relative bg-primary w-full">
        <PageHeader>
          <PageHeaderHeading className="text-white">तक्रारी</PageHeaderHeading>
          <PageHeaderDescription className="text-primary-foreground"></PageHeaderDescription>
        </PageHeader>
        <PageActions>
          <Button
            asChild
            variant="secondary"
            className="dark:bg-white text-primary"
          >
            <Link href="/complaint/mycomplaints" className="font-semibold">
              माझ्या तक्रारी
            </Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="dark:bg-white text-primary"
          >
            <Link href="/complaint/create" className="font-semibold">
              तक्रार नोंदवा{" "}
            </Link>
          </Button>
        </PageActions>
      </div>
    );
  };
  return (
    <div className="w-full">
      <Hero />
      {complaints?.map((complaint: any, idx: any) => {
        return (
          <div key={idx}>
            <ComplaintCard
              title={complaint.title}
              description={complaint.description}
            />
          </div>
        );
      })}
      {/* <ComplaintCard /> */}
    </div>
  );
};

export default ComplaintPage;
