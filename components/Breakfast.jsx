const Breakfast = () => {
  const bfastone = [
    {
      header: "Camp Special",
      body: "Two eggs, two sausage links, or two strips of bacon, hash browns, and toast.",
      price: "$10.99",
    },
    {
      header: "CB Special",
      body: "Two eggs, Canadian bacon, and toast.",
      price: "$8.99",
    },
    {
      header: "Mini Special",
      body: "One egg, one sausage link or strip of bacon, half order of hash browns, and toast.",
      price: "$6.99",
    },
    {
      header: "Swirl Special",
      body: "Two cinnamon swirl French toast, whipped butter and Canadian bacon.",
      price: "$9.99",
    },
    {
      header: "Steak Special",
      body: "Two eggs, 8 oz. sirloin strip steak, hash browns, and toast.",
      price: "$15.99",
    },
    {
      header: "Sportsman's Special",
      body: "Two griddle cakes with whipped butter, one egg, and two sausage links.",
      price: "$7.99",
    },
    {
      header: "Northwoods Special",
      body: "Two eggs, two sausage links, two strips of bacon, and a slice of ham. With hash browns and toast.",
      price: "$14.99",
    },
    {
      header: "Logger's Special",
      body: "Two slices of French toast with whipped butter and three sausage links.",
      price: "$9.79",
    },
    {
      header: "Northern Eggs Benedict",
      body: "Buttermilk biscuit split and topped with two eggs, Canadian bacon, and homemade sausage gravy.",
      price: "$12.99",
    },
    {
      header: "Hunter's Special",
      body: "Two eggs, two sausage patties, hash browns, and toast.",
      price: "$11.99",
    },
    {
      header: "Breakfast Sandwich",
      body: "Grilled Canadian bacon or sausage patty, one egg, and melted cheese on a toasted English muffin. .",
      price: "$6.29",
    },
    {
      header: "Breakfast Burrito",
      body: "Scrambled eggs, bacon, hash browns, and cheese wrapped in a warm tortilla.  Famous Rolls",
      price: "$10.89",
    },
    {
      header: "Cinnamon Roll 4.99",
      body: [],
      price: null,
    },
    {
      header: "Pecan Roll (Sundays only)",
      body: [],
      price: null,
    },
    {
      header: "The Legend Country Fried Steak",
      body: "Country fried steak golden brown served with two eggs, hash browns, and choice of toast.",
      price: "$14.99",
    },]

    const omelettes=[
    {
      header: "Wood Cutter",
      body: "Ham, mushroom, onion, green pepper, hash browns, and cheese blend.",
      price: "$11.99",
    },
    {
      header: "Meat Lover's",
      body: "Ham, bacon. Canadian bacon, pork sausage, and cheese blend.",
      price: "$11.49",
    },
    {
      header: "Vegetarian",
      body: "Tomato, onion, green pepper, mushroom, and cheese blend.",
      price: "$10.99",
    },
    {
      header: "Build your own omelette",
      body: "Starting with three eggs and our cheese blend.",
      price: "$9.79",
    },
    {
      header: "ADD CHEESE  $0.99 each",
      body: [
        "Cheddar jack blend. Mozzarella,",
        "Swiss, American,",
        "Pepper Jack",
      ],
      price: null,
    },
    {
      header: "ADD VEGGIES $0.70 each",
      body: [
        "Green Pepper, Onion, Tomato,",
        "Mushroom, Jalape\u00f1o, Hash",
        "Browns",
      ],
      price: null,
    },
    {
      header: "ADD MEATS $2.25 each",
      body: [
        "Bacon, Ham, Canadian Bacon,",
        "Sausage, Taco Meat, Fajita Chicken.",
      ],
      price: null,
    },
  ]
  const skillets=[
    {
      header: "Timberman's",
      body: "Grilled ham, hash browns, onion, and green pepper, topped with two eggs and smothered with cheese sauce. Served with toast.",
      price: "$12.99",
    },
    {
      header: "Corned Beef Hash",
      body: "8 oz. of grilled corned beef hash topped with two eggs. Served with toast.",
      price: "$12.99",
    },
    {
      header: "Sausage Skillet",
      body: "Hash browns topped with two sausage patties and two eggs covered with sausage gravy. Served with toast.",
      price: "$12.99",
    },
    {
      header: "Polish Sausage Skillet",
      body: "Hearty skillet of polish sausage, crisp hash browns, green pepper and onion, topped with two eggs. Served with toast.",
      price: "$12.99",
    },
  ]
  const everyday=[
    {
      header: "Biscuits and Gravy",
      body: "Two homemade buttermilk biscuits, split, grilled, and topped with homemade sausage gravy.",
      price: "$10.89 | Half Order $8.79 ",
    },
    {
      header: "Oatmeal or Cream of Wheat",
      body: "Served with brown sugar and milk. Add raisins $0.75 ",
      price: "Cup $3.59 | Bowl 4.29",
    },
    {
      header: "Egg and Toast",
      body: "Add your choice ham, bacon, Canadian bacon, sausage links, or sausage patties.  * Two eggs for $1.29 more",
      price: "$7.59",
    },
  ];

  const bfasttwo = [
    {
      header: "Two Griddle Cakes $4.79",
      body: "With your choice ham, bacon, canadian bacon, sausage links, or sausage patties.",
      price: "$8.79",
    },
    {
      header: "Three Cinnamon Swirl $8.99",
      body: "With your choice ham, bacon, canadian bacon, sausage links, or sausage patties.",
      price: "$12.99",
    },
    {
      header: "Three Griddle Cakes $5.89",
      body: "With your choice ham, bacon, canadian bacon, sausage links, or sausage patties.",
      price: "$9.89",
    },
    {
      header: "Three Blueberry Cakes $8.79",
      body: "With your choice ham, bacon, canadian bacon, sausage links, or sausage patties.",
      price: "$12.99",
    },
    {
      header: "Three French Toast $7.69",
      body: "With your choice ham, bacon, canadian bacon, sausage links, or sausage patties.",
      price: "$11.99",
    },
    {
      header: "Two Pearl Sugar Waffles",
      body: "With syrup and butter",
      price: "$8.99",
    },
  ];

const bsides = [
  {
    header: "Meats",
    body: "Ham, Canadian bacon, bacon, sausage patty, or sausage link",
    price: "$3.99",
  },
  {
    header: "Sausage Gravy",
    body: "",
    price: "$2.99",
  },
  {
    header: "Hash Browns or American Fries",
    body: "",
    price: "$2.99",
  },
  {
    header: "Sweet Roll",
    body: "",
    price: "$5.99",
  },
  {
    header: "Cinnamon Swirl Toast",
    body: "",
    price: "$2.29",
  },
  {
    header: "English Muffin or Biscuit",
    body: "",
    price: "$2.29",
  },
  {
    header: "Homemade Toast",
    body: "",
    price: "$2.29",
  },
]

const sdrinks=[
  {
    header: "Coke, Diet Coke, Mello Yello, Sprite, Cherry Coke, Dr. Pepper",
    body: "",
    price: "$2.79",
  },
  {
    header: "Fresh Brewed Iced Tea",
    body: "Plain or Raspberry",
    price: "$2.79",
  },
  {
    header: "Lemonade",
    body: "",
    price: "$2.79",
  },
  {
    header: "Apple, Cranberry, Orange, Tomato",
    body: "",
    price: "$2.79",
  },
  {
    header: "Coffee",
    body: "Fresh Brewed Classic Roast",
    price: "$2.79",
  },
  {
    header: "Hot Tea",
    body: "",
    price: "$2.20",
  },
  {
    header: "Hot Chocolate",
    body: "",
    price: "$2.89",
  },
]

const kids=[
  {
    header: "Two Pearl Sugar Waffles",
    body: "With syrup and butter",
    price: "$8.99",
  },
  {
    header: "Two Pearl Sugar Waffles",
    body: "With syrup and butter",
    price: "$8.99",
  },
  {
    header: "Two Pearl Sugar Waffles",
    body: "With syrup and butter",
    price: "$8.99",
  },
  {
    header: "Two Pearl Sugar Waffles",
    body: "With syrup and butter",
    price: "$8.99",
  },
  {
    header: "Two Pearl Sugar Waffles",
    body: "With syrup and butter",
    price: "$8.99",
  },
]
  return (
    <div>
      <h1 className="text-6xl">Breakfast</h1>
      <div className="grid grid-cols-3 gap-12">
        {bfastone.map((bfastone, index) => (
          <div key={index} className="grid">
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
      <h1 className="text-4xl my-10">Cakes and French Toasts</h1>

      {bfasttwo.map((bfastone, index) => (
        <div key={index} className="grid">
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
  );
};
export default Breakfast;
