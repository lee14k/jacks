const LD = () => {
const lunch = [
    {
        "header": "Soup of the Day or Chili",
        "body": "Fresh and homemade. Cup  | Bowl",
        "price": "4.99"
    },
    {
        "header": "Deep Fried Mac N Cheese",
        "body": "Triangles of mac & cheese, lightly breaded & deep fried to golden brown",
        "price": "6.99"
    },
    {
        "header": "Bread Sticks",
        "body": "Filled with melted mozzarella and served with marinara sauce.",
        "price": "6.99"
    },
    {
        "header": "Mozzarella Sticks",
        "body": "Fried to a golden brown and served with marinara sauce.",
        "price": "8.79"
    },
    {
        "header": "French Fried Portobellos",
        "body": "Premium mushrooms deep fried golden with ranch dipping sauce.",
        "price": "8.99"
    },
    {
        "header": "Jalape\u00f1o Poppers",
        "body": "Cream cheese and jalape\u00f1o deep fried and crunchy with just the right bite.",
        "price": "8.99"
    },
    {
        "header": "Basket of Onion Rings",
        "body": "Sweet onion slices dipped in a light golden batter.",
        "price": "7.99"
    },
    {
        "header": "Taco Salad",
        "body": "Fresh lettuce topped with seasoned ground beef, cheese, taco chips, tomatoes, onions and black olives. Served in a crisp tortilla shell with salsa and sour cream.",
        "price": "13.99"
    },
    {
        "header": "Chef Salad",
        "body": "Fresh lettuce, ham, turkey, Swiss and American cheese, eggs, tomatoes, onions, and croutons.  Small",
        "price": "12.99"
    },
    {
        "header": "Grilled Chicken Salad",
        "body": "A sliced grilled chicken breast atop a bed of fresh lettuce, garnished with raw onion rings, tomatoes, black olives, and croutons.",
        "price": "11.99"
    },
    {
        "header": "Turkey Supreme",
        "body": "A bed of fresh lettuce, diced turkey breast, tomato wedges, croutons, and cheddar cheese with both ranch and red French dressings.",
        "price": "11.99"
    },
    {
        "header": "Wings",
        "body": "Tender deep fried chicken wings either tossed with your choice of smokin\u2019 hot sauce or garlic Parmesan or served with BBQ sauce, sweet and sour, or ranch dressing. Ten wings  | Five Wings",
        "price": "14.99"
    },
    {
        "header": "Wisconsin Cheese Curds",
        "body": "Two eggs, two sausage links, or two strips of bacon, hash browns, and toast.",
        "price": "$10.49"
    },
    {
        "header": "Can\u2019t Decide? Basket",
        "body": "Onion rings,  Mozzarella sticks, portabella mushrooms, cheese curds, and french fries.",
        "price": "2"
    },
    {
        "header": "Reuben",
        "body": "Our most popular sandwich! Tender sliced slow roasted corned beef, melted Swiss cheese, fresh sauerkraut Thousand Island on grilled dark rye bread.",
        "price": "11.99"
    },
    {
        "header": "Grilled Chicken Sandwich",
        "body": "Griled chicken breast served with lettuce, tomato, and mayo on a bun.",
        "price": "10.89"
    },
    {
        "header": "Classic BLT",
        "body": "Bacon, lettuce, tomato, and mayo on homemade toasted white, wheat, or rye.",
        "price": "9.59"
    },
    {
        "header": "Fresh Whitefish Sandwich",
        "body": "A fresh whitefish fillet, lightly breaded, deep-fried and served on a bun with lettuce and tartar sauce",
        "price": "12.99"
    },
    {
        "header": "Quesadilla",
        "body": "Grilled seasoned chicken or taco meat, onions, red and green peppers, cheddar and Monterey jack cheese on a grilled flour tortilla. Comes with sour cream and salsa.",
        "price": "11.99"
    },
    {
        "header": "Fish Sandwich",
        "body": "Deep fried breaded cod with lettuce and tartar sauce served on a bun.",
        "price": "10.49"
    },
    {
        "header": "Stacked Turkey & Bacon",
        "body": "Sliced turkey, crisp bacon, and American cheese with lettuce, tomato, and mayo served on a grilled sub bun.",
        "price": "11.99"
    },
    {
        "header": "Veggie Sandwich",
        "body": "Swiss, lettuce, tomato, onion, green peppers, mushrooms, and sauce on grilled dark rye bread.",
        "price": "8.99"
    },
    {
        "header": "Hammy Sammy",
        "body": "Ham, swiss, lettuce, tomato, and ranch dressing on choice of grilled bread.",
        "price": "11.99"
    },
    {
        "header": "Northwoods Hoagie",
        "body": "Grilled chopped steak with mushrooms, onions, and melted mozzarella cheese served on a  inch bun.",
        "price": "6"
    },
    {
        "header": "Cold Sandwiches",
        "body": "Half sandwich and cup of soup.",
        "price": "8.69"
    },
    {
        "header": "Grilled Cheese Sandwich",
        "body": "Three slices of American cheese on your choice of homemade bread and grilled to perfection.",
        "price": "5.99"
    },
    {
        "header": "Chicken Tender Melt",
        "body": [],
        "price": null
    },
    {
        "header": "Hot Beef, Turkey, or",
        "body": [],
        "price": null
    },
    {
        "header": "Pork",
        "body": "Hot sandwich with mashed potatoes or french fries covered in gravy on white or wheat.  Half",
        "price": "11.99"
    },
    {
        "header": "Tuna",
        "body": [],
        "price": null
    },
    {
        "header": "Salad",
        "body": "",
        "price": "7.99"
    },
    {
        "header": "Roast beef, turkey,",
        "body": [],
        "price": null
    },
    {
        "header": "or pork",
        "body": "",
        "price": "8.79"
    },
    {
        "header": "Egg",
        "body": [],
        "price": null
    },
    {
        "header": "Salad",
        "body": "",
        "price": "4.99"
    },
    {
        "header": "Hot Hamburger",
        "body": "/lb hamburger on a bun with mashed potatoes or french fries, covered with gravy.  Chicken tenders on your choice of grilled homemade bread, bacon, Swiss, and American with Ranch dressing.",
        "price": "1"
    },
    {
        "header": "Firehouse",
        "body": "/ lb patty with pepper-jack cheese, jalape\u00f1o, BBQ sauce, and topped with onion tanglers tossed in sriacha.",
        "price": "1"
    },
    {
        "header": "M & M",
        "body": "/ lb patty, grilled mushrooms, and two slices of mozzarella cheese.",
        "price": "1"
    },
    {
        "header": "Patty Melt",
        "body": "oz patty with Swiss and American cheese with saut\u00e9ed onions on grilled rye.",
        "price": "10"
    },
    {
        "header": "Grilled Cheeseburger",
        "body": "Best of both worlds! / lb burger and cheese served on grilled white, wheat, or rye.",
        "price": "1"
    },
    {
        "header": "Cowboy Burger",
        "body": "/ lb patty, onion rings, bacon, BBQ sauce, shredded cheddar, and Monterey jack cheese.  Bunyan Burger / lb patty and a Brat patty with grilled onions, American and Swiss cheese, and Jack sauce.",
        "price": "1"
    },
    {
        "header": "Hamburger",
        "body": "/ lb patty with lettuce, tomato, onion, and pickle. . Make it a cheeseburger - add",
        "price": "1"
    },
    {
        "header": "Chicken Tender Basket",
        "body": "Served with choice of potato and today\u2019s salad or tossed salad, with BBQ, ranch, sweet and sour or honey mustard for dipping. () , Half Order",
        "price": "4"
    },
    {
        "header": "Chicken Tender Wrap",
        "body": "Golden fried chicken tenders, lettuce, tomato, cheese, and your choice of sauce wrapped in a flour tortilla.",
        "price": "10.89"
    },
    {
        "header": "Philly Wrap",
        "body": "Philly steak with saut\u00e9ed onions, red and green peppers, with melted mozzarella cheese stuffed inside a warm tortilla.",
        "price": "12.99"
    },
    {
        "header": "Shrimp Basket",
        "body": "Served with choice of potato and today\u2019s salad or tossed salad with shrimp sauce.",
        "price": "12.99"
    },
    {
        "header": "Tuscan Chicken Wrap",
        "body": "Sliced grilled chicken with lettuce, tomato, onions, and cheese wrapped in a grilled tortilla with southwest dressing",
        "price": "11.99"
    },
    {
        "header": "Double Double",
        "body": "Two / lb patties and two slices of American cheese.",
        "price": "1"
    },
    {
        "header": "Bacon Cheeseburger",
        "body": "Supreme / lb patty, two slices of American cheese, bacon, lettuce, tomato, onion, and mayo on the side.",
        "price": "1"
    },
    {
        "header": "Lumberjack",
        "body": "/ lb patty with lettuce, tomato, and Jack Sauce.",
        "price": "1"
    },
    {
        "header": "Roast Beef, Roast Pork,",
        "body": [],
        "price": null
    },
    {
        "header": "or Roast Turkey",
        "body": "Slow roasted for tenderness.",
        "price": "13.99"
    },
    {
        "header": "Fresh Whitefish",
        "body": "/ lb patty, grilled mushrooms, and two slices of mozzarella cheese.",
        "price": "1"
    },
    {
        "header": "Country Fried Steak",
        "body": "Sirloin steak lightly breaded golden brown topped with homemade sausage gravy",
        "price": "14.99"
    },
    {
        "header": "Beef and Mushroom Steak",
        "body": "oz sirloin patty topped with grilled mushrooms",
        "price": "10"
    },
    {
        "header": "Grilled Citrus Salmon",
        "body": "/ lb patty, onion rings, bacon, BBQ sauce, shredded cheddar, and Monterey jack cheese.",
        "price": "1"
    },
    {
        "header": "Jumbo Shrimp",
        "body": "/ lb patty and a Brat patty with grilled onions, American and Swiss cheese, and Jack sauce.",
        "price": "1"
    },
    {
        "header": "Beer Battered Cod",
        "body": "/ lb patty with lettuce, tomato, onion, and pickle. . Make it a cheeseburger - add",
        "price": "1"
    },
    {
        "header": "Fried Chicken",
        "body": "Four pieces fresh cut chicken, hand- breaded in our house made seasoning mix, fried golden brown",
        "price": "14.99"
    },
    {
        "header": "Smothered Chicken Breast",
        "body": "oz grilled chicken breast topped with grilled onions, mushrooms, and melted mozzarella",
        "price": "6"
    },
    {
        "header": "Chicken BBQ Bacon Skillet",
        "body": "A grilled boneless chicken breast topped with crisp bacon strips, a cheddar-jack blend, lightly drizzled with BBQ sauce.",
        "price": "13.99"
    },
    {
        "header": "Polish Sausage & Kraut",
        "body": "Served with choice of potato and today\u2019s salad or tossed salad with shrimp sauce.",
        "price": "12.99"
    },
    {
        "header": "Grilled Pork Chops",
        "body": "Two  oz tender chops  One chop",
        "price": "6"
    },
    {
        "header": "Top Sirloin Steak",
        "body": "oz hand cut strip steak prepared to your liking.",
        "price": "8"
    },
    {
        "header": "Steak and Shrimp",
        "body": "A  oz hand cut strip steak grilled to your liking, accompanied by six jumbo shrimp.",
        "price": "6"
    },
    {
        "header": "Liver & Onions",
        "body": "Tender liver smothered with grilled onions  With Bacon",
        "price": "12.99"
    },
    {
        "header": "Delicious Pie",
        "body": "Enjoy a piece of our homemade pie, baked daily.  A la mode",
        "price": "4.99"
    },
    {
        "header": "Pies to Go",
        "body": [
            "(Pre-order one day ahead)"
        ],
        "price": null
    },
    {
        "header": "Famous Rolls",
        "body": [],
        "price": null
    },
    {
        "header": "Logger\u2019s Special",
        "body": "Two slices of French toast with whipped butter and three sausage links.",
        "price": "8.79"
    },
    {
        "header": "Northern Eggs Benedict",
        "body": "Buttermilk biscuit split and topped with two eggs, Canadian bacon, and homemade sausage gravy.",
        "price": "10.99"
    },
    {
        "header": "Hunter\u2019s Special",
        "body": "Two eggs, two sausage patties, hash browns, and toast.",
        "price": "10.99"
    },
    {
        "header": "Northwoods Special",
        "body": "Two eggs, two sausage links, two strips of bacon, and a slice of ham. With hash browns and toast.",
        "price": "$13.99"
    },
    {
        "header": "Biscuits and Gravy",
        "body": "Two homemade buttermilk biscuits, split, grilled, and topped with homemade sausage gravy. . | Half Order",
        "price": "9.89"
    },
    {
        "header": "Sausage Skillet",
        "body": "Golden hash browns topped with two sausage patties and two eggs covered with homemade sausage gravy. Served with toast.",
        "price": "11.99"
    },
    {
        "header": "Camp Special",
        "body": "Two eggs, two sausage links, or two strips of bacon, hash browns, and toast.  Cinnamon Roll  Pecan Roll (Sundays only)",
        "price": "10.49"
    }
]

return (
    <div>
        <h1 className="text-6xl">Lunch and Dinner</h1>
        <div className="flex flex-col justify-center items-center">
            {lunch.map((item, index) => (
                <div key={index} className="flex flex-col justify-center items-center">
                    <h2 className="text-3xl">{item.header}</h2>
                    <p>{item.body}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    </div>
)

}

export default LD;