import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

/**********************************Works Cited************************************
 * Title: React Website Tutorial - Beginner React JS Project Fully Responsive
 * Author: Brian Design 
 * Date: 8/11/20 (Accessed 1/1/22)
 * Code Version: React
 * Availability: https://youtu.be/I2UBjN5ER4s
 *********************************************************************************/

function Card() {
    return (
        <div className='cards'>
            <h1 id="h1">Recipes</h1>
            <div id="main-re">

                <div id="bigDiv1">
                    <a className="hov" href="/breakfast">
                        <div id="submain">
                            <div id="bottom">Breakfast</div>
                        </div>
                    </a>
                    
                    <div id="pdiv">
                    <p>Start your day with a healthy breakfast</p>
                    </div>
                </div>

                <div id="bigDiv2">
                    <a className="hover" href="/lunch">
                        <div id="submain">
                            <div id="bottom">Lunch</div>
                        </div>
                    </a>
                    
                    <div id="pdiv">
                    <p>Power through with a delicious lunch</p>
                    </div>
                </div>

                <div id="bigDiv3">
                    <a className="hover" href="/dinner">
                    <div id="submain">
                        <div id="bottom">Dinner</div>
                    </div>
                    </a>
                    <div id="pdiv">
                    <p>Beat the clock with a speedy dinner</p>
                    </div>
                </div>

                <div id="bigDiv4">
                    <a className="hover" href="/desserts">
                        <div id="submain">
                            <div id="bottom">Desserts</div>
                        </div>
                    </a>
                    <div id="pdiv">
                    <p>Indulge your sweet tooth with yummy treats desserts</p>
                    </div>
                </div>

                <div id="bigDiv5">
                    <a className="hover" href="/snacks">
                        <div id="submain">
                            <div id="bottom">Snacks</div>
                        </div>
                    </a>
                    
                    <div id="pdiv">
                    <p id="pdiv">Refresh with a pick-me-up snacks</p>
                    </div>
                </div>

                <div id="bigDiv6">
                    <a className="hover" href="/beverage">
                        <div id="submain">
                            <div id="bottom">Beverage</div>
                        </div>
                    </a>
                    <div id="pdiv">
                    <p>Refresh your self with some beverage</p>
                    </div>
                </div>

            </div>


            {/* <div className="cards__container">
                <div className="cards__wrapper">
                    <div className="cards__item">
                        <div></div>  
                         <CardItem 
                        src='images/breakfast-2.jpg'
                        text="Start your day with a healthy breakfast"
                        label= "Breakfast"
                        path="/breakfast"
                        />
                         <CardItem 
                        src='images/lunch.jpg'
                        text="Power through with a delicious lunch"
                        label= "Lunch"
                        path="/lunch"
                        />
                         <CardItem 
                        src='images/dinner.jpg'
                        text="Beat the clock with a speedy dinner"
                        // label= "Dinner"
                        path="/dinner"
                        />
                    </div>
                    <div className="cards__item">
                        <CardItem 
                        src='/Frontend/app-app/public/images/breakfast-2.jpg
                        '
                        text="Indulge your sweet tooth with yummy treats desserts"
                        // label= "Desserts"
                        path="/desserts"
                        />
                        
                         <CardItem 
                        src='images/snack.jpg'
                        text="Refresh with a pick-me-up snacks"
                        // label= "Snacks"
                        path="/snacks"
                        />
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Card
