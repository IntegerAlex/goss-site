"use client";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useContext, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { IoPersonAddSharp } from "react-icons/io5";
import FamilyMemberCard from "./_components/familyMemberCard";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import AppUploadImage from "@/AppComponents/AppUploadImage/AppUploadImage";
import UserContext from "@/context/UserContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { deleteMember, getAllUsers, getComplaints } from "./_context";
import ComplaintCard from "./_components/ComplaintCard";
import { Trash2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

export default function UserDetailPage() {
  const [open, setOpen] = useState<any>(false);
  const { user } = useContext<any>(UserContext);
  const [complaints, setComplaints] = useState<any[]>([]);
  const [users, setUsers] = useState<any>();
  const [userDetails, setUserDetails] = useState({
    familyHead: "",
    familyMembers: [
      {
        name: "",
        adharCard: "",
        relation: "",
      },
    ],
    mobileNo: "",
    houseNo: "",
    address: "",
    adharCard: "",
    rationCard: "",
    voterId: "",
    ayushmanCard: "",
  });

  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberAdharCard, setNewMemberAdharCard] = useState("");
  const [newMemberRelation, setNewMemberRelation] = useState("");

  const getAllComplaints = async () => {
    try {
      const res: any = await getComplaints();
      console.log(res);
      setComplaints(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllRegisteredUsers = async () => {
    try {
      const res: any = await getAllUsers();
      console.log(res);
      setUsers(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllComplaints();
    getAllRegisteredUsers();
  }, []);

  const handleAddMember = () => {
    const newFamilyMember = {
      name: newMemberName,
      adharCard: newMemberAdharCard,
      relation: newMemberRelation,
    };
    setUserDetails((prevUserDetails: any) => ({
      ...prevUserDetails,
      familyMembers: [...prevUserDetails.familyMembers, newFamilyMember],
    }));
    setNewMemberName("");
    setNewMemberAdharCard("");
    setNewMemberRelation("");
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log(userDetails);
  };

  const handleImageUpload = () => {};

  const handleDelete = async (member: any) => {};

  const handleMemberDelete = async (memberId: any) => {
    try {
      const res = await deleteMember(memberId);
      if (res) {
        toast({
          title: "Member deleted successfully.",
        });
      }
    } catch (error) {
      if (error) {
        toast({
          title: "Something went wrong.",
          description: "Unable to delete member.",
          variant: "destructive",
        });
      }
    }
  };

  const AddUserFamilyMemberDetails = () => {
    return (
      <Card className="w-full flex flex-col justify-center items-center m-6 p-4">
        <h1 className="text-4xl font-extrabold p-5 lg:text-5xl mb-5 mt-5 ml-6">
          User Details
        </h1>
        <div className="w-full">
          <div className="mb-4">
            <Label className="text-xl mb-2 font-semibold">Family Head</Label>
            <Input
              type="text"
              value={userDetails.familyHead}
              onChange={(e: any) => {
                setUserDetails({ ...userDetails, familyHead: e.target.value });
              }}
            />
          </div>

          <div className="mb-4">
            <Label className="text-xl mb-2 font-semibold">Mobile No.</Label>
            <Input
              placeholder="Mobile No."
              value={userDetails.mobileNo}
              onChange={(e: any) => {
                setUserDetails({ ...userDetails, mobileNo: e.target.value });
              }}
            />
          </div>

          <div className="mb-4">
            <h4
              className="scroll-m-20 mb-2 text-xl font-semibold tracking-tight"
              id="family-members"
            >
              Family Members
            </h4>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-2 items-center ">
                  <IoPersonAddSharp /> Add Members
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Family Members</DialogTitle>
                  <DialogDescription>
                    Add Family Members Details
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <Label className="text-l">Name</Label>
                    <Input
                      value={newMemberName}
                      onChange={(e: any) => setNewMemberName(e.target.value)}
                    />
                    <Label className="text-l">Aadhar No</Label>
                    <Input
                      value={newMemberAdharCard}
                      onChange={(e) => setNewMemberAdharCard(e.target.value)}
                    />
                    <Label className="text-l">Relation</Label>
                    <Input
                      value={newMemberRelation}
                      onChange={(e) => setNewMemberRelation(e.target.value)}
                    />
                  </div>
                </div>
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button
                      type="submit"
                      size="sm"
                      className="px-3 gap-2 w-full  "
                      onClick={handleAddMember}
                    >
                      Add Family Member
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          {userDetails.familyMembers.length != 0 ? (
            <ScrollArea className="w-full whitespace-nowrap rounded-md border">
              <div className="flex w-max space-x-4 p-4">
                {userDetails.familyMembers
                  .filter((member) => member.name !== "")
                  .map((member, index) => (
                    // <FamilyMemberCard key={index} member={member} />
                    <FamilyMemberCard
                      key={index}
                      member={member}
                      onDelete={() => handleDelete(member)}
                    />
                  ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          ) : (
            <p>No members added yet.</p>
          )}
          <div className="mb-4">
            <Label className="text-xl mb-2 font-semibold">House No.</Label>
            <Input
              placeholder="House No."
              value={userDetails.houseNo}
              onChange={(e: any) => {
                setUserDetails({ ...userDetails, houseNo: e.target.value });
              }}
            />
          </div>

          <div className="mb-4">
            <Label className="text-xl mb-2 font-semibold">Address</Label>
            <Input
              type="text"
              placeholder="Address"
              value={userDetails.address}
              onChange={(e: any) => {
                setUserDetails({ ...userDetails, address: e.target.value });
              }}
            />
          </div>

          <div className="w-full mb-4">
            <Label className="text-xl mb-2 font-semibold">Aadhar Card</Label>
            <div className="w-full space-x-2 flex justify-center items-center">
              <Input
                type="text"
                pattern="[0-9]{12}"
                placeholder="Aadhar Card No."
                value={userDetails.adharCard}
                onChange={(e: any) => {
                  setUserDetails({ ...userDetails, adharCard: e.target.value });
                }}
              />
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button>Upload</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <AppUploadImage handleImageUpload={handleImageUpload} />
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="w-full mb-4">
            <Label className="text-xl mb-2 font-semibold">Ration Card</Label>
            <div className="w-full space-x-2 flex justify-center items-center">
              <Input
                type="text"
                pattern="[0-9]{12}"
                placeholder="Ration Card No."
                value={userDetails.rationCard}
                onChange={(e: any) => {
                  setUserDetails({
                    ...userDetails,
                    rationCard: e.target.value,
                  });
                }}
              />
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button>Upload</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <AppUploadImage handleImageUpload={handleImageUpload} />
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="w-full mb-4">
            <Label className="text-xl mb-2 font-semibold">Voter id</Label>
            <div className="w-full space-x-2 flex justify-center items-center">
              <Input
                type="text"
                placeholder="Voter Card No."
                value={userDetails.voterId}
                onChange={(e: any) => {
                  setUserDetails({ ...userDetails, voterId: e.target.value });
                }}
              />
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button>Upload</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <AppUploadImage handleImageUpload={handleImageUpload} />
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="w-full mb-4">
            <Label className="text-xl mb-2 font-semibold">
              Ayushman Bharat Card No.
            </Label>
            <div className="w-full space-x-2 flex justify-center items-center">
              <Input
                type="text"
                placeholder="Ayushman Bharat Card No."
                value={userDetails.ayushmanCard}
                onChange={(e: any) => {
                  setUserDetails({
                    ...userDetails,
                    ayushmanCard: e.target.value,
                  });
                }}
              />
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button>Upload</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <AppUploadImage handleImageUpload={handleImageUpload} />
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <Button className="w-full" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Card>
    );
  };

  const AdminPanel = () => {
    return (
      <div className="w-full flex flex-col justify-center items-center">
        <Card className="w-[350px]">
          <CardHeader>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Admin Panel
            </h2>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>{user?.name[0] || "A"}</AvatarFallback>
            </Avatar>
            <CardTitle>{user?.name}</CardTitle>
            <CardDescription>Admin</CardDescription>
          </CardHeader>
          <CardContent>Email: {user?.email}</CardContent>
          <CardFooter className="flex justify-between">
            {/* <Button variant="outline">Edit Profile</Button> */}
          </CardFooter>
        </Card>
        <Tabs defaultValue="complaints" className="p-5 items-center">
          <TabsList className="grid w-full flex-wrap grid-cols-3">
            <TabsTrigger value="complaints">Registered Complaints</TabsTrigger>
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>
          <TabsContent value="complaints">
            <div className="flex flex-col items-center justify-between">
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
            </div>
          </TabsContent>
          <TabsContent value="posts">
            <div className="flex items-center justify-between"></div>
          </TabsContent>
          <TabsContent value="users">
            <div className="flex items-center justify-between gap-4">
              {users?.map((member: any, idx: any) => {
                return (
                  <div key={idx} className="">
                    {member?.is_admin != true ? (
                      <Card className="w-[350px]">
                        <CardHeader className="">
                          <CardTitle>{member?.name}</CardTitle>
                          {/* <CardDescription>{member?.email}</CardDescription> */}
                        </CardHeader>
                        <CardContent>Email: {member?.email}</CardContent>
                        <CardFooter className="flex justify-between">
                          <Button
                            variant="outline"
                            onClick={() => handleMemberDelete(member._id)}
                          >
                            Delete
                          </Button>
                        </CardFooter>
                      </Card>
                    ) : (
                      <Card className="w-[350px]">
                        <CardHeader className="">
                          <CardTitle>{member?.name}</CardTitle>
                          {/* <CardDescription>{member?.email}</CardDescription> */}
                        </CardHeader>
                        <CardContent>Email: {member?.email}</CardContent>
                        <CardFooter className="flex justify-between">
                          <Button>Admin</Button>
                        </CardFooter>
                      </Card>
                    )}
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  };

  return (
    <div className="w-full mt-5 flex justify-center items-center">
      {user?.isAdmin === true ? (
        <AdminPanel />
      ) : (
        <Card className="w-[350px]">
          <CardHeader>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>{user?.name[0] || "G"}</AvatarFallback>
            </Avatar>
            <CardTitle>{user?.name}</CardTitle>
            <CardDescription>Main Member</CardDescription>
          </CardHeader>
          <CardContent>Email: {user?.email}</CardContent>
          <CardFooter className="flex justify-between">
            {/* <Button variant="outline">Edit Profile</Button> */}
            <Button variant="outline">Expences</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
