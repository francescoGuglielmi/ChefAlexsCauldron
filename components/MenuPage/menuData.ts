// Menu content, transcribed from the original menu artwork.
// Edit dishes here; the page lays them out automatically.
export type Dish = {
  name: string;
  description: string;
};

export type MenuSection = {
  title: string;
  italic: boolean;
  dishes: Dish[];
};

export const menuSections: MenuSection[] = [
  {
    title: "Small Platters & Bites",
    italic: true,
    dishes: [
      {
        name: "Homemade Sourdough, Cultured Herb Butter & House Pickles",
        description:
          "Rustic homemade sourdough, served with house-cultured herb & roasted garlic butter and crisp garden vegetables pickled with mustard seeds and dill.",
      },
      {
        name: "Baked Brie with Blackberries, Honey & Walnuts",
        description:
          "Whole baked Brie with blackberries, thyme, honey and toasted walnuts, served with homemade focaccia sourdough crostini.",
      },
      {
        name: "Date & Dark Ale Chicken Wings",
        description:
          "Roasted chicken wings glazed with soft dates, dark ale, rosemary and warming spices.",
      },
      {
        name: "Honey-Roasted Carrot Hummus",
        description:
          "Honey-roasted carrot hummus finished with lemon and herb oil, served with wholegrain flatbread.",
      },
      {
        name: "’Nduja & Hot Honey Pork Belly Bites",
        description:
          "Crispy pork belly glazed with ’nduja and hot honey, finished with spring onions and fresh herbs.",
      },
      {
        name: "Soy-Marinated Pickled Eggs",
        description: "House-pickled eggs marinated with soy.",
      },
    ],
  },
  {
    title: "Main Feast Platters",
    italic: false,
    dishes: [
      {
        name: "The Cauldron Beef Hammer",
        description:
          "Whole beef shin braised slowly on the bone in red wine and port, served over silky parsnip purée with rosemary and thyme crumb, and a rich braising jus.",
      },
      {
        name: "Spice-Roasted Cauliflower",
        description:
          "Spice-roasted cauliflower served with roasted garlic and white bean cream, spiced butter and hazelnut dukkah.",
      },
      {
        name: "Douce Jame Chicken",
        description:
          "Chicken pieces cooked in a saffron cream with honey, pine nuts and fresh herbs.",
      },
    ],
  },
  {
    title: "Sides",
    italic: true,
    dishes: [
      {
        name: "Charred Hispi Cabbage",
        description:
          "Charred Hispi cabbage finished with aged cheddar, fresh herbs and wholegrain mustard.",
      },
      {
        name: "Honey-Roasted Carrots",
        description:
          "Honey-glazed roasted carrots served with fragrant lavender sour cream.",
      },
      {
        name: "Goose-Fat Spice-Roasted Potato Wedges",
        description:
          "Chunky potato wedges roasted in goose fat with a warming spice blend.",
      },
      {
        name: "Sautéed Greens",
        description: "Seasonal greens sautéed with confit garlic oil.",
      },
    ],
  },
  {
    title: "Dessert",
    italic: true,
    dishes: [
      {
        name: "Sweet Potato Custard Tart",
        description:
          "A silky sweet potato custard tart finished with softly torched meringue.",
      },
    ],
  },
];
