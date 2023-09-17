import { OpenAIApi, Configuration } from "openai";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const recipesData = [
    {
      name: "Fried eggs with toast bread and tomato rucola salad",
      duration: "25 minutes",
      ingredients: [
        "2 eggs",
        "250g butter ",
        "10g salt",
        "10g pepper",
        "100g parmesan ",
        "1 cup cherry tomatoes",
        "2 cups fresh arugula leaves ",
      ],
      preparation:
        "Prepare the Tomato Arugula Salad: In a bowl, combine the halved cherry tomatoes and fresh arugula leaves. Drizzle with extra-virgin olive oil and balsamic vinegar. Season with salt and pepper to taste. Toss everything together until well combined. Add optional toppings like grated Parmesan cheese, sliced red onions, or croutons if desired. Set the salad aside while you prepare the eggs and toast. Toast the Bread: If desired, lightly butter one side of each bread slice. Heat a skillet or toaster over medium heat. Toast the bread slices until they are golden brown on both sides. Remove the toast from the heat and set them aside. Fry the Eggs: Heat a non-stick skillet over medium-high heat. Add 2 tablespoons of butter or cooking oil and let it melt. Crack the eggs carefully into the skillet to avoid breaking the yolks. Season the eggs with a pinch of salt and pepper. Fry the eggs for about 2-3 minutes for sunny-side-up or longer if you prefer them over-easy or over-hard. Once the whites are set and the yolks are cooked to your liking, carefully remove the fried eggs from the skillet. Assemble the Dish: Place a piece of toasted bread on each plate. Place a fried egg on top of each slice of toast. Serve the tomato arugula salad on the side or as a bed under the eggs and toast. Enjoy your delicious meal of fried eggs with toast bread and tomato arugula salad! It's a perfect balance of protein, carbs, and fresh veggies.",
    },
    {
      name: "Apple Banana Salad",
      duration: "10 minutes",
      ingredients: [
        "150g apple",
        "200g banana",
        "100g lettuce",
        "1/2 cup grapes",
        "50ml honey",
        "20ml lemon",
      ],
      preparation:
        "In a bowl, combine 1 apple, 1 banana, and 1 cup of lettuce. Toss to combine. If you want to add some crunch and extra flavor, you can toast the chopped nuts in a dry skillet over medium heat for a few minutes until they become fragrant. Allow them to cool before adding to the salad.If you prefer a creamier salad, stir in 1/4 cup of Greek yogurt or drizzle honey or maple syrup to taste.Refrigerate the salad for about 15-30 minutes before serving if you'd like it to be cold. Serve the apple banana salad as a refreshing snack, a side dish, or even as a healthy dessert.",
    },
    {
      name: "Apple Banana Bread",
      duration: "1 hour",
      ingredients: [
        "100g apple",
        "200g bananas",
        "100g flour",
        "30g sugar",
        "baking powder",
        "1/2 cup butter",
      ],
      preparation:
        "In a bowl, combine 1 cup of flour, 1/2 cup of sugar, 1 teaspoon of baking powder, 1 apple, and 1 banana. Mix until combined. Pour into a greased loaf pan and bake at 350 degrees for 45 minutes. This apple banana bread makes for a delicious breakfast, snack, or dessert. The combination of ripe bananas and grated apples creates a moist and flavorful bread that's sure to be a hit with family and friends.",
    },
  ];

  res.status(200).json(recipesData);
};