"use client";
import ShowcaseNavbar from "@/components/showcase-navbar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import DataCollectionModal from "@/components/modals/dataCollection";

const Offers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <div className="
      flex flex-col w-full  
      overflow-clip inset-0 -z-10 
      bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]
    ">
      <ShowcaseNavbar />
      <DataCollectionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Offers;
