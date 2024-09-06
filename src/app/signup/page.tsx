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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signup } from "./_context";
import { toast } from "@/components/ui/use-toast";
import { setLocalStorageValueForKey } from "@/utils/localStorage";

export default function SignUpForm() {
  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const handleSubmit = async () => {
    console.log(signUpDetails);
    if (!signUpDetails.name) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Name is required" }));
    }
    if (!signUpDetails.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
    }
    if (!signUpDetails.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
    }
    try {
      if (signUpDetails.name && signUpDetails.email && signUpDetails.password) {
        const signUp = await signup(signUpDetails);
        console.log(signUp);
        const newuser = signUp.newUser;
        console.log(newuser);
        if (newuser) {
          toast({
            title: "You have successfully signed up.",
          });
          setLocalStorageValueForKey("userId", newuser._id);
          router.push(`/${newuser._id}`);
        }
      }
    } catch (error) {
      if (error) {
        toast({
          title: "Something went wrong.",
          description: "Please check your credentials and try again.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="relative mx-5 flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full m-auto lg:max-w-lg">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">
              Create an account
            </CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to sign up
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder=""
                value={signUpDetails.name}
                onChange={(e: any) => {
                  setSignUpDetails({ ...signUpDetails, name: e.target.value });
                  setErrors({ ...errors, name: "" });
                }}
                
              />
              {errors.name && <p className="text-red-600 text-xs">{errors.name}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder=""
                value={signUpDetails.email}
                onChange={(e: any) => {
                  setSignUpDetails({ ...signUpDetails, email: e.target.value });
                  setErrors({ ...errors, email: "" });
                }}
              />
              {errors.email && <p className="text-red-600 text-xs">{errors.email}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={signUpDetails.password}
                onChange={(e: any) => {
                  setSignUpDetails({
                    ...signUpDetails,
                    password: e.target.value,
                  });
                  setErrors({ ...errors, password: "" });
                }}
              />
              {errors.password && <p className="text-red-600 text-xs">{errors.password}</p>}
            </div>
            {/* <span className=" text-blue-600 hover:underline text-sm">
              Forget password ?
            </span> */}
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full" onClick={handleSubmit}>
              Sign Up
            </Button>
            <p className="mt-2 text-xs text-center text-gray-700">
              {" "}
              Already have an account?{" "}
              <span
                className="text-blue-600 hover:underline cursor-pointer"
                onClick={() => router.push("/login")}
              >
                Sign In
              </span>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
