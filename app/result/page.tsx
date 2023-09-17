'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {useSearchParams} from 'next/navigation'
import ResultElement from '../components/ResultElement'

interface Recipe {
  name: string;
  duration: string;
  ingredients: string[];
  preparation: string;
}


export default function ResultPage() {
  const [isLoading, setIsLoading] = useState(false);
const [recipes, setRecipes] = useState<Recipe[]>([]);

 const searchParams= useSearchParams()
const category= searchParams?.get('selectedCategory')
const ingredients= searchParams?.get('ingredients')

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/openai?ingredients=${ingredients}?selectedCategory=${category}`);
        if (!response.ok) {
          throw new Error(`Error! ${response.status}`);
        }
           const result: Recipe[] = await response.json();
     setRecipes(result);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);



  return (
    <main className='pt-[92.25px] bg-gray-200'>
      <div className='container mx-auto flex flex-col items-center p-4 py-12 min-h-[calc(100vh-92.24px-148.94px)]'>
        <h1 className='w-full text-center pb-8 text-4xl font-semibold'>Found recipes in {category} category</h1>
        {isLoading && (
          <Image
            className='w-40 h-40 self-center'
            src={'https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif'}
            alt='loading gif'
            width={300}
            height={300}
          />
        )}
        {!isLoading && (
         <div className='flex flex-col gap-8 w-full'>
            {recipes.map((recipe, index) => (
              <ResultElement key={index} recipe={recipe} category={category} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}