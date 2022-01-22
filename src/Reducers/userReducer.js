export const initialState = {
  access_token: "",
  user_data: {},
};

export const reducer = (state = initialState, action) => {
  if (action.type === "USER") {
    return action.payload;
  }
  if (action.type === "REMOVE_USER") {
    return null;
  }
  return state;
};
