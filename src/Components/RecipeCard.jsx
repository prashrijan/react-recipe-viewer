import React from "react";

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
            onClick={() => {
              if (buttonText === "Add To Favorites") {
                setLocalStorage({ img, name, recipe, ingredients });
                alert("Recipe Added In Favorites.");
              } else {
                removeFromLocalStorage({ img, name, recipe, ingredients });
                alert("Recipe Removed from Favorites.");
              }
            }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
