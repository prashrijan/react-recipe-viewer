import { useEffect, useRef, useState } from "react";
import RecipeCard from "./RecipeCard";
import RecipeCardModel from "./RecipeCardModel";
import SearchBox from "./SerachBox.jsx";
import FavortiesPage from "./FavortiesPage.jsx";

let dishes = [
  {
    img: "https://www.allrecipes.com/thmb/Y7ftij8uq7sM2VpxGt-RHZg3yaA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-mfs-042-21d5decdffde4a1faa94a21725ce9cc3.jpg",
    name: "Spaghetti Carbonara",
    recipe:
      "Cook spaghetti in salted boiling water until al dente. In a bowl, whisk egg yolks and Parmesan cheese. Fry pancetta in a skillet until crispy. Add garlic and cook briefly. Toss the hot pasta into the skillet with pancetta. Remove from heat and quickly mix in the egg and cheese mixture. Season with salt and pepper. Serve immediately.",
    ingredients: [
      "Spaghetti",
      "Egg yolks",
      "Parmesan cheese",
      "Pancetta",
      "Garlic",
      "Salt",
      "Black pepper",
    ],
  },
  {
    img: "https://www.yumcurry.com/wp-content/uploads/2020/06/pizza-margherita-recipe-480x270.jpg",
    name: "Margherita Pizza",
    recipe:
      "Preheat your oven to the highest temperature and place a pizza stone or baking tray inside to heat. Roll out pizza dough and spread a thin layer of tomato sauce on top. Add slices of fresh mozzarella and drizzle with olive oil. Bake on the hot pizza stone until the crust is golden and cheese is bubbling. Remove and top with fresh basil leaves. Serve warm.",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella",
      "Fresh basil",
      "Olive oil",
      "Salt",
    ],
  },
  {
    img: "https://c.ndtvimg.com/2023-12/efrl2jm8_chicken-curry_625x300_24_December_23.jpg",
    name: "Chicken Curry",
    recipe:
      "Heat oil in a large pot and sauté onions until golden. Add garlic, ginger, and curry powder, cooking until fragrant. Stir in diced chicken thighs and cook until sealed. Add coconut milk and chopped tomatoes, then simmer until the chicken is tender. Garnish with fresh cilantro and serve with steamed rice.",
    ingredients: [
      "Chicken thighs",
      "Onion",
      "Garlic",
      "Ginger",
      "Curry powder",
      "Coconut milk",
      "Tomatoes",
      "Cilantro",
    ],
  },
  {
    img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/06/Taco-Salad-main.jpg",
    name: "Taco Salad",
    recipe:
      "Cook ground beef with taco seasoning until browned. In a large bowl, combine chopped lettuce, diced tomatoes, shredded cheddar cheese, and crushed tortilla chips. Add the cooked beef on top. Serve with a dollop of sour cream and your favorite salsa or dressing.",
    ingredients: [
      "Ground beef",
      "Taco seasoning",
      "Lettuce",
      "Tomatoes",
      "Cheddar cheese",
      "Sour cream",
      "Tortilla chips",
    ],
  },
  {
    img: "https://www.inspiredtaste.net/wp-content/uploads/2016/07/Pancake-Recipe-2-1200.jpg",
    name: "Fluffy Pancakes",
    recipe:
      "In a bowl, whisk together flour, sugar, baking powder, and a pinch of salt. In another bowl, combine milk, melted butter, eggs, and vanilla extract. Mix the wet ingredients into the dry ingredients until just combined. Heat a skillet over medium heat, grease lightly, and pour batter to form pancakes. Cook until bubbles form, then flip and cook until golden. Serve with syrup and your favorite toppings.",
    ingredients: [
      "All-purpose flour",
      "Baking powder",
      "Sugar",
      "Milk",
      "Eggs",
      "Butter",
      "Vanilla extract",
      "Salt",
    ],
  },
  {
    img: "https://www.allrecipes.com/thmb/J0U0wHxsY1r-I1JUJ5jXcwCnzRI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/223042-Chicken-Parmesan-mfs_001-7ab952346edc4b2da36f3c0259b78543.jpg",
    name: "Chicken Parmesan",
    recipe:
      "Bread chicken breasts in flour, egg, and breadcrumbs, then fry until golden. Top with marinara sauce and shredded mozzarella cheese. Bake in the oven until the cheese melts and the chicken is cooked through. Serve with spaghetti or your favorite pasta.",
    ingredients: [
      "Chicken breasts",
      "Breadcrumbs",
      "Flour",
      "Egg",
      "Mozzarella cheese",
      "Marinara sauce",
      "Olive oil",
      "Spaghetti",
    ],
  },
  {
    img: "https://www.foodnetwork.com/content/dam/images/food/fullset/2011/4/22/0/CCHAP-110F_Breakfast-Burrito_s4x3.jpg",
    name: "Breakfast Burrito",
    recipe:
      "Scramble eggs in a pan with onions and bell peppers. Warm tortillas and fill with the scrambled eggs, cooked bacon or sausage, shredded cheese, and salsa. Roll up and serve with a side of guacamole or sour cream.",
    ingredients: [
      "Eggs",
      "Onion",
      "Bell peppers",
      "Bacon or sausage",
      "Shredded cheese",
      "Salsa",
      "Tortillas",
      "Guacamole",
    ],
  },
  {
    img: "https://assets.epicurious.com/photos/64a845e67799ee8651e4fb8f/4:3/w_5322,h_3991,c_limit/AshaGrilledChickenSalad_RECIPE_070523_56498.jpg",
    name: "Grilled Chicken Salad",
    recipe:
      "Grill chicken breasts and slice thinly. In a large bowl, combine mixed greens, tomatoes, cucumber, and red onion. Toss with your favorite dressing and top with grilled chicken. Add some avocado and nuts for extra flavor.",
    ingredients: [
      "Chicken breasts",
      "Mixed greens",
      "Tomatoes",
      "Cucumber",
      "Red onion",
      "Avocado",
      "Nuts (optional)",
      "Salad dressing",
    ],
  },
  {
    img: "https://www.allrecipes.com/thmb/nb2eEifCwlw1yc5gnXMwBy4BkXQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23600-worlds-best-lasagna-DDMFS-2x1-1193-40ded59b2a224312b66bdafbb885adc0.jpg",
    name: "Classic Lasagna",
    recipe:
      "Layer cooked lasagna noodles with ricotta cheese, marinara sauce, ground beef, and mozzarella cheese. Bake in the oven until bubbly and golden. Let it cool slightly before serving.",
    ingredients: [
      "Lasagna noodles",
      "Ricotta cheese",
      "Ground beef",
      "Mozzarella cheese",
      "Marinara sauce",
      "Parmesan cheese",
    ],
  },
  {
    img: "https://reneenicoleskitchen.com/wp-content/uploads/2020/03/Creamy-Tomato-Basil-Bisque-Image-1a.jpg",
    name: "Creamy Tomato Basil Soup",
    recipe:
      "In a pot, sauté onions and garlic in butter. Add canned tomatoes, chicken broth, and basil. Simmer, then blend until smooth. Stir in cream and serve hot with grilled cheese sandwiches.",
    ingredients: [
      "Canned tomatoes",
      "Chicken broth",
      "Onion",
      "Garlic",
      "Fresh basil",
      "Heavy cream",
      "Butter",
    ],
  },
  {
    img: "https://sanascarte.com/wp-content/uploads/2022/04/DSC_0063-1536x1024.jpg",
    name: "Momos (Nepali Dumplings)",
    recipe:
      "Prepare the dough and filling by mixing ground meat (chicken or pork), onions, garlic, ginger, and spices. Shape into dumplings and steam until cooked through. Serve with spicy dipping sauce.",
    ingredients: [
      "Ground meat (chicken or pork)",
      "Onion",
      "Garlic",
      "Ginger",
      "Flour",
      "Spices (cumin, coriander)",
      "Soy sauce",
      "Chili sauce",
    ],
  },
  {
    img: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg",
    name: "Beef Tacos",
    recipe:
      "Cook ground beef with taco seasoning. Fill taco shells with the beef mixture and top with shredded lettuce, diced tomatoes, cheese, and salsa. Serve with sour cream and guacamole.",
    ingredients: [
      "Ground beef",
      "Taco seasoning",
      "Taco shells",
      "Shredded lettuce",
      "Tomatoes",
      "Cheddar cheese",
      "Salsa",
      "Guacamole",
      "Sour cream",
    ],
  },
  {
    img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2FPhoto%2FRecipes%2F2024-03-beef-stroganoff-190%2Fbeef-stroganoff-190-342_1",
    name: "Beef Stroganoff",
    recipe:
      "Brown beef strips in a pan, then sauté onions and garlic. Add mushrooms and beef broth. Stir in sour cream and simmer until the sauce thickens. Serve over egg noodles or rice.",
    ingredients: [
      "Beef strips",
      "Onion",
      "Garlic",
      "Mushrooms",
      "Beef broth",
      "Sour cream",
      "Egg noodles",
    ],
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/best-ever-beef-chili-index-1677260488.jpg?crop=0.8903083856772774xw:1xh;center,top&resize=1200:*",
    name: "Chili",
    recipe:
      "Brown ground beef with onions and garlic. Add kidney beans, black beans, diced tomatoes, chili powder, and cumin. Simmer for 30-45 minutes until thickened. Serve with cornbread or over rice.",
    ingredients: [
      "Ground beef",
      "Onion",
      "Garlic",
      "Kidney beans",
      "Black beans",
      "Diced tomatoes",
      "Chili powder",
      "Cumin",
      "Cornbread (optional)",
    ],
  },
  {
    img: "https://preppykitchen.com/wp-content/uploads/2023/05/Lemon-Cheesecake-Recipe-Card.jpg",
    name: "Lemon Cheesecake",
    recipe:
      "Prepare a graham cracker crust and press it into a pan. Mix cream cheese, sugar, eggs, lemon juice, and zest. Pour over the crust and bake. Let it cool, then refrigerate for several hours before serving.",
    ingredients: [
      "Graham crackers",
      "Cream cheese",
      "Sugar",
      "Eggs",
      "Lemon juice",
      "Lemon zest",
      "Butter",
    ],
  },
  {
    img: "https://preview.redd.it/favourite-keema-noodles-spot-v0-8dts2w19w7cc1.png?width=640&crop=smart&auto=webp&s=486173a6d682a72eadaef23510149e0d0c1ce91d",
    name: "Nepali Keema Noodles",
    recipe:
      "Cook noodles. Sauté onions, garlic, and ginger. Add ground meat, tomatoes, and spices, cook until browned. Stir in noodles, garnish with cilantro and lime.",
    ingredients: [
      "Noodles",
      "Ground meat (chicken or mutton)",
      "Onion",
      "Garlic",
      "Ginger",
      "Tomatoes",
      "Green chili",
      "Spices (turmeric, cumin, coriander)",
      "Cilantro",
      "Lime",
    ],
  },
];

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDish, setSelectedDish] = useState({});
  const [favDish, setFavDish] = useState([]);
  const [showFavoritesPage, setShowFavoritesPage] = useState(false);
  let input = useRef();
  let [filteredDish, setFilteredDish] = useState(dishes);

  let localStorage = window.localStorage;

  useEffect(() => {
    setFavDish(JSON.parse(localStorage.getItem("favoriteDish")) || []);
  }, []);

  const filterDish = (dishes) =>
    dishes.filter((dish) => {
      if (dish.name.toLowerCase().includes(input.current.value.toLowerCase())) {
        return dish;
      }
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.current.value.trim === "") {
      setFilteredDish(dishes);
    } else {
      const filterBySearch = filterDish(dishes);

      setFilteredDish(filterBySearch);
    }
  };

  const setLocalStorage = (clickedDish) => {
    if (favDish.find((dish) => dish.name === clickedDish.name)) return;
    let temp = [...favDish];
    temp.push(clickedDish);
    setFavDish(temp);
    localStorage.setItem("favoriteDish", JSON.stringify(temp));
  };

  const removeFromLocalStorage = (clickedDish) => {
    const newFavDish = favDish.filter((dish) => dish.name !== clickedDish.name);
    let temp = [...newFavDish];
    setFavDish(temp);
    localStorage.setItem("favoriteDish", JSON.stringify(temp));
  };

  return (
    <>
      <nav className=" border-gray-200 bg-gray-900 text-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Recipe Viewer
          </span>
          <div className="block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <p
                  className="block cursor-pointer text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={() => {
                    if (!showFavoritesPage) {
                      setShowFavoritesPage(true);
                    } else {
                      setShowFavoritesPage(false);
                    }
                  }}
                >
                  {!showFavoritesPage ? "Favorites" : "Home"}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {!showFavoritesPage ? (
        <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black min-h-screen flex gap-7 flex-col items-center py-10">
          <SearchBox handleSubmit={handleSubmit} input={input} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDish.length === 0 ? (
              <div className="col-span-full flex justify-center items-center mt-24">
                <h2 className="text-white text-xl font-semibold ms-2">
                  No Dish Found.
                </h2>
              </div>
            ) : (
              filteredDish.map((dish) => {
                return (
                  <RecipeCard
                    buttonText="Add To Favorites"
                    img={dish.img}
                    name={dish.name}
                    recipe={dish.recipe}
                    ingredients={dish.ingredients}
                    setShowModal={setShowModal}
                    setSelectedDish={setSelectedDish}
                    setLocalStorage={setLocalStorage}
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
      ) : (
        <FavortiesPage
          favDish={favDish}
          showModal={showModal}
          setShowModal={setShowModal}
          setSelectedDish={setSelectedDish}
          setLocalStorage={setLocalStorage}
          selectedDish={selectedDish}
          removeFromLocalStorage={removeFromLocalStorage}
        />
      )}
    </>
  );
};

export default HomePage;
