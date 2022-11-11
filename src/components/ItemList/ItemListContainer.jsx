import React, {useState, useEffect} from 'react';
import getItems from '../../Services/MockService';
import Item from './Item';

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(
    () => {
      getItems().then((respuestaDatos) => setProducts(respuestaDatos), []);
    }
  )
  
  return (
    <div className="item-list">
        { products.map ((product) => 
          { return (
            <Item
              key={product.id}
              img={product.img}
              title={product.title}
              price={product.price}
              category={product.category}
            />
          );
        })}
    </div>
  )
}

export default ItemListContainer