const bundleConfig = require('./config/bundleConfig.json');
const productConfig = require('./config/productConfig.json');

//created configuration for swapping rules based on my understanding 
//The products in the bundle can be swapped by key in the config
// if it contains values in product array
const swappingRules = require("./config/swappingRuleConfig.json");

// created constant for "Debit Card" product as it has different rule as compared to other products  
const debitCardProductRule = ["Current Account", "Current Account Plus", "Student Account", "Pensioner Account"];

function executeRule(rule, value) {
  if (rule === null) return true;
  switch (rule.Operator) {
    case ">":
      return value > rule.Value ? true : false
    case "<":
      return value < rule.Value ? true : false
    case "=":
      return value = rule.Value ? true : false
    default:
      return false;
  }
}

function findBundleValue(age, student, income) {
  let bundleValue = -1;
  Object.keys(bundleConfig).forEach((key) => {
    let bundle = bundleConfig[key];
    if (executeRule(bundle.Rules["Age"], age) && executeRule(bundle.Rules["Student"], student) &&
      executeRule(bundle.Rules["Income"], income)) {
      bundleValue = bundle.Value;
    }
  });
  return bundleValue;
}

function getUpdatedBundleBasedonRule(bundleName, age, student, income) {
  let products = [];

  Object.keys(productConfig).forEach((product) => {
    let rule = productConfig[product];
    if (executeRule(rule["Age"], age) && executeRule(rule["Student"], student) &&
      executeRule(rule["Income"], income)) {
      products.indexOf(product) === -1 ? products.push(product) : null;
      if (debitCardProductRule.indexOf(product) !== -1) {
        products.indexOf("Debit Card") === -1 ? products.push("Debit Card") : null;
      }
    }
  });

  bundleConfig[bundleName].Products = swapProductsBasedonRules(products);
  return bundleConfig[bundleName];
}

//The products in the bundle can be swapped by key in the config
// if it contains values in product array
function swapProductsBasedonRules(products) {
  Object.keys(swappingRules).forEach((swapingProduct) => {
    if (products.indexOf(swapingProduct) != -1) {
      swappingRules[swapingProduct].forEach((product) => {
        var index = products.indexOf(product);
        if (index > -1) {
          products.splice(index, 1);
        }
      });
    }
  });
  return products;
}

module.exports = {
  findBundleValue,
  getUpdatedBundleBasedonRule
}

