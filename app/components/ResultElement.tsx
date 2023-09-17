'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export default function ResultElement({ recipe, category}:any)  {

  
 const [openDivClasses, setOpenDivClasses] = useState({
        pClass: 'hidden',
        divClass: '',
        buttonContent: 'Preparation',
        buttonClasses: 'bg-main text-white border-white'
    })

     function togglePrep(){
        if(openDivClasses.pClass == 'hidden'){
            setOpenDivClasses({pClass: 'block', divClass: "border-2 border-main", buttonContent: 'Close', buttonClasses: 'bg-white text-main border-main'})
        }else{
            setOpenDivClasses({pClass: 'hidden', divClass: '', buttonContent: 'Preparation', buttonClasses: 'bg-main text-white border-white'})
        }
    }

    function handleClick(){
        togglePrep();
    }

    const [isVisible, setIsVisible] = useState(false); 
    const [buttonText, setButtonText] = useState('Preparation');

    function handleVisible() {
        if(!isVisible) {
            setIsVisible(true);
            setButtonText("Close");
        
        }
        else{ 
            setIsVisible(false)
            
            setButtonText("Preparation");

        }
    }

    function getImageByCategory(category:string) {
        switch (category) {
            case 'breakfast':
                return '/category_images/category_breakfast.jpg';
            case 'soups':
                return '/category_images/category_soups.jpg';
            case 'dinner':
                return '/category_images/category_dinner.jpg';
            case 'desserts':
                return '/category_images/category_desserts.jpg';
            case 'salads': 
                return '/category_images/category_salads.jpg';
            case 'quick_and_easy':
                return '/category_images/category_quick.jpg';           
            case 'vegetarian':
                return '/category_images/category_vegetarian.jpg';
            case 'lunch': 
                return '/category_images/category_lunchbox.jpg';
            default:
                return''; 
        }
    }


  return (
       <div className={`relative container border-2 max-w-[1100px] bg-white py-4 px-8 my-4 mb-8 ${isVisible?'bg-border-2 border-amber-600':''}`}>
      <div className='flex flex-row'>
         <div className='transform translate-x-[-80px]  translate-y-2'>
        <Image className='mr-5 my-4 rounded' src={getImageByCategory(category)} alt='img recipe' width={300} height={300}/>
        </div> 
         <div className=' mt-0 mb-2 mr-16 py-6'>
        <h2 className='text-2xl mb-6 font-bold text-black'>{recipe.name}</h2>
        <p className='font-medium text-black mt-1 mb-2'>Preparation time: {recipe.duration}</p>
        <div className='flex flex-row  justify-between font-medium text-black'>
            <p className='text-black cursor-pointer mr-6'>Ingredients:  </p>
        <div className=' flex flex-row gap-24 text-1xl'>
{recipe.ingredients && Array.isArray(recipe.ingredients) && (
                    <>
                        <ul>
                        {recipe.ingredients.map((item: any, index: any) => {
                            if (index<4) {
                            return <li key={index}>{item}</li>;
                            } 
                            return null; 
                        })}
                        </ul>
                        <ul>
                        {recipe.ingredients.map((item: any, index: any) => {
                            if (index<8 && index>3) {
                            return <li key={index}>{item}</li>;
                            }
                            return null;
                        })}
                        </ul>
                        <ul>
                        {recipe.ingredients.map((item: any, index: any) => {
                            if (index<12 && index>7)  {
                            return <li key={index}>{item}</li>;
                            }
                            return null;
                        })}
                        </ul>
                    </>
                )}

        </div>
        </div>
</div>
    </div>
         <div className={`flex flex-row gap-4 text-justify ${isVisible ? '':'hidden' }`}>
           <p className=' text-black'>Preparation:</p>
           <p className='text-black px-4 ' style={{ maxWidth: '1000px' }}>{recipe.preparation}</p>
      
        </div>
        <button className={`absolute justify-end right-12 mb-2  rounded transform translate-x-[-4px] translate-y-[-4px] w-40  cursor-pointer border-2 py-3 px-8  z-10  ${isVisible ? 'text-amber-700 border-amber-700 bg-white': 'bg-amber-600 border-amber-600 text-white '}`} onClick={handleVisible}>{buttonText}</button>
       </div>
      
  )
}