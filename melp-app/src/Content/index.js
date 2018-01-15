import React from 'react';
import PropTypes from 'prop-types';


import Restaurant from './Restaurant';

const Content = props =>

<div className="restaurant-list">
  <div className="sorter">
    <h4>Order by Name / Rating</h4>
    <label className="switch">
      <input
      type="checkbox"
      onChange={props.toggleSorter}
      checked={props.byRating}
      />
      <span className="slider round"></span>
    </label>
  </div>
  <ul>
  {props.restaurants
    .sort((a,b)=>{
      if(props.byRating){
        if(a.rating > b.rating) return -1;
        if(a.rating < b.rating) return 1;
        return 0;
      }
      else{
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
      }
    })
    .map((restaurant, index) =>
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
  restaurants: PropTypes.array.isRequired,
  byRating: PropTypes.bool.isRequired,
  toggleSorter: PropTypes.func.isRequired
}


export default Content;
