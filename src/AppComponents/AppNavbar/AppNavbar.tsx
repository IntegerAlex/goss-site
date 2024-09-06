"use client";
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import { Menubar } from "@/components/ui/menubar";
import { ModeToggle } from "@/components/ui/theme-toggle-button";
import UserContext from "@/context/UserContext";
import { Button } from "@/components/ui/button";
import { Bell, Edit, LogOut, Menu, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { clearLocalStorageKey } from "@/utils/localStorage";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Collapsible } from "@/components/ui/collapsible";
import Image from "next/image";
import SampleImage from "@/assets/GramLogo.jpeg";

const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href={`/home`} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={`/posts`} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Posts
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={`/complaint`} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Complaints
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={`/applicationform`} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Application Forms
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={`/gallery`} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Gallery
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const HamburgerMenu = () => {
  const [open, setOpen] = useState<any>(false);
  const router = useRouter();
  const logoVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Increase delay to slow down the animation
        duration: 1, // Increase duration for a slower transition
      },
    }),
  };
   const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1, // Duration of the animation
      },
    },
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[540px]">
        <SheetHeader>
          <motion.div className="flex justify-center items-center"
          // initial={{ opacity: 0, scale: 0.5 }}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{
          //   duration: 0.8,
          //   delay: 0.5,
          //   ease: [0, 0.71, 0.2, 1.01],
          // }}
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          >

        <Image
                className="rounded-xl"
                src={SampleImage}
                alt="test image"
                width={120}
                height={120}
                // style={{ width: "100%", height: "100%" }}
                />
          <SheetTitle>आपली ग्रामपंचायत</SheetTitle>
                </motion.div>
          <SheetDescription>
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
          </SheetDescription>
        </SheetHeader>
        {/* <div className="grid gap-4 py-4"> */}
           <motion.div  className="grid gap-4 py-4" variants={itemVariants}>
          <SheetClose asChild>
            <Button
              variant="outline"
              className="w-full justify-between"
              onClick={() => {
                router.push("/home");
              }}
            >
              Home
            </Button>
          </SheetClose>

          <SheetClose asChild>
            <Button
              variant="outline"
              className="w-full justify-between"
              onClick={() => {
                router.push("/posts");
              }}
            >
              Posts
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              variant="outline"
              className="w-full justify-between"
              onClick={() => {
                router.push("/complaint");
              }}
            >
              Complaints
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              variant="outline"
              className="w-full justify-between"
              onClick={() => {
                router.push("/applicationform");
              }}
            >
              Application Forms
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              variant="outline"
              className="w-full justify-between"
              onClick={() => {
                router.push("/gallery");
              }}
            >
              Gallery
            </Button>
          </SheetClose>
          </motion.div>
        {/* </div> */}
        <SheetFooter>
          <SheetClose asChild>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export function AppNavigationMenu() {
  const { user, setUser } = useContext<any>(UserContext);
  const router = useRouter();

  // Animation variants for the navbar
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animation variants for the dropdown
  const dropdownVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="flex justify-between px-[1em] py-[1em]"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-center items-center gap-2">
        <div className="cursor-pointer md:hidden">
          <HamburgerMenu />
        </div>
        <Link href="/">
          <Image
            className="rounded-lg object-cover h-9 w-9"
            src={SampleImage}
            alt="test image"
            width={120}
            height={120}
          />
        </Link>
      </div>
      <div className="hidden md:block">
        <NavMenu />
      </div>
      <div className="flex justify-center items-center gap-[1em]">
        <ModeToggle />
        {user ? (
          <div className="flex justify-center items-center gap-[1em]">
            <Button variant="outline" size="icon" asChild>
              <Link href="/notification">
                <Bell className="h-4 w-4" />
              </Link>
            </Button>
            <DropdownMenu>
              

              <DropdownMenuTrigger asChild>
                <Card className="rounded-full">
                  <Avatar>
                    <AvatarImage
                      className="object-cover"
                      src={user?.name}
                      alt="@shadcn"
                    />
                    <AvatarFallback>{user?.name[0] || "G"}</AvatarFallback>
                  </Avatar>
                </Card>
              </DropdownMenuTrigger>
              <motion.div
                variants={dropdownVariants}
              >
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem
                      onClick={() => {
                        router.push(`/${user?.id}`);
                      }}
                    >
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        router.push(`/`);
                      }}
                    >
                      <Edit className="mr-2 h-4 w-4" />
                      <span>Edit</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      setUser(null);
                      clearLocalStorageKey("userId");
                      router.push("/");
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </motion.div>
            </DropdownMenu>
          </div>
        ) : (
          <div>
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
