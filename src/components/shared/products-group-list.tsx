"use client";
import React from "react";
import { useIntersection } from "react-use";
import { Title } from "./title";
import { ProductCard } from "./product-card";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "../../../store/category"; // import the store

interface Props {
  title: string;
  items: any[];
  className?: string;
  categoryId: number;
  listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId); // get the function from store
  const intersectionRef = React.useRef(null); // create a ref for the intersection observer
  const intersection = useIntersection(intersectionRef, {
    // use the intersection observer
    threshold: 0.4,
  });
  React.useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0.4) {
      // if the element is 40% visible
      setActiveCategoryId(categoryId); // set the active category id in the store
    }
  }, [categoryId, intersection?.isIntersecting, title]); // run the effect when the element is visible on the screen
  return (
    // watch for this element with ref
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price} // price from less price
          />
        ))}
      </div>
    </div>
  );
};
