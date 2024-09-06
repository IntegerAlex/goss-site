import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2 } from 'lucide-react';
import { useState } from "react";

interface Member {
  name: string;
  adharCard: string;
  relation: string;
}



const handleTrash = () => {
}

const FamilyMemberCard = ({ member, onDelete }: { member: Member, onDelete: () => void }) => {
     const handleTrash = () => {
    onDelete();
  }
  return (
    <Card className="w-full max-w-[400px] m-4">
      {/* <CardHeader> */}
        {/* <CardTitle>{member.name}</CardTitle> */}
      {/* </CardHeader> */}
    <div className="mt-3">
      <CardContent>

         <div onClick={handleTrash} className="text-right text-red-500 cursor-pointer">
          <Trash2 />
        </div>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight"> {member.name} </h4>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight"> {member.adharCard} </h4>
        <h4 className="scroll-m-20 text-xl tracking-tight"> {member.relation} </h4>
      </CardContent>
    </div>
    </Card>
  );
};

export default FamilyMemberCard;

function onDelete() {
    throw new Error("Function not implemented.");
}
