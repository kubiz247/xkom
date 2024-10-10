import React from "react";
import './App.css';

function Sklep({ name, imgSrc, ocena, lacznosc, budowa, mikrofon, redukcja, cena, dostawa }) {
    return (
        <div className="sklep-section">
            <img src={imgSrc} alt={name} className="sklep-image" />
            <div className="sklep-info">
                {name}
                <ul>
                    <li>{ocena}</li>
                    <li>{lacznosc}</li>
                    <li>{budowa}</li>
                    <li>{mikrofon}</li>
                    <li>{redukcja}</li>
                </ul>
                <p className="cena">{cena}</p>
                <p className="dostawa">{dostawa}</p>
                <button className="dodaj-btn">🛒</button>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="ogolny">
            <div className="App">
                <Sklep
                    name="Apple AirPods 3. generacji (Magsafe)"
                    imgSrc="https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/11/pr_2022_11_24_14_31_42_234_00.jpg"
                    ocena="⭐⭐⭐⭐⭐ (130)"
                    lacznosc="Łączność: True Wireless"
                    budowa="Budowa słuchawek: Douszne"
                    mikrofon="Mikrofon: Posiada, przy słuchawce"
                    redukcja="Redukcja hałasu: Pasywna"
                    cena="809,00 zł"
                    dostawa="Darmowa dostawa"
                />
                <Sklep
                    name="Silver Monkey Słuchawki przewodowe 3.5 mm jack białe EP10"
                    imgSrc="https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/9/pr_2022_9_23_10_39_20_989_00.jpg"
                    ocena="⭐⭐⭐⭐⭐ (199)"
                    lacznosc="Łączność: Przewodowe"
                    budowa="Budowa słuchawek: Dokanałowe"
                    mikrofon="Mikrofon: Posiada, na kablu"
                    redukcja="Redukcja hałasu: Nie"
                    cena="24,99 zł"
                    dostawa=""
                />
                <Sklep
                    name="Apple EarPods ze złączem Lightning"
                    imgSrc="https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/7/pr_2024_7_12_14_24_19_798_00.jpg"
                    ocena="⭐⭐⭐⭐⭐ (187)"
                    lacznosc="Łączność: Przewodowe"
                    budowa="Budowa słuchawek: Douszne"
                    mikrofon="Mikrofon: Posiada, na kablu"
                    redukcja="Redukcja hałasu: Nie"
                    cena="99,99 zł"
                    dostawa=""
                />


                <Sklep
                    name="Samsung AKG Type-C czarne"
                    imgSrc="https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/3/pr_2020_3_12_11_16_44_581_05.jpg"
                    ocena="⭐⭐⭐⭐⭐ (106)"
                    lacznosc="Łączność: Przewodowe"
                    budowa="Budowa słuchawek: Dokanałowe"
                    mikrofon="Mikrofon: Posiada"
                    redukcja="Redukcja hałasu: Nie"
                    cena="109,00 zł"
                    dostawa=""
                />
                <Sklep
                    name="Samsung AKG Type-C białe"
                    imgSrc="https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/3/pr_2020_3_12_11_2_13_357_06.jpg"
                    ocena="⭐⭐⭐⭐⭐ (106)"
                    lacznosc="Łączność: Przewodowe"
                    budowa="Budowa słuchawek: Dokanałowe"
                    mikrofon="Mikrofon: Posiada"
                    redukcja="Redukcja hałasu: Nie"
                    cena="109,00 zł"
                    dostawa=""
                />
                <Sklep
                    name="Silver Monkey Słuchawki przewodowe 3.5 mm jack czarne EP10"
                    imgSrc="https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/9/pr_2022_9_23_10_45_52_240_00.jpg"
                    ocena="⭐⭐⭐⭐⭐ (199)"
                    lacznosc="Łączność: Przewodowe"
                    budowa="Budowa słuchawek: Dokanałowe"
                    mikrofon="Mikrofon: Posiada, na kablu"
                    redukcja="Redukcja hałasu: Nie"
                    cena="24,99 zł"
                    dostawa=""
                />


                <Sklep
                    name="Soundpeats Air 3 (białe)"
                    imgSrc="https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/6/pr_2023_6_19_15_16_32_200_01.jpg"
                    ocena="⭐⭐⭐⭐⭐ (12)"
                    lacznosc="Łączność: Bezprzewodowe"
                    budowa="Budowa słuchawek: Dokanałowe"
                    mikrofon="Mikrofon: Posiada"
                    redukcja="Redukcja hałasu: Aktywna - CVC 8.0"
                    cena="179,00 zł"
                    dostawa="Darmowa dostawa"
                />
                <Sklep
                    name="JBL Tune 125BT Białe"
                    imgSrc="https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/3/pr_2021_3_10_14_19_38_976_00.jpg"
                    ocena="⭐⭐⭐⭐⭐ (101)"
                    lacznosc="Łączność: Bezprzewodowe"
                    budowa="Budowa słuchawek: Dokanałowe"
                    mikrofon="Mikrofon: Posiada, na kablu"
                    redukcja="Pasmo przenoszenia: 20 - 20000 Hz"
                    cena="139,00 zł"
                    dostawa="Darmowa dostawa"
                />
                <Sklep
                    name="FiiO JH3 Czarne"
                    imgSrc="https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/2/pr_2022_2_7_9_50_31_821_00.jpg"
                    ocena="⭐⭐⭐⭐⭐ (14)"
                    lacznosc="Łączność: Przewodowe"
                    budowa="Budowa słuchawek: Dokanałowe"
                    mikrofon="Mikrofon: Brak"
                    redukcja="Redukcja hałasu: Nie"
                    cena="299,99 zł"
                    dostawa=""
                />
            </div>
        </div>
    );
}

export default App;
