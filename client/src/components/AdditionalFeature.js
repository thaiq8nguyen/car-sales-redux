import React from "react";
import { connect } from "react-redux";
import { Header } from "semantic-ui-react";
import {
  addAvailableOption,
  removeOptionFromAvailableOptions,
  computeAddedOptionPrice,
  computeTotalPrice
} from "../actions/actionCreators";
import { Button, Grid, Icon } from "semantic-ui-react";
const AdditionalFeature = props => {
  return (
    <Grid columns={3}>
      <Grid.Row verticalAlign="middle">
        <Grid.Column width="2">
          <Button
            icon
            size="small"
            onClick={() => props.addAvailableOption(props.option)}
          >
            <Icon name="add"></Icon>
          </Button>
        </Grid.Column>

        <Grid.Column width="11">
          <Header as="h4" style={{ color: "#CC0000" }}>
            {props.option.name}
          </Header>
        </Grid.Column>
        <Grid.Column width="3">
          <Header as="h4" style={{ color: "#CC0000" }}>
            $ {props.option.price}
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    option: ownProps.option
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAvailableOption: option => {
      dispatch(addAvailableOption(option));
      dispatch(removeOptionFromAvailableOptions(option.id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdditionalFeature);
