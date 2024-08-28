import React from "react";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Categories />
      <SortPopup />
    </div>
  );
};
