"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContext, useEffect, useState } from "react";
import registerComplaint from "./_context";
import { toast } from "@/components/ui/use-toast";
import UserContext from "@/context/UserContext";
import { useRouter } from "next/navigation";

const CreateComplaint = () => {
  const { user } = useContext<any>(UserContext)
  const router = useRouter()
  const [formValues, setFormValues] = useState<any>({
    photos: [],
    title: "",
    description: "",
  });
  const handleSubmit = async () => {
    console.log(formValues);
    try {
      const res = await registerComplaint(formValues);
      console.log(res);
      if (res) {
        toast({
          title: "Complaint registered successfully.",
        });
      }
    } catch (error) {
      if (error) {
        toast({
          title: "Complaint registered successfully.",
          variant: "destructive",
        });
      }
    }
  };

  useEffect(() => {
    if(!user){
      router.push('/login')
    }
  },[])

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full m-auto lg:max-w-lg">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">
              Create your complaint
            </CardTitle>
            <CardDescription className="text-center">
              Enter your complaint details
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="complaintTitle">Complaint Title</Label>
              <Input
                id="complaintTitle"
                type="text"
                placeholder="Enter you complaint title"
                value={formValues.title}
                onChange={(e: any) => {
                  setFormValues({ ...formValues, title: e.target.value });
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="complaintDescription">
                Complaint Description
              </Label>
              <Input
                id="complaintDescription"
                type="text"
                placeholder="Enter you complaint description"
                value={formValues.description}
                onChange={(e: any) => {
                  setFormValues({
                    ...formValues,
                    description: e.target.value,
                  });
                }}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full" onClick={handleSubmit}>
              Register
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CreateComplaint;
