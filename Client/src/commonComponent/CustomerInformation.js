import React from "react";
import { Grid } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio'

const CustomerInformation = ({ handleChange, customer }) => {
    return (
        <Grid container>
            <br />
            <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
                <InputLabel htmlFor="age-customer">Age</InputLabel>
                <Select
                    name="age"
                    value={customer.age}
                    onChange={handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'age-customer',
                    }}
                >
                    <MenuItem value={17}>0-17</MenuItem>
                    <MenuItem value={64}>18-64</MenuItem>
                    <MenuItem value={65}>65+</MenuItem>
                </Select>
            </Grid>
            <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
                <InputLabel htmlFor="student">Student</InputLabel>
                <Radio
                    checked={customer.student === 'true'}
                    onChange={handleChange}
                    value="true"
                    name="student"
                    inputProps={{ 'aria-label': 'Yes' }}
                />
                <Radio
                    checked={customer.student === 'false'}
                    onChange={handleChange}
                    value="false"
                    name="student"
                    inputProps={{ 'aria-label': 'No' }}
                />
            </Grid>
            <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
                <InputLabel htmlFor="income-customer">Income</InputLabel>
                <Select
                    value={customer.income}
                    onChange={handleChange}
                    inputProps={{
                        name: 'income',
                        id: 'income-customer',
                    }}
                >
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={12000}>1-12000</MenuItem>
                    <MenuItem value={40000}>12001-40000</MenuItem>
                    <MenuItem value={40001}>40001+</MenuItem>
                </Select>
            </Grid>
        </Grid>
    );
};
export default CustomerInformation;