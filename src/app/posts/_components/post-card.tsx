import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  ChevronDownIcon,
  CircleIcon,
  MessageSquarePlus,
  PlusIcon,
  StarIcon,
} from "lucide-react";
import Image from "next/image";
import SampleImage from "../../../assets/GramLogo.jpeg";

export function PostCard() {
  return (
    <Card>
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>Application Started for Janhit Yojna</CardTitle>
          <CardDescription>
            Kindly see the application document requirement form
          </CardDescription>
        </div>
        {/* <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
          <Button variant="secondary" className="px-3 shadow-none">
            <StarIcon className="mr-2 h-4 w-4" />
            Star
          </Button>
          <Separator orientation="vertical" className="h-[20px]" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="px-2 shadow-none">
                <ChevronDownIcon className="h-4 w-4 text-secondary-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              alignOffset={-5}
              className="w-[200px]"
              forceMount
            >
              <DropdownMenuLabel>Suggested Lists</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Future Ideas
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>My Stack</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Inspiration</DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusIcon className="mr-2 h-4 w-4" /> Create List
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div> */}
      </CardHeader>
      <CardContent>
        <div className="border rounded-lg flex">
          <Card className="m-3">
            <Image
              className="rounded-lg"
              src={SampleImage}
              alt="test image"
              width={250}
              height={350}
              // style={{ width: "100%", height: "100%" }}
            />
          </Card>
          <Card className="m-3">
            <Image
              className="rounded-lg"
              src={SampleImage}
              alt="test image"
              width={250}
              height={350}
              // style={{ width: "100%", height: "100%" }}
            />
          </Card>
          <Card className="m-3">
            <Image
              className="rounded-lg"
              src={SampleImage}
              alt="test image"
              width={250}
              height={350}
              // style={{ width: "100%", height: "100%" }}
            />
          </Card>
          <Card className="m-3">
            <Image
              className="rounded-lg"
              src={SampleImage}
              alt="test image"
              width={250}
              height={350}
              // style={{ width: "100%", height: "100%" }}
            />
          </Card>
        </div>
        <div className="flex justify-between space-x-4 mt-6 text-sm text-muted-foreground">
          <div>Posted on April 2023</div>
          <div className="flex items-center">
            <Button variant="outline">
              <MessageSquarePlus className="mr-1 h-5 w-5" />
              Comment
            </Button>
          </div>
          {/* <div className="flex items-center">
            <StarIcon className="mr-1 h-3 w-3" />
            20k
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
}
