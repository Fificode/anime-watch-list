import React from 'react';
import {data} from './data';
import './App.css'

const List = () => {
 const [list, setList] = React.useState(data);
 const removeItem = (id) => {
   let removedItem = list.filter((item) => item.id !== id);
setList(removedItem);
 }
 
  return (
    <div>
      <h1>Top 5 Anime List</h1>
      <div className='container'>
        {
        list.map((item) => {
                const {id, img, title} = item;
                return(
                    <div key={id} className="items">
<img src={img} alt="Anime picture" />
<div className='title-container'><h2>{title}</h2></div>
<button className='btn-1' onClick={() => removeItem(id)}>Delete</button>
                    </div>
                    
                );
               
            })
        }
<div className='btn-container'>
     <button className='btn-2' onClick={() => setList([])}>Clear List</button>
     </div>
     </div>
</div>
  );
};

export default List;