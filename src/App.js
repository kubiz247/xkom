import React, { useState } from "react";
import './App.css'

function App() {
    const [size, setSize] = useState("Duża 42 cm - 37.70zł")

  return (
    <div className="App">
      <div className="top">
        <h2>1. Margherita</h2>
      </div>
      <div className="left">
        <img src="https://cdn.dagrasso.pl/static/product-images/3/c4267594-a263-11e1-bb60-005056a7f31b/17/1_margherita.webp"
             alt="Margherita"
             className="pizza-image" />
      </div>
      <div className="right">
          <select value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="pizza-size">
              <option value="Duża 42 cm - 37.70zł">Duża 42 cm - 37.70zł</option>
              <option value="Średnia 32 cm - 29.50zł">Średnia 32 cm - 29.50zł</option>
              <option value="Mała 22 cm - 19.90zł">Mała 22 cm - 19.90zł</option>
          </select>
          <p>ciasto, sos pomidorowy, ser, oregano</p>
          <p className="gratis-sosy">+ 2 Sosy Gratis❕</p>
      </div>
        <div className="bottom">
            <button className="edytuj-btn">Modyfikuj</button>
            <button className="dodaj-btn">Dodaj🛒</button>
        </div>
    </div>
  );
}

export default App;
