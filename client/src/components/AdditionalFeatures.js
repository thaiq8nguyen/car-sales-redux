import React from "react";
import { connect } from "react-redux";
import { Card, Grid, List } from "semantic-ui-react";
import AdditionalFeature from "./AdditionalFeature";

const AdditionalFeatures = props => {
  return (
    <>
      <Card fluid>
        <Card.Content style={{ backgroundColor: "#CC0000" }}>
          <Card.Header style={{ color: "#FFFFFF" }}>
            Available Options
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <List>
            {props.availableOptions.map(option => (
              <List.Item key={option.id}>
                <AdditionalFeature option={option} />
              </List.Item>
            ))}
          </List>
        </Card.Content>
      </Card>
    </>
    // <div className="content">
    //   <h4>Additional Features</h4>
    //   {props.store.length ? (
    //     <ol type="1">
    //       {props.store.map(item => (
    //         <AdditionalFeature key={item.id} feature={item} />
    //       ))}
    //     </ol>
    //   ) : (
    //     <p>Nice looking car!</p>
    //   )}
    //</div>
  );
};
const mapStateToProps = state => ({
  availableOptions: state.available_options
});

export default connect(mapStateToProps)(AdditionalFeatures);
