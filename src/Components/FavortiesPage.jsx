import React from "react";
import RecipeCard from "./RecipeCard";
import RecipeCardModel from "./RecipeCardModel";

const FavortiesPage = ({
  favDish,
  showModal,
  setShowModal,
  setSelectedDish,
  setLocalStorage,
  selectedDish,
  removeFromLocalStorage,
}) => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black min-h-screen flex gap-7 flex-col items-center py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favDish.length === 0 ? (
          <div className="col-span-full flex justify-center items-center mt-24">
            <h2 className="text-white text-xl font-semibold ms-2">
              No Dish Found.
            </h2>
          </div>
        ) : (
          favDish.map((dish, index) => {
            return (
              <RecipeCard
                key={index}
                buttonText="Remove From Favorites"
                img={dish.img}
                name={dish.name}
                recipe={dish.recipe}
                ingredients={dish.ingredients}
                setShowModal={setShowModal}
                setSelectedDish={setSelectedDish}
                setLocalStorage={setLocalStorage}
                removeFromLocalStorage={removeFromLocalStorage}
              />
            );
          })
        )}
      </div>

      {showModal ? (
        <RecipeCardModel data={selectedDish} setShowModal={setShowModal} />
      ) : (
        ""
      )}
    </div>
  );
};

export default FavortiesPage;
