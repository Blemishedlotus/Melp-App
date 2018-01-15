import React from 'react';
import PropTypes from 'prop-types';

import {Grid,
        Col,
        Row,
        Glyphicon}
        from 'react-bootstrap';

const Restaurant = props => {

  return(
    <li>
    <div className="restaurant">
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <div className="restaurant-header">
              <p className="restaurant-title">{props.name}</p>
              <div className="restaurant-rating">
              <Glyphicon glyph="star" />
              <Glyphicon glyph="star" />
              <Glyphicon glyph="star" />
              <Glyphicon glyph="star" />
              </div>
              <hr/>
            </div>
          </Col>

        </Row>
        <Row className="show-grid">
          <Col  md={6} sm={3}>
            <p className="restaurant-contact-title">Contact</p>
              <div className="contact-container">
                <ul>
                  <li><Glyphicon glyph="home" /><a href="www.google.com">{props.contact.site}</a></li>
                  <li><Glyphicon glyph="envelope" /><a href=" ">{props.contact.email}</a></li>
                  <li><Glyphicon glyph="earphone" /><a href=" ">{props.contact.phone}</a></li>
                </ul>
              </div>
          </Col>
          <Col  md={6} sm={3}>
            <p className="restaurant-address-title">Address</p>
            <div className="address-container">
            <ul>
              <li>{props.address.street}</li>
              <li>{props.address.city}</li>
              <li>{props.address.state}</li>
              <li>Location</li>
            </ul>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
    </li>
  );
}


Restaurant.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  contact: PropTypes.object.isRequired,
  address: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired

}


export default Restaurant;
