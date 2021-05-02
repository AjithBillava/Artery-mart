export const TOGGLE_DELIVERY = "TOGGLE_DELIVERY";
export const TOGGLE_INVENTORY = "TOGGLE_INVENTORY";
export const SORT = "SORT";

export const reducerFunc = (state, { type, payLoad, uncheck }) => {
  switch (type) {
    case TOGGLE_DELIVERY:
      return (state = {
        ...state,
        showFastDeliveryOnly: !state.showFastDeliveryOnly
      });
    case TOGGLE_INVENTORY:
      return (state = {
        ...state,
        showInventoryAll: !state.showInventoryAll
      });

    case SORT:
      return (state = {
        ...state,
        sortBy: payLoad,
        uncheck: uncheck
      });
    case "clear":
      return (state = {
        ...state,
        uncheck: false,
        showInventoryAll: false,
        showFastDeliveryOnly: false
      });
    default:
      return state;
  }
};
