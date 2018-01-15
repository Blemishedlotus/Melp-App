import React from 'react';
import PropTypes from 'prop-types';

import {Glyphicon} from 'react-bootstrap';

const Rating = props => {

    var starArray = [];
    if(props.rating<=0){
      starArray.push(<Glyphicon glyph="star-empty" key={0}/>);
    }
    else{
      for(var i=0; i<props.rating; i++){
        starArray.push(<Glyphicon glyph="star" key={i} />);
      }
    }

  return(
    <div>
    {starArray}
    </div>
  );

}

  Rating.propTypes = {
    rating: PropTypes.number.isRequired

  }

export default Rating;
