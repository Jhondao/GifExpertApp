import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ]);

  const onAddCategory = ( newCategory ) => {

    if(  categories.includes(newCategory) ) return;
    setCategories([newCategory, ...categories]);
  }
  

  return (
    <>

        <h1>GifExpertApp</h1>
        
        {/* <p>kG4LFt1YL0Jqb3xkezR3VymA0IEXvBSq </p>  */}

        <AddCategory 
          onNewCategory={ ( value ) => onAddCategory (value) }
        />


        { categories.map( (category) =>  (<GifGrid key={category} category={category} />)  )}

    </>
  )
}
