
import Layout from './Layout'
import AddCustomerInformation from './component/AddCustomerInformation'
import ProductRecommendation from './component/ProductRecommendation'
import IncrementCount from './component/IncrementCount'
import React, { memo } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();
const ProductRecommendationTool = memo(props => {
  return (
    <Provider store={store}>
      <Layout>
        <AddCustomerInformation />
        <ProductRecommendation />
        <IncrementCount />
      </Layout>
    </Provider>
  );
});

const rootElement = document.getElementById("root");
ReactDOM.render(<ProductRecommendationTool />, rootElement);
