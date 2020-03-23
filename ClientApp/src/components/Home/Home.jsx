import React, { Component } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { actionCreators } from '../../store/MainRedux'
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';

import { Typography, Toolbar, AppBar, Card, Button } from "../Controls";

import classNames from 'classnames';
import styles from './Home.module.scss'

const propTypes = {
  //from Redux
  requests: PropTypes.array,
  teams: PropTypes.array
}

class RallyWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }

  }

  componentWillMount() {

  }

  componentDidUpdate() {

  }

  onRegisterButtonClick = function () {
    window.location = "/Register"; //would like to actually use ReactRouter, lol
  }

  onViewOffersButtonClick = function () {
    window.location = "/Offers";  //would like to actually use ReactRouter, lol
  }

  render() {
    return (
      <div>
        <AppBar style={{ position: "relative" }}>
          <Toolbar style={{ justifyContent: "space-between" }}>
            <Typography variant="h5" style={{ color: "white", flex: "1" }}>
              Open Ventilator Registry
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={styles.verticalContainer}>
          <div className={styles.cardContainer}>
            <Card className={styles.card}>
              <div className={styles.cardTitle}>
                <Typography variant="h4" align="center">
                  WE <br /> <b>REQUIRE</b> <br /> VENTILATORS
                </Typography>
              </div>
              <div className={styles.buttonContainer}>
              <Button variant="contained" color="secondary" className={styles.button} onClick={this.onRegisterButtonClick}>
                Register Need
              </Button>
              <Button variant="outlined" color="secondary" className={styles.button} onClick={this.onViewOffersButtonClick}>
                View Offers
              </Button>
              </div>
            </Card>
            <Card className={styles.card}>
            <div className={styles.cardTitle}>
              <Typography variant="h4" align="center">
                WE CAN<br /> <b>PROVIDE</b> <br /> VENTILATORS
              </Typography>
              </div>
              <div className={styles.buttonContainer}>
              <Button variant="contained" color="secondary" className={styles.button}>
                Provide Supply
              </Button>
              </div>
            </Card>
          </div>
        </div>
        <div>
          <div className={styles.footerText}>
            OpenVentilatorRegistry.org is an Open Source project organized by volunteers worldwide. Join the effort on <a href="https://github.com/openventilatorregistry/OpenVentilatorRegistry">Github</a> to contribute.
          </div>
        </div>
      </div>
    )
  }
}

RallyWrapper.propTypes = propTypes;
export default connect(
  state => state.rally,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(RallyWrapper);