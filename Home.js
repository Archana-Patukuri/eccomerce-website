import React from "react";
import "./Home.css";
import Product from "./Product"
import { useStateValue } from './StateProvider';

function Home(){
    const [{basket}]=useStateValue();
    return(
        <div className="home">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
                {/**Product */}
                <div className="home__row">
                    <Product
                        id="123211341"
                        title="Stolen Things a novel By R.H HERRON"
                        price={500.90}
                        rating={3}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ357sjtSEFZOO02Fw4_KaqG5H89f39yfIq5PL3IWoXnAGbHsQI3OHIrV6Dvguvky-F3EM&usqp=CAU"
                    />
                    <Product
                        id="123211342"
                        title="Nora Barrett: The king of Drug"
                        price={700.30}
                        rating={4.6}
                        image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"
                    />
                    <Product
                        id="123211343"
                        title="Some thing in the water By CATHERENE STEADMAN"
                        price={900.30}
                        rating={2}
                        image="https://i.pinimg.com/474x/cb/60/3e/cb603e2f19144a732859fd66541f7ae3.jpg"
                    />
                </div>
                <div className="home__row">
                <Product
                        id="123211344"
                        title="NICK JONES M3 band Intelligence Fitness smart Band with Heart Rate Sensor etc."
                        price={7500.00}
                        rating={3}
                        image="https://5.imimg.com/data5/NI/EQ/BZ/SELLER-50738038/m4-smart-band-best-quality-500x500.png"
                    />
                    <Product
                        id="123211345"
                        title="The Latest Alexa with updated software"
                        price={6000.20}
                        rating={2}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
                    />
                    <Product
                        id="123211346"
                        title="The latest smart watch with incorporated features"
                        price={12500.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="123211347"
                        title="Nokia 3.4 device, Quick start guide, Charger, Type-C USB cable, SIM tray tool, Head Set, Jelly Case"
                        price={15300.30}
                        rating={4}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJpUqjptq75uR8y7RMXFXqkm0lIqbH1D_NNQ&usqp=CAU"
                    />
                    <Product
                        id="123211348"
                        title="Realme latest smart phone with CAMERA:48 MP,2 MP,16 MP,Dual SIM,Android 11"
                        price={20500.50}
                        rating={3.5}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3wwYgByiuhnzXYH5xusvdAegIkKvSRzTyoA&usqp=CAU"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="123211349"
                        title="Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X7002G (Black) (2019 Model)"
                        price={95000.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61qVVtdXJ1L._AC_SX679_.jpg"
                    />
                    <Product
                        id="1232113410"
                        title="Mi 125.7 cm (50 Inches) 4K Ultra HD Android Smart LED TV 4X|L50M5-5AIN (Black)"
                        price={120000.0}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/710rArA2OPL._SL1500_.jpg"
                    />
                </div>

                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Fashion/WA19/SareeStore/top-banner.jpg" className="home_womenSareeImg"/>
                <div className="home__row">
                <Product
                        id="1232113421"
                        title="BHAKARWADi Women's Khadi silk Saree with Blouse Piece"
                        price={219.40}
                        rating={4}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtD8nIPv2Kn4GQio9MULOS1M-M8FwaqttWlQ&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgH_CppN9HHSz-qc77bfWJsx5PrispD7Fdw&usqp=CAU"
                    />
                    <Product
                        id="1232113422"
                        title="Ishin Combo of 5 Faux Georgette Multicolor Printed Women sarees"
                        price={1200.30}
                        rating={2}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVhcPq5u8tM_rmD8lkSD_LakgMIXjR5VpMg&usqp=CAU"
                    />
                    <Product
                        id="1232113423"
                        title="Buy Prithvi Handcraft Wark Banarasi Women's Silk Saree"
                        price={700.10}
                        rating={3}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ppo7DxhAO5iVG2nuuCF4gC-_aEBoqhT2Nw&usqp=CAU"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="1232113411"
                        title="Women Tshirts lined, baby pink and black tshirt "
                        price={300.07}
                        rating={3}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVDV0vkwEwRrv-TwsNcxLzWQ5CKbQ1hbsjw&usqp=CAU"
                    />
                    <Product
                        id="1232113412"
                        title="A line reddish brown trendy women dress for party"
                        price={700.0}
                        rating={4}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVD2fPAXevKyo3i3kWaH6JgXJvW2odGnMkQ&usqp=CAU"
                    />
                    <Product
                        id="1232113413"
                        title="Black Silver Stonework Net Designer Gown"
                        price={1100.03}
                        rating={4}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-xtmn0EUBfrLbt1iQXN5QL4lhPCZTTIJTaQ&usqp=CAU"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="1232113414"
                        title="U.S. Polo Assn. Orange Crew Neck T-Shirt"
                        price={500.10}
                        rating={2}
                        image="https://i.pinimg.com/736x/2f/b2/44/2fb2443e610392f288e61c983d4d01c4.jpg"
                    />
                    <Product
                        id="1232113415"
                        title="Coral Knit:Salmon Men's casual knit shirt"
                        price={900.40}
                        rating={5}
                        image="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg"
                    />
                    <Product
                        id="1232113416"
                        title="Cotton Slim Fit Long Kurta"
                        price={1200.50}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/51++cxHDe6L._AC._SR360,460.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="1232113417"
                        title="babies flowered cotton daily ware"
                        price={400.00}
                        rating={3}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxIfJmh9iXXMx5Pi1bw8Lk5xCQK8nQH0TAyQ&usqp=CAU"
                    />
                    <Product
                        id="1232113418"
                        title="blue stone work party ware dress for girls"
                        price={1400.40}
                        rating={5}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgH_CppN9HHSz-qc77bfWJsx5PrispD7Fdw&usqp=CAU"
                    />
                    <Product
                        id="1232113419"
                        title="Cotton Slim Fit Long Kurta for kids"
                        price={1500.30}
                        rating={4}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA2SZMN5DKXwcm8T44zIjFZWgl57oQzMv-IQ&usqp=CAU"
                    />
                    <Product
                        id="1232113420"
                        title="boys tshirt for daily ware"
                        price={800.10}
                        rating={5}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCqcrB95AQIPr5btM3YnL0SO8IO7c9kt00g&usqp=CAU"
                    />
                </div>
        </div>
    );
}
export default Home;