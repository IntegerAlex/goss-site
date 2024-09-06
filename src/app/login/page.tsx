"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { login } from "./_context";
import { debug_console_log } from "@/utils/generalFunction";
import { setLocalStorageValueForKey } from "@/utils/localStorage";

export default function LoginPage() {
  const router = useRouter();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async () => {
    console.log(loginDetails);
    if (!loginDetails.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
    }
    if (!loginDetails.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
    }

    try {
      if (loginDetails.email && loginDetails.password) {
        const res = await login(loginDetails);
        debug_console_log(res);
        if (res) {
          toast({
            title: "User logged in successfully.",
          });
          setLocalStorageValueForKey("userId", res?.result?._id);
          router.push(`${res?.result?._id}`);
        }
      }
    } catch (error: any) {
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
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={loginDetails.email}
                  onChange={(e: any) => {
                    setLoginDetails({ ...loginDetails, email: e.target.value });
                    setErrors({ ...errors, email: "" });
                  }}
                />
                {errors.email && (
                  <p className="text-red-600 text-xs">{errors.email}</p>
                )}
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={loginDetails.password}
                  onChange={(e: any) => {
                    setLoginDetails({
                      ...loginDetails,
                      password: e.target.value,
                    });
                    setErrors({ ...errors, password: "" });
                  }}
                />
                {errors.password && (
                  <p className="text-red-600 text-xs">{errors.password}</p>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full" type="submit" onClick={handleSubmit}>
              Login
            </Button>
            <p className="mt-2 text-xs text-center text-gray-700">
              {" "}
              Dont have an account?{" "}
              <span
                className=" text-blue-600 hover:underline"
                onClick={() => router.push("/signup")}
              >
                Sign Up
              </span>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
