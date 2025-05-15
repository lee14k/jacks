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
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-12 menucontainer p-8 md:p-12">
          <section className="flex flex-col items-center space-y-6 w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900">BBQ</h1>
            <span className="text-xl md:text-2xl text-center text-gray-700 font-bold justify-center items-center">Served after 11am</span>

            {/* Appetizers Section */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-800">Appetizers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bbqone.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col space-y-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{item.header}</h3>
                        <span className="text-lg font-medium text-gray-700 mt-1 md:mt-0">{item.price}</span>
                      </div>
                      <p className="text-sm md:text-base text-gray-600">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fan Favorites Section */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-800">Fan Favorites</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bbqtwo.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col space-y-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{item.header}</h3>
                        <span className="text-lg font-medium text-gray-700 mt-1 md:mt-0">{item.price}</span>
                      </div>
                      <p className="text-sm md:text-base text-gray-600">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Burritos, Nachos, and Wraps Section */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-800">Burritos, Nachos, and Wraps</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bbqthree.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col space-y-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{item.header}</h3>
                        <span className="text-lg font-medium text-gray-700 mt-1 md:mt-0">{item.price}</span>
                      </div>
                      <p className="text-sm md:text-base text-gray-600">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Burgers, Baskets, and Wraps Section */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-800">Burgers, Baskets, and Wraps</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bbqburgers.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col space-y-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{item.header}</h3>
                        <span className="text-lg font-medium text-gray-700 mt-1 md:mt-0">{item.price}</span>
                      </div>
                      <p className="text-sm md:text-base text-gray-600">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backwoods Sandwiches Section */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-800">Backwoods Sandwiches</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {backwoods.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col space-y-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{item.header}</h3>
                        <span className="text-lg font-medium text-gray-700 mt-1 md:mt-0">{item.price}</span>
                      </div>
                      <p className="text-sm md:text-base text-gray-600">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feed the Pack Section */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-800">Feed the Pack</h2>
              <div className="text-center space-y-4">
                <p className="text-lg text-gray-600">
                  Choose from beef brisket, maple glazed pulled pork, BBQ pork ribs,
                  smoked chicken, honey smoked ham, smoked turkey, or burnt ends
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pack.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col space-y-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{item.header}</h3>
                        <span className="text-lg font-medium text-gray-700 mt-1 md:mt-0">{item.price}</span>
                      </div>
                      <p className="text-sm md:text-base text-gray-600">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desserts Section */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-800">Desserts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bbqdessert.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col space-y-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{item.header}</h3>
                        <span className="text-lg font-medium text-gray-700 mt-1 md:mt-0">{item.price}</span>
                      </div>
                      <p className="text-sm md:text-base text-gray-600">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BBQMenu;
