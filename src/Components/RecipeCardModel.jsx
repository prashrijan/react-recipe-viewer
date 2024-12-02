import React from "react";

const RecipeCardModel = ({ data, setShowModal }) => {
  console.log(data);
  const { img, ingredients, name, recipe } = data;
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white w-11/12 max-w-lg rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src={img}
            alt="Dish Image"
            className="w-full h-48 object-cover"
          />
          <button
            className="absolute top-3 right-3 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-red-600"
            aria-label="Close Modal"
            onClick={() => setShowModal(false)}
          >
            ×
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{name}</h2>
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Ingredients:
          </h3>
          <ul className="list-disc pl-5 text-gray-700 mb-4">
            {ingredients.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Recipe:</h3>
          <p className="text-gray-700 leading-relaxed">{recipe}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCardModel;
