import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = () => {
    setCategories(['Valorant', ...categories]);
  }
  

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>
        
        {/* <p>kG4LFt1YL0Jqb3xkezR3VymA0IEXvBSq </p>  */}

        {/* input */}
        <AddCategory />

        {/* Lista de Gif */}
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
          { categories.map( categorie => {
            return <li key={ categorie }>{categorie}</li>
          } 
          )}
        </ol>
    </>
  )
}
