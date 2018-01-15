import React from 'react';
import PropTypes from 'prop-types';


import Restaurant from './Restaurant';

const Content = props =>

<div className="restaurant-list">
  <ul>
  {props.restaurants.map((restaurant, index) =>
    <Restaurant
      key={index}
      id={restaurant.id}
      name ={restaurant.name}
      contact={restaurant.contact}
      address={restaurant.address}
      rating= {restaurant.rating}
      />
  )}
  </ul>
</div>



Content.propTypes = {
  restaurants: PropTypes.array.isRequired
}


export default Content;
