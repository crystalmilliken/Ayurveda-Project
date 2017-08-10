import React, { Component } from 'react';

 class PittaFoods extends Component{
    render(){
const foodsForPitta = ["Dairy", "Sweeteners in moderation", "Oils: Coconut, Sunflower, and Olive", "Wheat", "Oats", "Rice", "Barley",
        "Sweet Fruits", "Vegetables to favor: sweet potatoes, asparagus, cucumbers, potatoes,  green vegetables, pumpkins, broccoli, cauliflower, celery, okra, lettuce, green beans, and zucchini.",
        "Seasonings: Cooling and Soothing"];
let tempkey = 0;
        return(
            <ul>
                {foodsForPitta.map((a)=>{
                    tempkey= tempkey + 2;
                    return <li key={tempkey}>{a}</li>
                })}
            </ul>
        );
    }
} 

class VataFoods extends Component{
    render(){
const foodsForPitta = ["Ginger Tea", "Sweeteners in moderation", "Oils: Most are good ", "Dairy: low fat", "Grains: Rice and wehat", 
        "Sweet Fruits", "Vegetables to favor: Cooked with oil are best",
         "Spices: Cardamom, cumin, ginger, cinnamon, salt, cloves, mustard seed, cilantro, fennel, oregano, sage, tarragon, thyme, black pepper",
         "Beans: Avoid"];
let tempkey = 0;
        return(
            <ul>
                {foodsForPitta.map((a)=>{
                    tempkey= tempkey + 2;
                    return <li key={tempkey}>{a}</li>
                })}
            </ul>
        );
    }
} 
class KaphaFoods extends Component{
    render(){
const foodsForPitta = ["Ginger Tea", "Honey", "All beans except soy", "Fruits: apples, pears, pomegranates, cranberries, and apricots",
 "Meat: Limit", "Grains: Barley, corn, buckwheat, rye, millet", "Vegetables: All", "Seasonings: All"];
let tempkey = 0;
        return(
            <ul>
                {foodsForPitta.map((a)=>{
                    tempkey= tempkey + 2;
                    return <li key={tempkey}>{a}</li>
                })}
            </ul>
        );
    }
} 

export {PittaFoods, VataFoods, KaphaFoods}