const reducer = (state = false, action) => {
    switch (action.type) {
      case 'CLICK':
        return state = !state;
      default:
        return state;
    }
  };
  
  export default reducer;
  