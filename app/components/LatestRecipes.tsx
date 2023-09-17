import React from "react";
import Recipes from "./Recipes";

export default function LatestRecipes() {
  const latestPath = "/latest/latest_";
  return (
    <section className="bg-white py-8 ">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl w-full text-center mb-10">Latest Recipes</h2>
        <div className="flex gap-4 justify-center w-full pb-8 text-center">
          <Recipes src={`${latestPath}1.jpg`} text="French croissant whith butter and peach jam" />

          <Recipes src={`${latestPath}2.jpg`} text="Creamy tomato soup" />

          <Recipes src={`${latestPath}3.jpg`} text="Grilled chicken breast with cooked rice and string-peas" />

          <Recipes src={`${latestPath}4.jpg`} text="Raspberry jam and vanilla cream cake" />
        </div>
      </div>
    </section>
  );
}
