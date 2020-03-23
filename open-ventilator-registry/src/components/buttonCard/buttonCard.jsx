import React, {Component} from 'react';
import {Button, Card, CardBody} from "reactstrap";
import './buttonCard.css';



class SplashCard extends Component {
    render() {
        return (
            <Card className={"centerCard"}>
                <CardBody>
                    {this.props.card.top}
                    <br/>
                    <strong>{this.props.card.strong}</strong>
                    <br/>
                    {this.props.card.bottom}
                </CardBody>
                {this.props.card.buttons.map((button,i)=>(
                        button.type === 'outline'?
                        <Button key={i} outline color={"primary"}> {button.text} </Button>:
                        <Button key={i}  color={"primary"}> {button.text }</Button>
                ))}
            </Card>
        );
    }
}

export default SplashCard;