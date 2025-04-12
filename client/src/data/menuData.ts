import type { MenuItem } from "@shared/types";

export const specialItems: MenuItem[] = [
  {
    id: 1,
    name: "House Blend Coffee",
    price: "$4.50",
    description: "Our signature blend with notes of chocolate, hazelnut, and caramel. Perfectly balanced with a smooth finish.",
    image: "https://images.unsplash.com/photo-1579888944880-d98341245702?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "coffee",
    tag: "Bestseller",
    tagColor: "bg-[#8B4513]/10 text-[#8B4513]"
  },
  {
    id: 2,
    name: "Avocado Toast",
    price: "$8.95",
    description: "Sourdough toast topped with smashed avocado, cherry tomatoes, feta cheese, and a sprinkle of red pepper flakes.",
    image: "https://images.unsplash.com/photo-1557006315-d49f323e2e6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "breakfast",
    tag: "Vegetarian",
    tagColor: "bg-green-100 text-green-800"
  },
  {
    id: 3,
    name: "Belgian Waffle",
    price: "$9.50",
    description: "Light and crispy Belgian waffle topped with fresh berries, whipped cream, and maple syrup.",
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "breakfast",
    tag: "Weekend Special",
    tagColor: "bg-[#8B4513]/10 text-[#8B4513]"
  }
];

export const coffeeItems: MenuItem[] = [
  {
    id: 101,
    name: "Espresso",
    price: "$3.50",
    description: "A concentrated coffee served in a small, strong shot.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    category: "coffee"
  },
  {
    id: 102,
    name: "Cappuccino",
    price: "$4.75",
    description: "Espresso with steamed milk foam, dusted with cocoa powder.",
    image: "https://images.unsplash.com/photo-1534687941688-13b3c3e20513?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    category: "coffee"
  },
  {
    id: 103,
    name: "Latte",
    price: "$4.95",
    description: "Espresso with steamed milk and a light layer of foam.",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    category: "coffee"
  },
  {
    id: 104,
    name: "Mocha",
    price: "$5.25",
    description: "Espresso with chocolate and steamed milk, topped with whipped cream.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    category: "coffee"
  },
  {
    id: 105,
    name: "Americano",
    price: "$3.75",
    description: "Espresso diluted with hot water, similar strength to regular coffee.",
    image: "https://images.unsplash.com/photo-1520031607889-97ba0c7190ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    category: "coffee"
  },
  {
    id: 106,
    name: "Cold Brew",
    price: "$4.95",
    description: "Coffee brewed with cold water over 12-24 hours, smooth and less acidic.",
    image: "https://images.unsplash.com/photo-1578314675249-a6134e70a191?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    category: "coffee"
  }
];

export const breakfastItems: MenuItem[] = [
  {
    id: 201,
    name: "Classic Breakfast",
    price: "$12.95",
    description: "Two eggs any style, bacon or sausage, roasted potatoes, and toast.",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    category: "breakfast"
  },
  {
    id: 202,
    name: "Eggs Benedict",
    price: "$13.50",
    description: "Poached eggs on English muffin with Canadian bacon and hollandaise sauce.",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    category: "breakfast"
  },
  {
    id: 203,
    name: "Granola Bowl",
    price: "$8.95",
    description: "House-made granola with Greek yogurt, fresh fruit, and honey.",
    image: "https://images.unsplash.com/photo-1525522239131-37282ceb6428?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    category: "breakfast"
  },
  {
    id: 204,
    name: "French Toast",
    price: "$10.95",
    description: "Brioche bread soaked in cinnamon custard, grilled and topped with maple syrup.",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    category: "breakfast"
  }
];

export const lunchItems: MenuItem[] = [
  {
    id: 301,
    name: "Chicken Sandwich",
    price: "$12.50",
    description: "Grilled chicken breast with avocado, bacon, lettuce, and aioli on sourdough.",
    image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    category: "lunch"
  },
  {
    id: 302,
    name: "Harvest Salad",
    price: "$11.95",
    description: "Mixed greens with roasted vegetables, quinoa, goat cheese, and balsamic vinaigrette.",
    image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    category: "lunch"
  },
  {
    id: 303,
    name: "Quiche of the Day",
    price: "$9.95",
    description: "House-made quiche with seasonal ingredients, served with a side salad.",
    image: "https://images.unsplash.com/photo-1598233740714-a0873f769819?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    category: "lunch"
  },
  {
    id: 304,
    name: "Soup & Half Sandwich",
    price: "$10.50",
    description: "Cup of soup of the day with half of any sandwich from our menu.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    category: "lunch"
  }
];

export const dessertItems: MenuItem[] = [
  {
    id: 401,
    name: "Chocolate Cake",
    price: "$6.95",
    description: "Rich chocolate cake with dark chocolate ganache and fresh berries.",
    image: "https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    category: "desserts"
  },
  {
    id: 402,
    name: "New York Cheesecake",
    price: "$7.50",
    description: "Classic New York style cheesecake with graham cracker crust and berry compote.",
    image: "https://images.unsplash.com/photo-1567327613485-fbc7bf196198?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    category: "desserts"
  },
  {
    id: 403,
    name: "Apple Tart",
    price: "$6.50",
    description: "Buttery pastry filled with cinnamon-spiced apples and vanilla ice cream.",
    image: "https://images.unsplash.com/photo-1568571780765-9276107466e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    category: "desserts"
  },
  {
    id: 404,
    name: "Tiramisu",
    price: "$7.95",
    description: "Italian dessert with coffee-soaked ladyfingers, mascarpone cream, and cocoa.",
    image: "https://images.unsplash.com/photo-1551529834-525807d6b4f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    category: "desserts"
  }
];
