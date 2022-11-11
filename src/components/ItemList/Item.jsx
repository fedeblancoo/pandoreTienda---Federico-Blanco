import React from 'react';

function Item({ title, img, price }) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={img} alt={title} />
            </div>
        <div className="card-detail">
            <h3>{title}</h3>
            <p>${price}.-</p>
        </div>
      </div>
    );
  }

export default Item

/* <MyButton color={color}>Ver más</MyButton> */