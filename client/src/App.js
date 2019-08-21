import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";

import { Grid } from "semantic-ui-react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = () => {
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: "2019 Ford Mustang",

  //     image:
  //       "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
  //     features: []
  //   },
  //   store: [
  //     { id: 1, name: "V-6 engine", price: 1500 },
  //     { id: 2, name: "Racing detail package", price: 1500 },
  //     { id: 3, name: "Premium sound system", price: 500 },
  //     { id: 4, name: "Rear spoiler", price: 250 }
  //   ]
  // };

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <Provider store={store}>
      <Grid container columns="2" padded="vertically">
        <Grid.Row>
          <Grid.Column width="8">
            <Header></Header>
          </Grid.Column>
          <Grid.Column width="8">
            <AdditionalFeatures />
          </Grid.Column>
        </Grid.Row>
        {/* <AdditionalFeatures /> */}
        {/* <Total /> */}
      </Grid>
    </Provider>
  );
};

export default App;
