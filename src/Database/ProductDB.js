import faker from "faker";

faker.seed(123);

export const productDB = [
  { 
    id: faker.datatype.uuid(),
    category:"painting",
    name: "Camel Student Water Colour Tubes - 12 Shades",
    image:"https://rukminim1.flixcart.com/image/612/612/kffq2kw0/paint/h/h/g/student-water-colour-tubes-12-shades-camel-original-imafvwcgzngmvrqg.jpeg?q=70",
    inStock: faker.datatype.boolean(),
    price: 99,
    rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
    fastDelivery: faker.datatype.boolean()
  },
  { 
    id: faker.datatype.uuid(),
    category:"painting",
    name: "Classmate Stationery Kit Bag (All in one)",
    image:"https://rukminim1.flixcart.com/image/612/612/kfoapow0/art-set/y/u/j/stationery-kit-bag-all-in-one-classmate-original-imafw2qhxg3zr8hj.jpeg?q=70",
    inStock: faker.datatype.boolean(),
    price: 300,
    rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
    fastDelivery: faker.datatype.boolean()
  },
  { 
    id: faker.datatype.uuid(),
    category:"painting",
    name: "FABER-CASTELL 25 Connector Pens",
    image:"https://rukminim1.flixcart.com/image/612/612/ka2tmkw0/marker-highlighter/k/r/d/25-connector-pens-fibre-tip-colour-marker-sketch-pens-faber-original-imafrq4ghyqfkbgh.jpeg?q=70",
    inStock: faker.datatype.boolean(),
    price: 115,
    rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
    fastDelivery: faker.datatype.boolean()
  },
  { 
    id: faker.datatype.uuid(),
    category:"painting",
    name: "FABER-CASTELL Textliner Assorted Set Of 5",
    image:"https://rukminim1.flixcart.com/image/612/612/jbb3wcw0/marker-highlighter/c/4/q/textliner-assorted-set-of-5-classic-highlighter-textliner-faber-original-imafybmhzupsactr.jpeg?q=70",
    inStock: faker.datatype.boolean(),
    price: 200,
    rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
    fastDelivery: faker.datatype.boolean()
  },
  {
    id: faker.datatype.uuid(),
    category:"painting",
    name: "Camel Student Water Colour Tubes - 12 Shades",
    image:"https://rukminim1.flixcart.com/image/612/612/kffq2kw0/paint/h/h/g/student-water-colour-tubes-12-shades-camel-original-imafvwcgzngmvrqg.jpeg?q=70",
    inStock: faker.datatype.boolean(),
    price: 99,
    rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
    fastDelivery: faker.datatype.boolean()
  },
  { 
    id: faker.datatype.uuid(),
    category:"painting",
    name: "Classmate Stationery Kit Bag (All in one)",
    image:"https://rukminim1.flixcart.com/image/612/612/kfoapow0/art-set/y/u/j/stationery-kit-bag-all-in-one-classmate-original-imafw2qhxg3zr8hj.jpeg?q=70",
    inStock: faker.datatype.boolean(),
    price: 300,
    rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
    fastDelivery: faker.datatype.boolean()
  },
  { 
    id: faker.datatype.uuid(),
    category:"painting",
    name: "FABER-CASTELL 25 Connector Pens",
    image:"https://rukminim1.flixcart.com/image/612/612/ka2tmkw0/marker-highlighter/k/r/d/25-connector-pens-fibre-tip-colour-marker-sketch-pens-faber-original-imafrq4ghyqfkbgh.jpeg?q=70",
    inStock: faker.datatype.boolean(),
    price: 115,
    rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
    fastDelivery: faker.datatype.boolean()
  },
  {
    id: faker.datatype.uuid(),
    category:"painting",
    name: "FABER-CASTELL Textliner Assorted Set Of 5",
    image:"https://rukminim1.flixcart.com/image/612/612/jbb3wcw0/marker-highlighter/c/4/q/textliner-assorted-set-of-5-classic-highlighter-textliner-faber-original-imafybmhzupsactr.jpeg?q=70",
    inStock: faker.datatype.boolean(),
    price: 200,
    rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
    fastDelivery: faker.datatype.boolean()
  },
  { 
    id: faker.datatype.uuid(),
    category:"painting",
    name: "Camel Student Water Colour Tubes - 12 Shades",
    image:"https://rukminim1.flixcart.com/image/612/612/kffq2kw0/paint/h/h/g/student-water-colour-tubes-12-shades-camel-original-imafvwcgzngmvrqg.jpeg?q=70",
    inStock: faker.datatype.boolean(),
    price: 99,
    rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
    fastDelivery: faker.datatype.boolean()
  },
  {
    id: faker.datatype.uuid(),
    category:"painting",
    name: "Classmate Stationery Kit Bag (All in one)",
    image:"https://rukminim1.flixcart.com/image/612/612/kfoapow0/art-set/y/u/j/stationery-kit-bag-all-in-one-classmate-original-imafw2qhxg3zr8hj.jpeg?q=70",
    inStock: faker.datatype.boolean(),
    price: 300,
    rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
    fastDelivery: faker.datatype.boolean()
  },
  { 
    id: faker.datatype.uuid(),
    category:"painting",
    name: "FABER-CASTELL 25 Connector Pens",
    image:"https://rukminim1.flixcart.com/image/612/612/ka2tmkw0/marker-highlighter/k/r/d/25-connector-pens-fibre-tip-colour-marker-sketch-pens-faber-original-imafrq4ghyqfkbgh.jpeg?q=70",
    inStock: faker.datatype.boolean(),
    price: 115,
    rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
    fastDelivery: faker.datatype.boolean()
  },
  { 
    id: faker.datatype.uuid(),
    category:"painting",
    name: "FABER-CASTELL Textliner Assorted Set Of 5",
    image:"https://rukminim1.flixcart.com/image/612/612/jbb3wcw0/marker-highlighter/c/4/q/textliner-assorted-set-of-5-classic-highlighter-textliner-faber-original-imafybmhzupsactr.jpeg?q=70",
    inStock: faker.datatype.boolean(),
    price: 200,
    rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
    fastDelivery: faker.datatype.boolean()
  }
];
