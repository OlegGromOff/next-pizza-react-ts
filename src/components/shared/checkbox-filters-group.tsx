"use client"; // must to use for state and effect hooks (render on client side and server side)

import React from "react";
// import { useSet } from "react-use";

import { FilterCheckbox, FilterChecboxProps } from "./filter-checkbox";
import { Input } from "../ui/input";

type Item = FilterChecboxProps; // props for FilterCheckbox

interface Props {
  title: string;
  items: Item[]; // all items
  defaultItems: Item[]; // items to show by default
  limit?: number;
  searchInputPlaceholder?: string;
  className?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[]; // checked ckeckboxes for default
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  className,
  onChange,
  defaultValue,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  //   const [selected, { add, toggle }] = useSet<string>(new Set([]));
  const list = showAll
    ? items.filter(
        (item) => item.text.toLowerCase().includes(searchValue.toLowerCase()) // filter items by search value
      )
    : defaultItems?.slice(0, limit); // show all items or default items

  //   const onCheckedChange = (value: string) => {
  //     toggle(value);
  //   };

  //   React.useEffect(() => {
  //     if (defaultValue) {
  //       defaultValue.forEach(add);
  //     }
  //   }, [defaultValue?.length]);

  //   React.useEffect(() => {
  //     onChange?.(Array.from(selected));
  //   }, [selected]);

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder} // Search for items
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map(
          (
            item,
            index // Show all items or default items
          ) => (
            <FilterCheckbox
              onCheckedChange={(ids) => console.log(ids)}
              checked={false}
              key={index}
              value={item.value}
              text={item.text}
              endAdornment={item.endAdornment} // Additional content
            />
          )
        )}
      </div>

      {items.length > limit && ( // if items more than limit
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3"
          >
            {showAll ? "Hide" : "+ Show all"}
          </button>
        </div>
      )}
    </div>
  );
};
