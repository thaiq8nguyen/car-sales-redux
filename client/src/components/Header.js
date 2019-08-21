import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Card,
  Header as SemanticHeader,
  Grid,
  Image,
  List
} from "semantic-ui-react";
import teslaImage from "../assets/tesla-model-s-red-highway.jpg";

import { removeOptionFromCar } from "../actions/actionCreators";
const Header = props => {
  const [optionPrice, setOptionPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalPrice = props.car.added_options.reduce((total, current) => {
      return total + current.price;
    }, 0);
    setOptionPrice(totalPrice);
  }, [props.car.added_options]);

  useEffect(() => {
    setTotalPrice(props.car.base_price + optionPrice);
  }, [props.car.base_price, optionPrice]);

  return (
    <>
      <Card fluid>
        <Image src={teslaImage} />
        <Card.Content style={{ backgroundColor: "#CC0000" }}>
          <Card.Header style={{ color: "#FFFFFF" }}>
            {props.car.name}
          </Card.Header>
        </Card.Content>

        <Card.Content>
          <Card.Description>
            <List>
              {props.car.base_options.map(option => (
                <List.Item key={option.id}>
                  <SemanticHeader as="h4">{option.value}</SemanticHeader>
                </List.Item>
              ))}
            </List>
          </Card.Description>
        </Card.Content>
        <Card.Content>
          {props.car.added_options.length > 0 && (
            <List>
              {props.car.added_options.map(option => (
                <List.Item key={option.id}>
                  <List.Icon
                    name="minus"
                    onClick={() => props.removeOptionFromCar(option.id)}
                  />
                  <List.Content>
                    <SemanticHeader as="h4" style={{ color: "#CC0000" }}>
                      {option.name}
                    </SemanticHeader>
                  </List.Content>
                </List.Item>
              ))}
            </List>
          )}
        </Card.Content>
        <Card.Content>
          <Grid columns="3" divided>
            <Grid.Row>
              <Grid.Column>
                <SemanticHeader as="h4">
                  Base Price: $ {props.car.base_price}
                </SemanticHeader>
              </Grid.Column>
              {optionPrice > 0 && (
                <Grid.Column>
                  <SemanticHeader as="h4">
                    Option Price: ${optionPrice}
                  </SemanticHeader>
                </Grid.Column>
              )}
              {totalPrice > 0 && (
                <Grid.Column>
                  <SemanticHeader as="h4">
                    Total Price: $ {totalPrice}
                  </SemanticHeader>
                </Grid.Column>
              )}
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    </>
  );
};

const mapStateToProps = state => ({ car: state.car });
const mapDispatchToProps = dispatch => {
  return {
    removeOptionFromCar: optionID => {
      dispatch(removeOptionFromCar(optionID));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
