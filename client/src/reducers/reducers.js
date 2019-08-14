import {
  ADD_AVAILABLE_OPTION,
  REMOVE_OPTION_FROM_AVAILABLE_OPTIONS,
  COMPUTE_ADDED_OPTION_PRICE,
  COMPUTE_TOTAL_PRICE,
  REMOVE_OPTION_FROM_CAR
} from "../actions/actions";

const DEFAULT_STATE = {
  car: {
    base_price: 80000,

    name: "2019 Tesla Model S",
    image_url: "",
    base_options: [
      {
        id: 1,
        name: "Drivetrain",
        value: "Dual Motor All-Wheel Drive",
        price: 0
      },
      { id: 2, name: "Color", value: "Pearl White Multi-Coat", price: 0 },
      { id: 3, name: "Suspension", value: "Adaptive Air Suspension", price: 0 },
      { id: 4, name: "Interior", value: "Premium Interior", price: 0 },
      { id: 5, name: "Wheels", value: '19 " Silver Wheels', price: 0 }
    ],
    added_options: []
  },
  available_options: [
    { id: 1, name: "Performance Package", price: 20000 },
    { id: 2, name: '21" Sonic Carbon Twin Turbine Wheels', price: 4500 },
    { id: 3, name: "Red Multi-Coat Color", price: 2500 },
    { id: 4, name: "Oak Wood Interior", price: 1500 },
    { id: 5, name: "Full Self-Driving Capability", price: 6000 }
  ]
};

const addAvailableOption = (state, action) => {
  return {
    ...state,
    car: {
      ...state.car,
      added_options: [...state.car.added_options, action.payload]
    }
  };
};

const removeOptionFromAvailableOptions = (state, action) => {
  return {
    ...state,
    available_options: state.available_options.filter(option => {
      return option.id !== action.payload;
    })
  };
};

const removeOptionFromCar = (state, action) => {
  return {
    ...state,
    car: {
      ...state.car,
      added_options: [
        ...state.car.added_options.filter(option => {
          return option.id !== action.payload;
        })
      ]
    }
  };
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_AVAILABLE_OPTION:
      return addAvailableOption(state, action);
    case REMOVE_OPTION_FROM_AVAILABLE_OPTIONS:
      return removeOptionFromAvailableOptions(state, action);
    case REMOVE_OPTION_FROM_CAR:
      return removeOptionFromCar(state, action);
    default:
      return state;
  }
};

export default rootReducer;
