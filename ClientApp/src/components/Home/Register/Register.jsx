import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import { Typography, Toolbar, AppBar, Card, Button, TextField, Checkbox, FormControlLabel, Select, MenuItem } from "../../Controls";

import styles from './Register.module.scss'

const propTypes = {
    //from Redux
    requests: PropTypes.array,
    teams: PropTypes.array
}

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }

    componentWillMount() {

    }

    componentDidUpdate() {

    }

    onRegisterButtonClick = function() {
        alert("Register");
    }

    renderCountryMenuItems = function() {
        const countries = [
            "United States",
            "Afghanistan",
            "Albania",
            "Algeria",
            "America",
            "Andorra",
            "Angola",
            "Antigua",
            "Argentina",
            "Armenia",
            "Australia",
            "Austria",
            "Azerbaijan",
            "Bahamas",
            "Bahrain",
            "Bangladesh",
            "Barbados",
            "Belarus",
            "Belgium",
            "Belize",
            "Benin",
            "Bhutan",
            "Bissau",
            "Bolivia",
            "Bosnia",
            "Botswana",
            "Brazil",
            "British",
            "Brunei",
            "Bulgaria",
            "Burkina",
            "Burma",
            "Burundi",
            "Cambodia",
            "Cameroon",
            "Canada",
            "Cape Verde",
            "Central African Republic",
            "Chad",
            "Chile",
            "China",
            "Colombia",
            "Comoros",
            "Congo",
            "Costa Rica",
            "Croatia",
            "Cuba",
            "Cyprus",
            "Czech",
            "Denmark",
            "Djibouti",
            "Dominica",
            "East Timor",
            "Ecuador",
            "Egypt",
            "El Salvador",
            "Emirate",
            "England",
            "Eritrea",
            "Estonia",
            "Ethiopia",
            "Fiji",
            "Finland",
            "France",
            "Gabon",
            "Gambia",
            "Georgia",
            "Germany",
            "Ghana",
            "Great Britain",
            "Greece",
            "Grenada",
            "Grenadines",
            "Guatemala",
            "Guinea",
            "Guyana",
            "Haiti",
            "Herzegovina",
            "Holland",
            "Honduras",
            "Hungary",
            "Iceland",
            "India",
            "Indonesia",
            "Iran",
            "Iraq",
            "Ireland",
            "Israel",
            "Italy",
            "Ivory Coast",
            "Jamaica",
            "Japan",
            "Jordan",
            "Kazakhstan",
            "Kenya",
            "Kiribati",
            "Korea",
            "Kosovo",
            "Kuwait",
            "Kyrgyzstan",
            "Laos",
            "Latvia",
            "Lebanon",
            "Lesotho",
            "Liberia",
            "Libya",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Macedonia",
            "Madagascar",
            "Malawi",
            "Malaysia",
            "Maldives",
            "Mali",
            "Malta",
            "Marshall",
            "Mauritania",
            "Mauritius",
            "Mexico",
            "Micronesia",
            "Moldova",
            "Monaco",
            "Mongolia",
            "Montenegro",
            "Morocco",
            "Mozambique",
            "Myanmar",
            "Namibia",
            "Nauru",
            "Nepal",
            "Netherlands",
            "New Zealand",
            "Nicaragua",
            "Niger",
            "Nigeria",
            "Norway",
            "Oman",
            "Pakistan",
            "Palau",
            "Panama",
            "Papua",
            "Paraguay",
            "Peru",
            "Philippines",
            "Poland",
            "Portugal",
            "Qatar",
            "Romania",
            "Russia",
            "Rwanda",
            "Samoa",
            "San Marino",
            "Sao Tome",
            "Saudi Arabia",
            "Scotland",
            "Scottish",
            "Senegal",
            "Serbia",
            "Seychelles",
            "Sierra Leone",
            "Singapore",
            "Slovakia",
            "Slovenia",
            "Solomon",
            "Somalia",
            "South Africa",
            "South Sudan",
            "Spain",
            "Sri Lanka",
            "St Kitts",
            "St Lucia",
            "Sudan",
            "Suriname",
            "Swaziland",
            "Sweden",
            "Switzerland",
            "Syria",
            "Taiwan",
            "Tajikistan",
            "Tanzania",
            "Thailand",
            "Tobago",
            "Togo",
            "Tonga",
            "Trinidad",
            "Tunisia",
            "Turkey",
            "Turkmenistan",
            "Tuvalu",
            "Uganda",
            "Ukraine",
            "United Kingdom",
            "Uruguay",
            "Uzbekistan",
            "Vanuatu",
            "Vatican",
            "Venezuela",
            "Vietnam",
            "Wales",
            "Welsh",
            "Yemen",
            "Zambia",
            "Zimbabwe"
        ];
        
        return countries.map((value, index) => { return (<MenuItem key={index} value={value}>{value}</MenuItem>)});
    }

    render() {
        return (
            <div>
                <AppBar style={{ position: "relative" }}>
                    <Toolbar style={{ justifyContent: "space-between" }}>
                        <Typography variant="h5" style={{ color: "white", flex: "1" }}>
                            Facility Registration
            </Typography>
                    </Toolbar>
                </AppBar>
                <div className={styles.verticalContainer}>
                    <Card className={styles.card}>
                        <Typography variant="h5">
                            Register your facility for ventilator supply
              </Typography>
                        <div className={styles.inputsContainer}>
                            <div className={styles.column}>
                                <TextField label="Facility Name" className={styles.input} />
                                <TextField label="City" className={styles.input} />
                                <TextField label="State" className={styles.input} />
                                <Select label="Country" className={styles.input}
                                    value="United States">
                                    {this.renderCountryMenuItems()}
                                </Select>
                            </div>
                            <div className={styles.column}>
                                <TextField label="Contact Name" className={styles.input} />
                                <TextField label="Contact Email" className={styles.input} />
                                <TextField label="Est. # ventilators required" className={styles.input} />
                            </div>

                        </div>
                        <div>
                            <FormControlLabel
                                control={<Checkbox name="demand" />}
                                label="Current demand will outlast official efforts"
                            />
                            <FormControlLabel
                                control={<Checkbox name="authorized" />}
                                label="I am authorized to request supplies for this facility"
                            />
                        </div>
                        <div className={styles.buttonArea}>
                            <div>
                                <Button variant="contained" color="secondary" className={styles.button} onClick={this.onRegisterButtonClick}>
                                Register Need
                            </Button>
                            </div>
                            <div className={styles.instructions}>
                                After registration, a volunteer will get in touch with you to verify your identity. Check <a href="/Offers">current offers</a> while waiting to be notified.
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

Register.propTypes = propTypes;
//Register.defaultProps = defaultProps;

export default Register;