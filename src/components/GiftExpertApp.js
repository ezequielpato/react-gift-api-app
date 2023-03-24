import { useState } from "react";

import { AddCategory } from "./AddCategory/AddCategory";
import { GifGrid } from "./GifGrid/GifGrid";

// rafc snippet
export const GiftExpertApp = () => {
  // const categories = ["One Punch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState([""]);

  // const handleAdd = () => {
  //   // setCategories(cats => [...cats, "Hunter"])
  //   setCategories([...categories, "Hunter"]);
  // };

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
