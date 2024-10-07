import React, { useState } from "react";
import './App.css';

function Pizza({ name, imgSrc, ingredients }) {
    const [size, setSize] = useState("Duża 42 cm - 37.70zł");

    return (
        <div className="pizza-section">
            <div className="top">
                <h2>{name}</h2>
            </div>
            <div className="left">
                <img src={imgSrc} alt={name} className="pizza-image" />
            </div>
            <div className="right">
                <select value={size} onChange={(e) => setSize(e.target.value)} className="pizza-size">
                    <option value="Duża 42 cm - 37.70zł">Duża 42 cm - 37.70zł</option>
                    <option value="Średnia 32 cm - 29.50zł">Średnia 32 cm - 29.50zł</option>
                    <option value="Mała 22 cm - 19.90zł">Mała 22 cm - 19.90zł</option>
                </select>
                <p>{ingredients}</p>
                <p className="gratis-sosy">+ 2 Sosy Gratis❕</p>
            </div>
            <div className="bottom">
                <button className="edytuj-btn">Modyfikuj</button>
                <button className="dodaj-btn">Dodaj 🛒</button>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Pizza
                name="1. Margherita"
                imgSrc="https://cdn.dagrasso.pl/static/product-background-images/3/c4267594-a263-11e1-bb60-005056a7f31b/6/1_margherita.webp"
                ingredients="ciasto, sos pomidorowy, ser, oregano"
            />
            <Pizza
                name="2. Parma"
                imgSrc="https://cdn.dagrasso.pl/static/product-background-images/3/a23d8483-1eb0-11e8-9e61-005056a7c737/9/3_parma.webp"
                ingredients="ciasto, sos pomidorowy, ser mozzarella, szynka dojrzewająca, bazylia świeża, oregano"
            />
            <Pizza
                name="3. Capricciosa"
                imgSrc="https://cdn.dagrasso.pl/static/product-background-images/3/7a1c8c72-a4a5-11e1-bb60-005056a7f31b/5/2_capriciosa.webp"
                ingredients="ciasto, sos pomidorowy, ser, szynka, pieczarki, oregano"
            />
            <Pizza
                name="4. Decoro"
                imgSrc="https://cdn.dagrasso.pl/static/product-background-images/3/7d14f45e-a4a8-11e1-bb60-005056a7f31b/10/5_decoro.webp"
                ingredients="ciasto, sos pomidorowy, ser, szynka, pieczarki, papryka konserwowa, czosnek, oregano"
            />
            <Pizza
                name="5. Napoletana"
                imgSrc="https://cdn.dagrasso.pl/static/product-background-images/3/adaeee07-a4a8-11e1-bb60-005056a7f31b/9/6_napoletana.webp"
                ingredients="ciasto, sos pomidorowy, ser, salami, oliwki zielone, papryczki jalapenos, oregano"
            />
            <Pizza
                name="6. Polska"
                imgSrc="https://cdn.dagrasso.pl/static/product-background-images/3/b0bf9c73-ed09-11e1-bb60-005056a7f31b/4/9_polska.webp"
                ingredients="ciasto, sos pomidorowy, ser, szynka, kiełbasa, kabanosy, cebula biała, papryka świeża, oregano"
            />
        </div>
    );
}

export default App;
