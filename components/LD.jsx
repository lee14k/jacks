const LD = () => {
  const lunch = [
    {
      header: "Soup of the Day or Chili",
      body: "Fresh and homemade. ",
      price: "$4.99 Cup | $5.99 Bowl",
    },
    {
      header: "Deep Fried Mac & Cheese",
      body: "Triangles of mac & cheese, lightly breaded & deep fried to golden brown",
      price: "$6.99",
    },
    {
      header: "Bread Sticks",
      body: "Filled with melted mozzarella and served with marinara sauce.",
      price: "$6.99",
    },
    {
      header: "Mozzarella Sticks",
      body: "Fried to a golden brown and served with marinara sauce.",
      price: "$8.79",
    },
    {
      header: "French Fried Portobellos",
      body: "Premium mushrooms deep fried golden with ranch dipping sauce.",
      price: "$8.99",
    },
    {
      header: "Jalape\u00f1o Poppers",
      body: "Cream cheese and jalape\u00f1o deep fried and crunchy with just the right bite.",
      price: "$8.99",
    },
    {
      header: "Basket of Onion Rings",
      body: "Sweet onion slices dipped in a light golden batter.",
      price: "$8.99",
    },
    {
      header: "Wisconsin Cheese Curds",
      body: "Creamy Wisconsin cheese curds, lightly breaded and deep fried to gooey perfection",
      price: "$7.99",
    },
    {
      header: "Can\u2019t Decide? Basket",
      body: "Onion rings, 2 Mozzarella sticks, portabella mushrooms, cheese curds, and french fries.",
      price: "$11.99",
    },
    {
      header: "Wings",
      body: "Tender deep fried chicken wings either tossed with your choice of smokin\u2019 hot sauce or garlic Parmesan or served with BBQ sauce, sweet and sour, or ranch dressing.",
      price: "$14.99 Ten wings | $8.99 Five Wings",
    },
  ];

  const salads = [
    {
      header: "Taco Salad",
      body: "Fresh lettuce topped with seasoned ground beef, cheese, taco chips, tomatoes, onions and black olives. Served in a crisp tortilla shell with salsa and sour cream.",
      price: "$13.99",
    },
    {
      header: "Chef Salad",
      body: "Fresh lettuce, ham, turkey, Swiss and American cheese, eggs, tomatoes, onions, and croutons.  Small",
      price: "$12.99 / Small $9.99",
    },
    {
      header: "Grilled Chicken Salad",
      body: "A sliced grilled chicken breast atop a bed of fresh lettuce, garnished with raw onion rings, tomatoes, black olives, and croutons.",
      price: "$11.99",
    },
    {
      header: "Turkey Supreme",
      body: "A bed of fresh lettuce, diced turkey breast, tomato wedges, croutons, and cheddar cheese with both ranch and red French dressings.",
      price: "$11.99",
    },
  ];
  const hots = [
    {
      header: "Reuben",
      body: "Our most popular sandwich! Tender sliced slow roasted corned beef, melted Swiss cheese, fresh sauerkraut Thousand Island on grilled dark rye bread.",
      price: "$14.99",
    },
    {
      header: "Grilled Chicken Sandwich",
      body: "Griled chicken breast served with lettuce, tomato, and mayo on a bun.",
      price: "$12.99",
    },
    {
      header: "Classic BLT",
      body: "Bacon, lettuce, tomato, and mayo on homemade toasted white, wheat, or rye.",
      price: "$12.99",
    },
    {
      header: "Fresh Whitefish Sandwich",
      body: "A fresh whitefish fillet, lightly breaded, deep-fried and served on a bun with lettuce and tartar sauce",
      price: "$15.99",
    },
    {
      header: "Quesadilla",
      body: "Grilled seasoned chicken or taco meat, onions, red and green peppers, cheddar and Monterey jack cheese on a grilled flour tortilla. Comes with sour cream and salsa.",
      price: "$13.99",
    },
    {
      header: "Fish Sandwich",
      body: "Deep fried breaded cod with lettuce and tartar sauce served on a bun.",
      price: "$13.49",
    },
    {
      header: "Stacked Turkey & Bacon",
      body: "Sliced turkey, crisp bacon, and American cheese with lettuce, tomato, and mayo served on a grilled sub bun.",
      price: "$14.99",
    },
    {
      header: "Veggie Sandwich",
      body: "Swiss, lettuce, tomato, onion, green peppers, mushrooms, and sauce on grilled dark rye bread.",
      price: "$11.99",
    },
    {
      header: "Hammy Sammy",
      body: "Ham, swiss, lettuce, tomato, and ranch dressing on choice of grilled bread.",
      price: "$14.99",
    },
    {
      header: "Northwoods Hoagie",
      body: "Grilled chopped steak with mushrooms, onions, and melted mozzarella cheese served on a six inch bun.",
      price: "$14.99",
    },
    {
      header: "Cold Sandwiches",
      body: "Half sandwich and cup of soup.",
      price: "$9.69",
    },
    {
      header: "Grilled Cheese Sandwich",
      body: "Three slices of American cheese on your choice of homemade bread and grilled to perfection.",
      price: "$8.99",
    },
    {
      header: "Chicken Tender Melt",
      body: "Chicken tenders on your choice of grilled homemade bread, baocn, swiss, and ameircan with ranch",
      price: "$14.99",
    },
  ];

  const burgers = [
    {
      header: "Hamburger",
      body: "1/3 lb hamburger on a bun with mashed potatoes or french fries, covered with gravy.  Chicken tenders on your choice of grilled homemade bread, bacon, Swiss, and American with Ranch dressing.",
      price: "$10.59",
    },
    {
      header: "Firehouse",
      body: "1/3 lb patty with pepper-jack cheese, jalape\u00f1o, BBQ sauce, and topped with onion tanglers tossed in sriacha.",
      price: "$15.99",
    },
    {
      header: "M & M",
      body: "1/3 lb patty, grilled mushrooms, and two slices of mozzarella cheese.",
      price: "$13.89",
    },
    {
      header: "Patty Melt",
      body: "10oz patty with Swiss and American cheese with saut\u00e9ed onions on grilled rye.",
      price: "$14.99",
    },
    {
      header: "Grilled Cheeseburger",
      body: "Best of both worlds! 1/3 lb burger and cheese served on grilled white, wheat, or rye.",
      price: "$11.59",
    },
    {
      header: "Cowboy Burger",
      body: "1/3 lb patty, onion rings, bacon, BBQ sauce, shredded cheddar, and Monterey jack cheese.",
      price: "$14.99",
    },
    {
      header: "Double Double",
      body: "Two 1/3 lb patties and two slices of American cheese.",
      price: "$15.59",
    },
    {
      header: "Bacon Cheeseburger",
      body: "Supreme 1/3 lb patty, two slices of American cheese, bacon, lettuce, tomato, onion, and mayo on the side.",
      price: "$14.99",
    },
    {
      header: "Lumberjack",
      body: "1/3 lb patty with lettuce, tomato, and Jack Sauce.",
      price: "$13.99",
    },
    {
      header: "Bunyan Burger",
      body: "1/3 lb patty and a Brat patty with grilled onions, American and Swiss cheese, and Jack sauce.",
      price: "$13.99",
    },
  ];

  const wraps = [
    {
      header: "Chicken Tender Basket",
      body: "Served with choice of potato and today\u2019s salad or tossed salad, with BBQ, ranch, sweet and sour or honey mustard for dipping. () , Half Order",
      price: "4",
    },
    {
      header: "Chicken Tender Wrap",
      body: "Golden fried chicken tenders, lettuce, tomato, cheese, and your choice of sauce wrapped in a flour tortilla.",
      price: "10.89",
    },
    {
      header: "Philly Wrap",
      body: "Philly steak with saut\u00e9ed onions, red and green peppers, with melted mozzarella cheese stuffed inside a warm tortilla.",
      price: "12.99",
    },
    {
      header: "Shrimp Basket",
      body: "Served with choice of potato and today\u2019s salad or tossed salad with shrimp sauce.",
      price: "12.99",
    },
    {
      header: "Tuscan Chicken Wrap",
      body: "Sliced grilled chicken with lettuce, tomato, onions, and cheese wrapped in a grilled tortilla with southwest dressing",
      price: "11.99",
    },
  ];
  const classics = [
    {
      header: "Roast Beef, Roast Pork, or Roast Turkey",
      body: "Slow roasted for tenderness.",
      price: "$14.99",
    },

    {
      header: "Country Fried Steak",
      body: "Sirloin steak lightly breaded golden brown topped with homemade sausage gravy",
      price: "$14.99",
    },
    {
      header: "Beef and Mushroom Steak",
      body: "10 oz sirloin patty topped with grilled mushrooms",
      price: "$13.99",
    },

    {
      header: "Fried Chicken",
      body: "Four pieces fresh cut chicken, hand- breaded in our house made seasoning mix, fried golden brown",
      price: "$14.99",
    },
    {
      header: "Smothered Chicken Breast",
      body: "6oz grilled chicken breast topped with grilled onions, mushrooms, and melted mozzarella",
      price: "$13.99",
    },
    {
      header: "Chicken BBQ Bacon Skillet",
      body: "A grilled boneless chicken breast topped with crisp bacon strips, a cheddar-jack blend, lightly drizzled with BBQ sauce.",
      price: "$13.99",
    },
    {
      header: "Polish Sausage & Kraut",
      body: "Served with choice of potato and today\u2019s salad or tossed salad with shrimp sauce.",
      price: "$13.99",
    },
    {
      header: "Grilled Pork Chops",
      body: "Two 6 oz tender chops | One chop $14.49",
      price: "$16.99",
    },
    {
      header: "Top Sirloin Steak",
      body: "8 oz hand cut strip steak prepared to your liking.",
      price: "$17.99",
    },
    {
      header: "Steak and Shrimp",
      body: "A 8 oz hand cut strip steak grilled to your liking, accompanied by six jumbo shrimp.",
      price: "$19.99",
    },
    {
      header: "Liver & Onions",
      body: "Tender liver smothered with grilled onions | With Bacon $15.99",
      price: "$12.99",
    },
  ];

  const hook = [
    {
      header: "Fresh Whitefish",
      body: "Large fillet deep fried to perfection, served with tartar sauce and lemon",
      price: "$18.99",
    },
    {
      header: "Grilled Citrus Salmon",
      body: "Two lightly seasoned fillets grilled to perfection",
      price: "$18.99 | One fillet $16.99",
    },
    {
      header: "Jumbo Shrimp",
      body: "Deep fried and served with cocktail sauce",
      price: "$15.99",
    },
    {
      header: "Beer Battered Cod",
      body: "Crisp deep fried golden brown cod fillets",
      price: "$14.99",
    },
  ];

  const kidsdin = [
    {
      header: "Hamburger",
      body: "",
      price: "",
    },
    {
      header: "Cheeseburger",
      body: "",
      price: "",
    },
    {
      header: "Grilled Cheese Sandwich",
      body: "",
      price: "",
    },
    {
      header: "Chicken Tenders",
      body: "",
      price: "",
    },
    {
      header: "Hot Dog",
      body: "",
      price: "",
    },
  ];

  const drinkos = [
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
      header: "Hot Chocolate ",
      body: "",
      price: "$2.89",
    },
    {
      header: "Beer",
      body: "Ask your server",
      price: "$3.39",
    },
  ];

  const sides = [
    {
      header: "Potato Chippers",
      body: "",
      price: "$3.99",
    },
    {
      header: "French Fries",
      body: "",
      price: "$3.99",
    },
    {
      header: "Baked Potato",
      body: "",
      price: "$3.99",
    },
    {
      header: "Sweet Potato Waffle Fries",
      body: "",
      price: "$6.99",
    },
    {
      header: "Basket of Fries or Chippers",
      body: "",
      price: "$4.99",
    },
    {
      header: "Mashed Potatoes",
      body: "",
      price: "$2.99, add gravy for $1.00 more",
    },
    {
      header: "Onion Rings",
      body: "",
      price: "$8.99",
    },
    {
      header: "Tossed Salad",
      body: "",
      price: "$3.49",
    },
    {
      header: "Cottage Cheese",
      body: "",
      price: "$3.59",
    },
  ];

  const hdess = [
    {
      header: "Delicious Pie",
      body: "Enjoy a piece of our homemade pie, baked daily.  A la mode",
      price: "4.99",
    },

    {
      header: "Famous Rolls",
      body: [],
      price: null,
    },
    {
      header: "Pies to Go",
      body: ["(Pre-order one day ahead)"],
      price: null,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mx-16 menucontainer">
      <h1 className="text-6xl my-6">Lunch and Dinner</h1>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-6xl my-6">Appetizers</h2>
        <div className="grid grid-cols-3 gap-12">
          {lunch.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <h2 className="text-3xl">{item.header}</h2>
              <p>{item.body}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl my-6">Burgers</h1>
          <p className="mx-12 text-xl my-6">
            {" "}
            Burgers come with your choice of soup, salad, fries, or chippers.
            Sweet potato waffle fries add 1.99 / Onion rings add 3.25 Add ons:
            American, Swiss, Mozzarella, pepper jack, mushrooms, bbq sauce, or
            jalapenos - 1.00 each portobello mushrooms, onion rings, onion
            tanglers, bacon, smoked cheddar - 2.25 each extra burger patty or
            brat patty 3.99 each
          </p>

          <div className="grid grid-cols-3 gap-12">
            {burgers.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <h2 className="text-3xl">{item.header}</h2>
                <p>{item.body}</p>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-6xl my-6">Wraps and Salads</h2>

          <div className="grid grid-cols-3 gap-12">
            {wraps.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <h2 className="text-3xl">{item.header}</h2>
                <p>{item.body}</p>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-12">
            {salads.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <h2 className="text-3xl">{item.header}</h2>
                <p>{item.body}</p>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          Cold Sandwiches tuna salad - 10.99 roast beef, turkey, pork 12.99
          fries not included
        </div>
        sat night feature thing
      </div>
    </div>
  );
};

export default LD;
