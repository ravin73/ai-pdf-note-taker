"use client"
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import Image from "next/image";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const {user}=useUser();
  const createUser=useMutation(api.user.createUser);

  useEffect(()=>{
    user && CheckUser();
  },[user])

  const CheckUser=async()=>{
    const result=await createUser({
      email:user?.primaryEmailAddress?.emailAddress,
      imageUrl:user?.imageUrl,
      userName:user?.fullName,
    });
    console.log(result);
    
  }

  return (
    <div>
      <Navbar/>
      
      <UserButton/>
    </div>
  );
}
