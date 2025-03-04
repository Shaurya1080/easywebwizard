
import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { DragAndDrop } from "@/components/builder/DragAndDrop";
import { toast } from "sonner";

const Builder = () => {
  useEffect(() => {
    toast("Welcome to the website builder!", {
      description: "Drag and drop components to build your website.",
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow h-[calc(100vh-64px)]">
        <DragAndDrop />
      </div>
    </div>
  );
};

export default Builder;
