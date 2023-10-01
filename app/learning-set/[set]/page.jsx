"use client";

import { useParams } from "next/navigation";

import LearningSetPage from "@components/LearningSetPage/LearningSetPage";

const page = () => {
  const { set } = useParams();
  return <LearningSetPage set={set} />;
};

export default page;
