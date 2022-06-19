export const reducer = (state, action) => {
    switch (action.type) {
    case 'ADD_DETAILID':
      return {
        ...state,
        detailId: [action.payload],
      };
      default:
        return state;
  };
}