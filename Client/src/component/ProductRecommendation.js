import React from "react";
import { Paper, Button, Grid } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import CustomerInformation from '../commonComponent/CustomerInformation';
import httpHelper from '../utils/httpHelper';


export default function ProductRecommendation() {
    const [values, setValues] = React.useState({
        customer: {
            age: -1,
            student: null,
            income: null
        },
        bundleName: null,
        products: []
    })

    const handleChange = event => {
        setValues({
            ...values, [event.target.name]: event.target.value
        });
    };

    const handleCustomerInfoChange = event => {
        setValues({
            ...values,
            customer: {
                ...values.customer,
                [event.target.name]: event.target.value
            }
        });
    };

    const onButtonClick = event => {
        httpHelper.post("getUpdatedBundleProducts", values).then(function (result) {
            setValues({
                customer: {},
                products: result
            });
        });
    }

    React.useEffect(() => {
        document.title = `${values.customer.student}`;
    }, [values.customer.age, values.customer.income]);

    return (
        <Paper style={{ margin: 16, padding: 16 }}>

            <InputLabel htmlFor="bundle">Get Recommended Products for selected bundle</InputLabel>
            <Grid container>
                {!values.customer.student ? <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
                    <InputLabel htmlFor="bundleName-customer">BundleName</InputLabel>
                    <Select
                        name="bundleName"
                        value={values.bundleName}
                        onChange={handleChange}
                        inputProps={{
                            name: 'bundleName',
                            id: 'bundleName-customer',
                        }}
                    >
                        <MenuItem value="Junior Saver">Junior Saver</MenuItem>
                        <MenuItem value="Student">Student</MenuItem>
                        <MenuItem value="Classic">Classic</MenuItem>
                        <MenuItem value="Classic Plus">Classic Plus</MenuItem>
                        <MenuItem value="Gold">Gold</MenuItem>
                    </Select>
                </Grid> : <Grid />}

                <br />
                <CustomerInformation handleChange={handleCustomerInfoChange} customer={values.customer} />
                <br />
                <Grid xs={2} md={1} item>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onButtonClick}
                    >
                        Get Products
                 </Button>
                </Grid>
            </Grid>
            <br />
            <InputLabel htmlFor="products">Recommended Products for selected bundle :{values.products.join(",")}</InputLabel>
        </Paper>

    )
}
