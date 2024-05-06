const BBQMenu = () => {
  const bbqone = [
    {
      header: "Wisconsin Cheese Curds",
      body: "",
      price: "$7.99",
    },
    {
      header: "Deep Fried Loaded Potato Skins",
      body: "",
      price: "$8.59",
    },
    {
      header: "Pretzel Nuggets & Beer Cheese",
      body: "",
      price: "$8.69",
    },
    {
      header: "Onion Rings",
      body: "",
      price: "$7.99",
    },
    {
      header: "Jalapeno Poppers",
      body: "",
      price: "$8.79",
    },
    {
      header: "Fried Green Tomatoes",
      body: "",
      price: "$7.99",
    },
    {
      header: "Handmade Chips & Cheese",
      body: "",
      price: "$7.99",
    },
    {
      header: "5 Smoked Wings",
      body: "",
      price: "$8.99",
    },
    {
      header: "10 Smoked Wings",
      body: "",
      price: "$12.99",
    },
    {
      header: "Cup of Soup or Chili",
      body: "",
      price: "$4.99",
    },
    {
      header: "Bowl of Soup or Chili",
      body: "",
      price: "$5.99",
    },
  ];

  const bbqtwo = [
    {
      header: "Loaded Smoked Mac & Cheese",
      body: "Load your smoked mac & cheese with your choice of brisket or pulled pork topped with onion tanglers for a little crunch!",
      price: "$14.99",
    },
    {
      header: "Half Rack of Ribs",
      body: "Slow smoked & served with sauce of the week and your choice of two sides!",
      price: "$18.99",
    },
    {
      header: "Full Rack of Ribs",
      body: "Slow smoked & served with sauce of the week and your choice of two sides!",
      price: "$24.99",
    },
    {
      header: "Farmers Skillet",
      body: "Brisket, pork, or chicken, served on deep fried American fries or crispy French fries, bacon bits, and cheese, side of source cream, and drizzle of sauce of thw eeek, side of Texas garlic toast, and side salad.",
      price: "$14.99",
    },
    {
      header: "Loaded Baked Potato or Fries",
      body: "Top your potato with either brisket, pork, or smoked chicken, bacon, cheese, sour cream, and onion tanglers",
      price: "$14.99",
    },
  ];
  const bbqthree = [
    {
      header: "Nachos",
      body: "Brisket, pork, or chicken on a bed of housemade chips and lettuce, topped with tomato, red, yellow, and green sweet peppers, red onion, sour cream, and salsa",
      price: "$14.99",
    },
    {
      header: "Burrito",
      body: "Your choice of brisket, pulled pork, or smoked chicken in a twelve inch flour tortilla with cheese, refried beans, red onion, sour cream, and salsa",
      price: "$12.99",
    },
    {
      header: "Quesadilla",
      body: "Brisket, pork, or smoked chicken with cheese and mixed peppers and onions",
      price: "$12.99",
    },
    {
      header: "Smoked Chicken Wrap",
      body: "Mango tequila jalapeno sauce (not spicy!), cheese, lettuce, tomato, and side of fries",
      price: "$15.99",
    },
  ];
  const bbqburgers = [
    {
      header: "Taco Burger",
      body: "Burger topped with Doritos, cheese sauce, and taco seasoning",
      price: "$14.99",
    },
    {
      header: "Barnyard",
      body: "Burger topped with brisket or pork, cheese, lettuce, tomato, and red onion",
      price: "$16.99",
    },
    {
      header: "Haystack",
      body: "Cheese, onion tanglers, slice of sweet red onion, and a sunny side up egg.",
      price: "$16.99",
    },
    {
      header: "Cowboy",
      body: "Burger topped with onion rings, BBQ sauce, bacon, and cheddar jack cheese",
      price: "$14.99",
    },
    {
      header: "Hawaiian Chicken",
      body: "Grilled BBQ chicken, grilled pineapple ring, lettuce, and tomato",
      price: "$13.99",
    },
    {
      header: "Hot Shot",
      body: "Burger, bacon, pepper jack cheese, tomato, onion tanglers, and habanero bacon jam",
      price: "$14.99",
    },
    {
      header: "Just a Burger",
      body: "1/3 lb burger patty with lettuce, tomato, onion (add cheese for $1.00 more)",
      price: "$10.99",
    },
    {
      header: "Four Piece Chicken Tender Basket",
      body: "Four chicken tenders, dipping sauce, and fries",
      price: "$11.99",
    },
    {
      header: "Two Piece Chicken Tender Basket",
      body: "Two chicken tenders, dipping sauce, and fries",
      price: "$9.99",
    },
  ];

  const pack = [
    {
      header: "One Meat, Two Sides, & Cornbread",
      body: "",
      price: "$18.99",
    },
    {
      header: "Two Meats, Two Sides, & Cornbread",
      body: "",
      price: "$24.99",
    },
    {
      header: "Backyard Sampler - all of the featured meats & 3 sides",
      body: "",
      price: "$38.99",
    },
  ];

  const backwoods = [
    {
      header: "Pastrami Reuben",
      body: "Tender slow smoked pastrami, melted swiss cheese, fresh sauerkraut, or cole slaw, and thousand island on grilled dark rye bread",
      price: "$15.49",
    },
    {
      header: "Smoked Hammy Sammy",
      body: "Doubled smoked brown sugar ham, swiss cheese, and mayo on homemade white, wheat, or rye bread",
      price: "$12.99",
    },
    {
      header: "Smoked Turkey and Cranberry",
      body: "Slow smoked turkey, your choice of cheese, on your choice of bread with cranberry sauce on the side",
      price: "$14.99",
    },
    {
      header: "Smokestack Sandwich",
      body: "Smoked turkey and ham, bacon, lettuce, tomato, onion, swiss, and American cheese on your choice of homemade bread",
      price: "$16.49",
    },
  ];

  const bbqdessert = [
    {
      header: "Slice of Pie or Smoked Brownie",
      body: "",
      price: "$4.99",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center mx-2 menucontainer">
      <div className="flex justify-center items-center flex-col">
      <h1 className="text-6xl">BBQ </h1>
      <h1 className="text-6xl my-10">Appetizers </h1>
      
      <div className="grid grid-cols-3 gap-8">
        {bbqone.map((bbqone, index) => (
          <div key={index} className="grid">
            <div className="flex items-center ">
              <h2 className="text-3xl">{bbqone.header}</h2>
              <p> ............{bbqone.price}</p>
            </div>
            <div>
              <p className="mx-12 max-w-sm">{bbqone.body}</p>
            </div>
            <div>
            </div>
          </div>
        ))}
      </div>
      <div></div>
      <h1 className="text-4xl mt-10">Fan Favorites</h1>
      <div className="grid grid-cols-3 gap-8 pb-12">
        {bbqtwo.map((bbqtwo, index) => (
          <div key={index} className="grid">
            <div className="flex items-center ">
              <h2 className="text-3xl">{bbqtwo.header}</h2>
              <p> ............{bbqtwo.price}</p>
            </div>
            <div>
              <p className="mx-12 max-w-sm">{bbqtwo.body}</p>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-4xl mt-10">Burritos, Nachos, and Wraps</h1>

      <div className="grid grid-cols-3 gap-8">
        {bbqthree.map((bbqthree, index) => (
          <div key={index} className="grid">
            <div className="flex items-center ">
              <h2 className="text-3xl">{bbqthree.header}</h2>
              <p>............{bbqthree.price}</p>
            </div>
            <div>
              <p className="mx-12 max-w-sm">{bbqthree.body}</p>
            </div>
            <div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-4xl mt-10">Burgers, Baskets, and Wraps</h1>

      <div className="grid grid-cols-3 gap-8">
        {bbqburgers.map((bbqburgers, index) => (
          <div key={index} className="grid">
            <div className="flex items-center ">
              <h2 className="text-3xl">{bbqburgers.header}</h2>
              <p>............{bbqburgers.price}</p>
            </div>
            <div>
              <p className="mx-12 max-w-sm">{bbqburgers.body}</p>
            </div>
            <div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-4xl mt-10">Backwoods Sandwiches</h1>

      <div className="grid grid-cols-3 gap-8">
        {backwoods.map((backwoods, index) => (
          <div key={index} className="grid">
            <div className="flex items-center ">
              <h2 className="text-3xl">{backwoods.header}</h2>
              <p> ............{backwoods.price}</p>
            </div>
            <div>
              <p className="mx-12 max-w-sm">{backwoods.body}</p>
            </div>
            <div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-4xl mt-10">Feed the Pack</h1>
      <p>
        Choose from beef brisket, maple glazed pulled pork, BBQ pork ribs,
        smoked chicken, honey smoked ham, smoked turkey, or burnt ends
      </p>
      <div className="grid grid-rows-3 ">
        {pack.map((pack, index) => (
          <div key={index} className="grid">
            <div className="flex items-center ">
              <h2 className="text-3xl">{pack.header}</h2>
              <p>............{pack.price}</p>
            </div>
            <div>
              <p className="mx-12 max-w-sm">{pack.body}</p>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-4xl mt-10">Desserts</h1>

      {bbqdessert.map((bbqdessert, index) => (
        <div key={index} className="grid">
          <div className="flex items-center ">
            <h2 className="text-3xl">{bbqdessert.header}</h2>
            <p>............{bbqdessert.price}</p>
          </div>
          <div>
            <p className="mx-12 max-w-sm">{bbqdessert.body}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};
export default BBQMenu;
