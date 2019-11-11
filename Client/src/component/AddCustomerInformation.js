import React from "react";
import { Paper, Button, Grid } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import CustomerInformation from '../commonComponent/CustomerInformation';
import httpHelper from '../utils/httpHelper';

export default function AddCustomerInformation() {

  const [values, setValues] = React.useState({
    age: -1,
    student: null,
    income: null,
    bundleValue: null
  })

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onButtonClick = event => {
    httpHelper.post("findBundleValue", values).then(function (result) {
      setValues({
        bundleValue: result.BundleValue
      })
  });
  }
  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <InputLabel htmlFor="bundle">Get Bundle based on customer infromation</InputLabel>
      <CustomerInformation handleChange={handleChange} customer={values} />
      <br/>
      <Grid xs={2} md={1} item>
        <Button
          variant="contained"
          color="primary"
          onClick={onButtonClick}
        >
          Get Bundle
        </Button>
      </Grid>
      <br/>
      <InputLabel htmlFor="age-customer">Bundle Value is :{values.bundleValue}</InputLabel>
    </Paper>

  )
}
