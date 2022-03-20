import {
  DecodedToken,
  LoginUser,
  RegisterUser,
  User,
} from "../../types/userInterface";
import jwtDecode from "jwt-decode";
import {
  loadProfileAction,
  loginUserAction,
  registerUserAction,
} from "../actions/actionsCreators";
import { toast } from "react-toastify";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export const loginUserThunk =
  (user: LoginUser | User) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_MINDFULNESS}users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    if (response.ok) {
      const token = await response.json();
      const decodedToken: DecodedToken = await jwtDecode(token.token);
      localStorage.setItem("UserToken", token.token);
      const loggedUser = {
        username: user.username,
        password: (user as LoginUser).password,
        id: decodedToken.id,
        token: token.token,
        loggedIn: true,
      };
      dispatch(loginUserAction(loggedUser));
      toast.success("You're logged in!");
    } else {
      toast.error("Wrong credentials");
    }
  };

export const registerUserThunk =
  (user: RegisterUser) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_MINDFULNESS}users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    if (response.ok) {
      const newUser = await response.json();
      dispatch(registerUserAction(newUser));
      toast.success("User has been registered successfully");
    } else {
      toast.error("Oops!...Something went wrong.");
    }
  };

export const loadProfileThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_MINDFULNESS}users/profile/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const newUser = await response.json();

    dispatch(loadProfileAction(newUser));
  };
