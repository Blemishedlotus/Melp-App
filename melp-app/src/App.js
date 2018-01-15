import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Content from './Content';

class App extends Component {

  state = {
    restaurants: [
                  {
                "id": "851f799f-0852-439e-b9b2-df92c43e7672",
                "rating": 1,
                "name": "Barajas, Bahena and Kano",
                "contact": {
                    "site": "https://federico.com",
                    "email": "Anita_Mata71@hotmail.com",
                    "phone": "534 814 204"
                },
                "address": {
                    "street": "82247 Mariano Entrada",
                    "city": "Mérida Alfredotown",
                    "state": "Durango",
                    "location": {
                        "lat": 19.440057053713137,
                        "lng": -99.12704709742486
                    }
                }
            },
            {
                "id": "4e17896d-a26f-44ae-a8a4-5fbd5cde79b0",
                "rating": 0,
                "name": "Hernández - Lira",
                "contact": {
                    "site": "http://graciela.com.mx",
                    "email": "Brandon_Vigil@hotmail.com",
                    "phone": "570 746 998"
                },
                "address": {
                    "street": "93725 Erick Arroyo",
                    "city": "Mateofurt",
                    "state": "Hidalgo",
                    "location": {
                        "lat": 19.437904276994995,
                        "lng": -99.12865767750226
                    }
                }
            },
            {
                "id": "c0ffd058-e773-47f1-974b-42d41cb555bf",
                "rating": 3,
                "name": "Rendón - Elizondo",
                "contact": {
                    "site": "https://cristina.mx",
                    "email": "Hugo.Casanova49@gmail.com",
                    "phone": "5866-337-812"
                },
                "address": {
                    "street": "5518 Monserrat Explanada",
                    "city": "Chignahuapan María",
                    "state": "Sinaloa",
                    "location": {
                        "lat": 19.43607059103484,
                        "lng": -99.12978657319944
                    }
                }
            }

    ]
  };


  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-content">
          <Content
            restaurants = {this.state.restaurants}
           />
        </div>
      </div>
    );
  }
}

export default App;
