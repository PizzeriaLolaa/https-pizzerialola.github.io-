import React from 'react';
import "./Food.css";

const menu = [
  {
    category: "Pizza",
    items: [
      { name: "Margherita", price: "270 / 370 / 770", description: "kačkavalj, origano, bosiljak" },
      { name: "Vesuvio", price: "280 / 400 / 850", description: "kačkavalj, origano, šunka" },
      { name: "Funghi", price: "280 / 380 / 800", description: "kačkavalj, origano, šampinjoni" },
      { name: "Capricciosa", price: "300 / 500 / 950", description: "kačkavalj, origano, šampinjoni, šunka" },
      { name: "Pepperoni", price: "390 / 550 / 1000", description: "kačkavalj, origano, šampinjoni, kulen, ljute paprike" },
      { name: "Tonno", price:  "280 / 500 / 900", description: "kačkavalj, origano, tunjevina, luk, masline" },
      { name: "Quattro Stagioni", price: "410 / 550 / 1050", description: "kačkavalj, origano, šampinjoni, šunka, kulen, suvi vrat, pavlaka" },
      { name: "Firenze", price: "370 / 600 / 1200", description: "kačkavalj, origano, šampinjoni, slanina" },
      { name: "Lola Special", price: "420 / 600 / 1150", description: "kačkavalj, origano, šampinjoni, suvi vrat, pečenica, kulen, slanina, kajmak, masline" },
      { name: "Bresaola", price: "470 / 650 / 1250", description: "kačkavalj, origano, šampinjoni, goveđa pršuta, pavlaka, masline" },
      { name: "Diavolo", price: "340 / 500 / 1000", description: "kačkavalj, origano, kulen, slanina" },
      { name: "Diavolo Plus", price: "360 / 550 / 1200", description: "kačkavalj, origano, kulen, slanina, jaje" },
      { name: "Posna (Fasting)", price: "290 / 550 / 900", description: "posni kačkavalj, origano, šampinjoni, tunjevina" },
      { name: "Piroška", price: "500", description: "kačkavalj, origano, šampinjoni, šunka" },
    ]
  },
  {
    category: "Doručak (Breakfast)",
    items: [
      { name: "Omlet (Omelette)", price: 350, description: "tri jaja, šunka, kačkavalj, pavlaka" },
      { name: "Doručak 'Lola' (Lola's Breakfast)", price: 400, description: "tri jaja, kobasica, ajvar, pančeta, pavlaka" },
    ]
  },
  {
    category: "Roštilj (Grill)",
    items: [
        { name: "Pljeskavica (Traditional Burger)", price: "390", description: "200 gr" },
        { name: "Pljeskavica na kajmaku (Burger patty on cream cheese)", price: "450", description: "200 gr" },
        { name: "Pljeskavica 'Lola' (Lola's Burger)", price: "450", description: "200 gr + (20 gr kačkavalja i 20 gr sira)" },
        { name: "Punjena pljeskavica (Stuffed Burger)", price: "450", description: "200 gr (šunka, kačkavalj)" },
        { name: "Austrijska kobasica (Austrian Sausage)", price: "750", description: "300 gr" },
        { name: "Dimljeni pileći batak (Smoked Chicken Leg)", price: "550", description: "300 gr" },
        { name: "Dimljeni pileći batak sa šampinjonima i kajmakom (Smoked Chicken Leg with Mushrooms and Cream Cheese)", price: "650", description: "330 gr" },
        { name: "Dimljena vešalica (Smoked Pork Tenderloin)", price: "650", description: "300 gr" },
        { name: "Dimljena vešalica sa šampinjonima i kajmakom (Smoked Pork Tenderloin with Mushrooms and Cream Cheese)", price: "750", description: "330 gr" },
        { name: "Pileće belo (Chicken White)", price: 650, description: "300 gr" },
        { name: "Ćevapi (Grilled Minced Meat)", price: "70", description: "35 gr" },
        { name: "Lepinja (Flatbread)", price: "60", description: " " }
    ]
  },
  {
    category: "Somun (Flatbread)",
    items: [
      { name: "Šunka i kajmak (Smoked ham and cream) ", price: 280, description: " " },
      { name: "Pečenica i kajmak (Roast pork and cream) ", price: 300, description: " " },
      { name: "Goveđa pršuta i kajmak (Beef prosciutto and cream) ", price: 350, description: " " },
      { name: "Suvi vrat i kajmak (Dried neck meat and cream) ", price: 300, description: " " }
    ]
  },
  {
    category: "Pizza sendvič (Pizza sandwich)",
    items: [
      { name: "Šunka (Ham)", price: 300, description: "kačkavalj, pavlaka, šunka" },
      { name: "Suvi vrat (Dried neck meat)", price: 350, description: "kačkavalj, pavlaka, suvi vrat" },
      { name: "Kulen (Kulen)", price: 300, description: "kačkavalj, pavlaka, kulen" },
      { name: "Pečenica (Roast pork)", price: 320, description: "kačkavalj, pavlaka, pečenica" },
      { name: "Goveđa pršuta (Beef prosciutto)", price: 370, description: "kačkavalj, pavlaka, goveđa pršuta" }
    ]
  },
  {
    category: "Tost sendvič (Toast sandwich)",
    items: [
      { name: "Šunka i kačkavalj (Ham and cheese)", price: 200, description: " " },
      { name: "Štapići (Sticks)", price: 120, description: " " },
      { name: "Punjeni štapići (Stuffed sticks)", price: 170, description: " " }
    ]
  },
  {
    category: "Slane palačinke (Savory crepes)",
    items: [
      { name: "Šunka, kačkavalj, pavlaka, pečurke (Ham, cheese, sour cream, mushrooms)", price: 280, description: " " },
      { name: "Kulen, kačkavalj, pavlaka, pečurke (Kulen, cheese, sour cream, mushrooms)", price: 320, description: " " },
      { name: "Suvi vrat, kačkavalj, pavlaka, pečurke (Dried neck meat, cheese, sour cream, mushrooms)", price: 300, description: " " },
      { name: "Pečenica, kačkavalj, pavlaka, pečurke (Roast pork, cheese, sour cream, mushrooms)", price: 300, description: " " }
    ]
  },
  {
    category: "Slatke palačinke (Sweet crepes)",
    items: [
      { name: "Eurokrem (Eurocream)", price: 180, description: " " },
      { name: "Eurokrem i plazma (Eurocream and Plazma biscuits)", price: 220, description: " " },
      { name: "Nutella (Nutella)", price: 190, description: " " },
      { name: "Nutella plazma (Nutella and Plazma biscuits)", price: 250, description: " " },
      { name: "Džem od šipka (Rosehip jam)", price: 190, description: " " },
      { name: "Džem od kajsije (Apricot jam)", price: 190, description: " " },
      { name: "Krem, plazma i banana (Cream, Plazma biscuits and banana)", price: 290, description: " " },
      { name: "Krem, plazma i malina (Cream, Plazma biscuits and raspberry)", price: 290, description: " " }
    ]
  }
];

export const Food = () => {
  return (
    <div className="menu" id='food'>
      <h1 className="menu-heading">JELOVNIK</h1>
      <h2 className="menu-heading2">MENU</h2>
      {menu.map((section) => (
        <div key={section.category} className="menu-section">
          <h2>{section.category}</h2>
          <ul className="menu-items">
            {section.items.map((item, index) => (
              <li key={index} className="menu-item">
                <div className="item-details">
                  <div className="item-name">{item.name}</div>
                  <div className="item-info">
                    {item.description && <span className="item-description">{item.description}</span>}
                    <span className="item-price">{item.price} RSD</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
