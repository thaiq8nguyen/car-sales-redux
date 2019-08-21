import {
  ADD_AVAILABLE_OPTION,
  REMOVE_OPTION_FROM_AVAILABLE_OPTIONS,
  COMPUTE_ADDED_OPTION_PRICE,
  COMPUTE_TOTAL_PRICE,
  REMOVE_OPTION_FROM_CAR
} from "./actions";

export const addAvailableOption = availableOption => {
  return { type: ADD_AVAILABLE_OPTION, payload: availableOption };
};

export const removeOptionFromAvailableOptions = availableOptionID => {
  return {
    type: REMOVE_OPTION_FROM_AVAILABLE_OPTIONS,
    payload: availableOptionID
  };
};

export const computeAddedOptionPrice = () => {
  return {
    type: COMPUTE_ADDED_OPTION_PRICE
  };
};

export const computeTotalPrice = () => {
  return {
    type: COMPUTE_TOTAL_PRICE
  };
};

export const removeOptionFromCar = optionID => {
  console.log("optionid ", optionID);

  return {
    type: REMOVE_OPTION_FROM_CAR,
    payload: optionID
  };
};
