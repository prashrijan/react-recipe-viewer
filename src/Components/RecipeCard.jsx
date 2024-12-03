import React from "react";
import toast, { Toaster } from "react-hot-toast";

const RecipeCard = ({
  img,
  name,
  recipe,
  ingredients,
  setShowModal,
  setSelectedDish,
  setLocalStorage,
  buttonText,
  removeFromLocalStorage,
}) => {
  const addToaster = () => {
    toast.success("Recipe added to favorites.");
    console.log("added");
  };

  const removeToaster = () => {
    toast.error("Recipe removed from favorites");
    console.log("removed");
  };

  const handleButtonOnClick = () => {
    if (buttonText === "Add To Favorites") {
      setLocalStorage({ img, name, recipe, ingredients });
      addToaster();
    } else if (buttonText === "Remove From Favorites") {
      removeFromLocalStorage({ img, name, recipe, ingredients });
      removeToaster();
    }
  };
  return (
    <div className="w-80 bg-white shadow-md rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={img}
        alt="Dish Image"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <div className="flex gap-4">
          <button
            className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
            onClick={() => {
              setSelectedDish({
                img,
                name,
                recipe,
                ingredients,
              });
              setShowModal(true);
            }}
          >
            View Recipe
          </button>
          <button
            className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition truncate"
            onClick={handleButtonOnClick}
          >
            {buttonText}
          </button>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
