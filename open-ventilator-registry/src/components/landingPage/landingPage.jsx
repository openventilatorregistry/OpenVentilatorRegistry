import React, {Component} from 'react';
import SplashCard from "../buttonCard/buttonCard.jsx";



class LandingPage extends Component {
    render() {
        const style = {
            display:'flex',
            flexDirection:'row',
            width:'100vw',
            height:'80vh',
            justifyContent:'space-evenly',
            alignItems:'center'
        };
        return (
            <div >
                <div className="container" style={style}>
                {this.props.cards.map((card,i)=> <SplashCard key={i} card={card}/>)}
                </div>
            </div>
        );
    }
}

export default LandingPage;