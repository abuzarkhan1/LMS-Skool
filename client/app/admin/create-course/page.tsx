"use client";
import React from "react";
import AdminSidebar from "../../components/Admin/Sidebar/AdminSidebar";
import Heading from "@/app/utils/Heading";
import CreateCourse from "../../components/Course/CreateCourse";
import DashboardHeader from "@/app/components/Admin/Sidebar/DashboardHeader";
type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Heading
        title="Create Course"
        description="Skool is a platform for students to learn and get help from teachers"
        keywords="Programming,MernStack,Java,JavaScript"
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar/>
        </div>
        <div className="w-[85%]">
          <DashboardHeader/> 
          <CreateCourse/>
        </div>
      </div>
    </div>
  );
};

export default page;
