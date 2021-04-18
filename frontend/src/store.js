import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  articleListReducer,
  articleDetailReducer,
  articleClapReducer,
  articleCreateReducer,
} from "./reducers/articlesReducer";

import {
  userLoginReducer,
  userProfileReducer,
  userRegisterReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateProfileReducer,
  userUpdateReducer,
  userFollowerReducer,
  userUnFollowerReducer,
} from "./reducers/userReducer";

const reducer = combineReducers({
  articleList: articleListReducer,
  articleDetail: articleDetailReducer,
  articleClap: articleClapReducer,
  articleCreate: articleCreateReducer,
  userLogin: userLoginReducer,
  userProfile: userProfileReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userUpdate: userUpdateReducer,
  userFollower: userFollowerReducer,
  userUnFollower: userUnFollowerReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
