import * as types  from '../actions/actionTypes';


const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  export function featuresReducer(state = initialState, action) {
    switch (action.type) {
      default:
        return state;
      case types.BUY_ITEM:
        return {
          ...state,
          car: {
            ...state.car,
            features: [...state.car.features, action.payload].filter(
              (item, index, self) => {
                return self.indexOf(item) === index;
              }
            ),
            price: state.car.price + action.payload.price
          }
        };
      case types.REMOVE_ITEM:
        return {
          ...state,
          car: {
            ...state.car,
            features: state.car.features.filter(
              item => item.id !== action.payload.id
            ),
            price: state.car.price - action.payload.price
          }
        };
    }
  }