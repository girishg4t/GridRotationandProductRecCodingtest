const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { findBundleValue, getUpdatedBundleBasedonRule } = require('./Exercise2/productRecommendation');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.post('/findBundleValue', function (req, res) {
    const customer = req.body;
    const bundleValue = findBundleValue(customer.age, customer.student, customer.income);
    res.send({ "BundleValue": bundleValue });
});

app.post('/getUpdatedBundleProducts', function (req, res) {
    const prodRecomRequest = req.body;
    const bundle = getUpdatedBundleBasedonRule(prodRecomRequest.bundleName,
        prodRecomRequest.customer.age, prodRecomRequest.customer.student,
        prodRecomRequest.customer.income);
    res.send(bundle.Products);
});

app.listen(8000, function () { console.log("Server started on port 8000") });