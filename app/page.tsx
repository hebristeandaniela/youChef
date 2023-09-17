'use client'

import Modal from './components/Modal' 
import LatestRecipes from './components/LatestRecipes'
import EnterTheCommunity from './components/EnterTheCommunity'
import Header from "./components/Header";
import { IngredientsContextProvider } from "./components/IngredientsContext";



export default function Home() {

  return (
    <IngredientsContextProvider>
      <main className="pt-[92.25px]">
        <Header/>
        <LatestRecipes/>
        <EnterTheCommunity/>
        <Modal/>
      </main>
    </IngredientsContextProvider>
  )
}