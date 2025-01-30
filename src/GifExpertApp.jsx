import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = ( newCategory ) => {

    if(  categories.includes(newCategory) ) return;
    setCategories([newCategory, ...categories]);
  }
  

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>
        
        {/* <p>kG4LFt1YL0Jqb3xkezR3VymA0IEXvBSq </p>  */}

        {/* input */}
        <AddCategory 
          // setCategories={ setCategories } 
          onNewCategory={ ( value ) => onAddCategory (value) }
        />

        {/* Lista de Gif */}
        <ol>
          { categories.map( categorie => {
            return <li key={ categorie }>{categorie}</li>
          } 
          )}
        </ol>
    </>
  )
}
