import React, { Component } from "react";
import { connect } from 'react-redux';
import { actionCreators } from '../../../store/MainRedux'
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import ButtonCellRenderer from "./ButtonCellRenderer/ButtonCellRenderer";
import { withStyles } from '@material-ui/core/styles';

import { Typography, Toolbar, AppBar, AgGrid, Button } from "../../Controls";
import { AgGridColumn } from 'ag-grid-react';

import styles from './Offers.module.scss'

const propTypes = {
    //from Redux
    offers: PropTypes.array
}

class Offers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [{
                provider: "Provider 1",
                quantity: "10",
                specification: "SERVIO-i",
                distribution: "NY, PA, CT, NJ"
            }]
        }

    }

    componentWillMount() {
        //this.props.requestOffers();
    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div>
                <AppBar style={{ position: "relative" }}>
                    <Toolbar style={{ justifyContent: "space-between" }}>
                        <Typography variant="h5" style={{ color: "white", flex: "1" }}>
                            Current Offers
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className={styles.grid}>
                <AgGrid
                    animateRows={true}
                    defaultColDef={{
                        sortable: true
                    }}
                    rowData={this.state.data}
                    onFirstDataRendered={this.onFirstDataRendered}
                    onGridSizeChanged={this.onGridSizeChanged}
                    onRowClicked={this.onRowClicked}
                    frameworkComponents={{
                        buttonCellRenderer: ButtonCellRenderer,
                    }}

                >
                    <AgGridColumn
                        headerName="Provider"
                        field="provider"
                    />
                    
                    <AgGridColumn
                        headerName="Quantity"
                        field="quantity"
                    />
                    
                    <AgGridColumn
                        headerName="Specification"
                        field="specification"
                    />
                    
                    <AgGridColumn
                        headerName="Distribution"
                        field="distribution"
                    />
                    <AgGridColumn
                    cellRenderer={"buttonCellRenderer"}
                        ></AgGridColumn>
                </AgGrid>
            </div>

            </div>
        )
    }
}

Offers.propTypes = propTypes;
export default connect(
  state => state.offers,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Offers);