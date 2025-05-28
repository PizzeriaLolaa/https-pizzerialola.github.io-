import React from 'react';

export const Drinks = () => {
  const menu = [
    {
      category: "Topli napici (Hot Drinks)",
      items: [
        { name: "Domaća kafa (Domestic Coffee)", price: "100", description: " " },
        { name: "Espresso", price: "120", description: " " },
        { name: "Espresso s mlekom (Espresso with Milk)", price: "140", description: " " },
        { name: "Espresso za poneti (Takeaway espresso)", price: "150", description: " " },
        { name: "Nes kafa (Nescafe)", price: "150", description: " " },
        { name: "Nes kafa 2 u 1 (Nescafe 2 in 1)", price: "120", description: " " },
        { name: "Nes kafa 3 u 1 (Nescafe 3 in 1)", price: "120", description: " " },
        { name: "Cappuccino", price: "140", description: " " },
        { name: "Kakao (Cocoa)", price: "150", description: " " },
        { name: "Topla čokolada (Hot Chocolate)", price: "170", description: " " },
        { name: "Čaj (Tea)", price: "120", description: " " },
      ],
    },
    {
      category: "Bezalkoholna pića (Soft Drinks)",
      items: [
        { name: "'Next' sokovi (Next Juices)" , price: "160", description: "0.2l" },
        { name: "Icetea", price: "160", description: "0.2l" },
        { name: "Coca Cola", price: "160", description: "0.25l/0.33l" },
        { name: "Fanta", price: "160", description: "0.25l/0.33l" },
        { name: "Sprite", price: "160", description: "0.25l" },
        { name: "Schweppes Bitter lemon", price: "180", description: "0.25l" },
        { name: "Schewppes tonic", price: "180", description: "0.25l" },
        { name: "Orangina", price: "220", description: "0.25l" },
        { name: "Ultra", price: "150", description: "0.25l" },
        { name: "Cedevita", price: "140", description: " " },
        { name: "Rosa gazirana", price: "120", description: "0,33l" },
        { name: "Rosa", price: "120", description: "0.33l" },
        { name: "Kisela voda", price: "30", description: "0,2l" },
      ],
    },
    {
      category: "Piva (Beers)",
      items: [
        { name: "Točeni Tuborg (Draught Tuborg)", price: "160", description: "0.33l" },
        { name: "Točeni Tuborg (Draught Tuborg)", price: "220", description: "0.5l" },
        { name: "Tuborg", price: "190", description: "0.33l" },
        { name: "Tuborg", price: "150", description: "0.5l" },
        { name: "Nikšićko", price: "190", description: "0.33l" },
        { name: "Nikšićko", price: "150", description: "0.5l" },
        { name: "Zaječarsko", price: "150", description: "0.5l" },
        { name: "Heineken", price: "220", description: "0.25l" },
        { name: "Heineken", price: "190", description: "0.4l" },
      ],
    },
    {
      category: "Žestoka alkoholna pića (Spirits)",
      items: [
        { name: "Domaća šljiva (Domestic Plum Brandy)", price: "100", description: "0.03l" },
        { name: "Dunjevača (Quince Brandy)", price: "150", description: "0.03l" },
        { name: "Kajsijevača (Apricot Brandy)", price: "150", description: "0.03l" },
        { name: "Medovača (Honey Brandy)", price: "150", description: "0.03l" },
        { name: "Pelinkovac (Wormwood Liqueur)", price: "130", description: "0.03l" },
        { name: "Viljamovka (Pear Brandy)", price: "170", description: "0.03l" },
        { name: "Vodka", price: "120", description: "0.05l" },
        { name: "Jägermeister", price: "180", description: "0.03l" },
        { name: "Vinjak", price: "120", description: "0.03l" },
        { name: "Baylies", price: "220", description: "0.03l" },
        { name: "Gin", price: "120", description: "0.03l" },
        { name: "Gin tonic", price: "180", description: "0.2l" },
        { name: "Johnnie Walker", price: "200", description: "0.03l" },
        { name: "Jack Daniels", price: "250", description: "0.03l" },
      ],
    },
    {
      category: "Vina (Wines)",
      items: [
        { name: "Plantaže Chardonnay (Plantaže Chardonnay)", price: "250", description: "0.187l" },
        { name: "Plantaže Vranac (Plantaže Vranac)", price: "250", description: "0.187l" },
        { name: "Tikveš Rose (Tikveš Rose)", price: "800", description: "1l" },
        { name: "Tikveš Smederevka (Tikveš Smederevka)", price: "800", description: "1l" },
        { name: "Kovačević Orfelin (Kovačević OrpheLine)", price: "800", description: "0.2l" },
        { name: "Špricer", price: "120", description: "0.2l" },
        { name: "Nameštaj", price: "200", description: "0.5l" },
      ],
    },      
  ];

  return (
    <div className="menu" id="drinks">
      <h1 className="menu-heading">KARTA PIĆA</h1>
      <h2 className="menu-heading2">DRINKS MENU</h2>
      {menu.map((section) => (
        <div className="menu-section" key={section.category}>
          <h2>{section.category}</h2>
          <ul className="menu-items">
            {section.items.map((item, index) => (
              <li className="menu-item" key={index}>
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

