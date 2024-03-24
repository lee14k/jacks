const Breakfast = () => {
  const bfastone = [
    {
      header: "Camp Special",
      body: "Two eggs, two sausage links, or two strips of bacon, hash browns, and toast.",
      price: "10.49",
    },
    {
      header: "CB Special",
      body: "Two eggs, Canadian bacon, and toast.",
      price: "$8.29",
    },
    {
      header: "Mini Special",
      body: "One egg, one sausage link or strip of bacon, half order of hash browns, and toast.",
      price: "5.99",
    },
    {
      header: "Swirl Special",
      body: "Two cinnamon swirl French toast, whipped butter and Canadian bacon.",
      price: "8.99",
    },
    {
      header: "Steak Special",
      body: "Two eggs,  oz. sirloin strip steak, hash browns, and toast.",
      price: "6",
    },
    {
      header: "Sportsman's Special",
      body: "Two griddle cakes with whipped butter, one egg, and two sausage links.",
      price: "6.99",
    },
    {
      header: "Northwoods Special",
      body: "Two eggs, two sausage links, two strips of bacon, and a slice of ham. With hash browns and toast.",
      price: "$13.99",
    },
    {
      header: "Logger's Special",
      body: "Two slices of French toast with whipped butter and three sausage links.",
      price: "8.79",
    },
    {
      header: "Northern Eggs Benedict",
      body: "Buttermilk biscuit split and topped with two eggs, Canadian bacon, and homemade sausage gravy.",
      price: "10.99",
    },
    {
      header: "Hunter's Special",
      body: "Two eggs, two sausage patties, hash browns, and toast.",
      price: "10.99",
    },
    {
      header: "Breakfast Sandwich",
      body: "Grilled Canadian bacon or sausage patty, one egg, and melted cheese on a toasted English muffin. .",
      price: "5.29",
    },
    {
      header: "Breakfast Burrito",
      body: "Scrambled eggs, bacon, hash browns, and cheese wrapped in a warm tortilla.  Famous Rolls",
      price: "9.89",
    },
    {
      header: "Cinnamon Roll 4.99",
      body: [],
      price: null,
    },
    {
      header: "Pecan Roll (Sundays",
      body: [],
      price: null,
    },
    {
      header: "The Legend Country Fried Steak",
      body: "Country fried steak golden brown served with two eggs, hash browns, and choice of toast.",
      price: "13.99",
    },
    {
      header: "Wood Cutter",
      body: "Ham, mushroom, onion, green pepper, hash browns, and cheese blend.",
      price: "11.49",
    },
    {
      header: "Build your own omelette",
      body: "Starting with three eggs and our cheese blend.",
      price: "8.79",
    },
    {
      header: "Meat Lover's",
      body: "Ham, bacon. Canadian bacon, pork sausage, and cheese blend.",
      price: "12.49",
    },
    {
      header: "Vegetarian",
      body: "Tomato, onion, green pepper, mushroom, and cheese blend.",
      price: "10.49",
    },
    {
      header: "ADD CHEESE  0.99 each",
      body: [
        "Cheddar cheese blend. Mozzarella,",
        "Swiss, American, Provolone,",
        "Pepper Jack",
      ],
      price: null,
    },
    {
      header: "ADD VEGGIES 0.60 each",
      body: [
        "Green Pepper, Onion, Tomato,",
        "Mushroom, Jalape\u00f1o, Hash",
        "Browns",
      ],
      price: null,
    },
    {
      header: "ADD MEATS 1.95 each",
      body: [
        "Bacon, Ham, Canadian Bacon,",
        "Sausage, Taco Meat, Fajita Chicken.",
      ],
      price: null,
    },
    {
      header: "Timberman's",
      body: "Grilled ham, hash browns, onion, and green pepper, topped with two eggs and smothered with cheese sauce. Served with toast.",
      price: "11.99",
    },
    {
      header: "Corned Beef Hash",
      body: "oz. of grilled corned beef hash topped with two eggs. Served with toast.",
      price: "8",
    },
    {
      header: "Sausage Skillet",
      body: "Hash browns topped with two sausage patties and two eggs covered with sausage gravy. Served with toast.",
      price: "11.99",
    },
    {
      header: "Polish Sausage Skillet",
      body: "Hearty skillet of polish sausage, crisp hash browns, green pepper and onion, topped with two eggs. Served with toast.",
      price: "11.99",
    },
    {
      header: "Two Griddle Cakes 4.39",
      body: "With your choice ham, bacon, canadian bacon, sausage links, or sausage patties.",
      price: "8.39",
    },
    {
      header: "Three Cinnamon Swirl",
      body: [],
      price: null,
    },
    {
      header: "French Toast 8.79",
      body: [],
      price: null,
    },
    {
      header: "Three Griddle Cakes 5.49",
      body: [],
      price: null,
    },
    {
      header: "Three Blueberry Cakes 8.79",
      body: [],
      price: null,
    },
    {
      header: "Three French Toast 7.69",
      body: [],
      price: null,
    },
    {
      header: "Two Pearl Sugar Waffles",
      body: "With syrup and butter.",
      price: "8.29",
    },
    {
      header: "Biscuits and Gravy",
      body: "Two homemade buttermilk biscuits, split, grilled, and topped with homemade sausage gravy. . | Half Order",
      price: "9.89",
    },
    {
      header: "Oatmeal or Cream of Wheat",
      body: "Served with brown sugar and milk. Add raisins  Cup  | Bowl .",
      price: "0.60",
    },
    {
      header: "Egg and Toast 3.29",
      body: "Add your choice ham, bacon, Canadian bacon, sausage links, or sausage patties.  * Two eggs for  more",
      price: "7.29",
    },
    {
      header: "Scrambled Egg Beaters",
      body: "With toast.  With your choice ham, bacon, canadian bacon, sausage links, or sausage patties.  With your choice ham, bacon, canadian bacon, sausage links, or sausage patties.  With your choice ham, bacon, canadian bacon, sausage links, or sausage patties.  With your choice ham, bacon, canadian bacon, sausage links, or sausage patties.",
      price: "6.59",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl">Breakfast</h1>
      <div>
        {bfastone.map((bfastone, index) => (
          <div key={index} className="flex flex-col justify-center items-center">
            <div>
              <h2 className="text-2xl">{bfastone.header}</h2>
            </div>
            <div>
              <p>{bfastone.body}</p>
            </div>
            <div>
              <p>{bfastone.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Breakfast;
