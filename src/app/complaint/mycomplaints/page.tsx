"use client"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header";
import ComplaintCard from "../_components/ComplaintCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useContext, useEffect } from "react";
import UserContext from "@/context/UserContext";
import { useRouter } from "next/navigation";

const MyComplaintPage = () => {
  const { user } = useContext<any>(UserContext);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);

  const Hero = () => {
    return (
      <div className="relative bg-primary w-full">
        <PageHeader>
          <PageHeaderHeading className="text-white">
            My Complaints
          </PageHeaderHeading>
          <PageHeaderDescription className="text-primary-foreground">
            These are the complaints registered by you
          </PageHeaderDescription>
        </PageHeader>
        <PageActions>
          {/* <Button
            asChild
            variant="secondary"
            className="dark:bg-white text-primary"
          >
            <Link href="/complaint/mycomplaints">Your Complaints</Link>
          </Button> */}
          <Button
            asChild
            variant="secondary"
            className="dark:bg-white text-primary"
          >
            <Link href="/complaint/create">Register Complaint</Link>
          </Button>
        </PageActions>
      </div>
    );
  };
  return (
    <div className="w-full">
      <Hero />
      <ComplaintCard />
    </div>
  );
};

export default MyComplaintPage;
