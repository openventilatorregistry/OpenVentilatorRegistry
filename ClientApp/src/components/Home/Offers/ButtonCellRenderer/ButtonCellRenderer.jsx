import React, {Component} from "react";
import { materialIcons } from "../../../../utilities"
import { Button } from "../../../Controls";
import styles from './ButtonCellRenderer.module.scss';
class IssueColumnRenderer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    onRequestButtonClick = function() {
        alert("Request");
    }

    render() {
        return (
            <div className={styles.container}>
                <Button variant="contained" color="secondary" className={styles.button} onClick={this.onRequestButtonClick}>
                Request
              </Button>
            </div>
        );
           
    }
};
export default IssueColumnRenderer;