const initialState = {
  authResponse: {},
  user: null,
  isLoading: false,
  isRejected: false,
  isInstalled: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "USER_REGISTER_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false
      };
    case "USER_REGISTER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "USER_REGISTER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        authResponse: action.payload.data.response
      };
    case "USER_LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false
      };
    case "USER_LOGIN_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "USER_LOGIN_FULFILLED":
      // console.log(action.payload.data, "uye")
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        authResponse:
        
          action.payload.data.status === "success" ? action.payload.data.response : null
      };
    case "GET_USER_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false
      };
    case "GET_USER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_USER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        authResponse: action.payload ? JSON.parse(action.payload) : null
      };
      case "GET_INSTALLED_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false
      };
    case "GET_INSTALLED_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_INSTALLED_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isInstalled: true
      };
    default:
      return state;
  }
};

export default auth;
