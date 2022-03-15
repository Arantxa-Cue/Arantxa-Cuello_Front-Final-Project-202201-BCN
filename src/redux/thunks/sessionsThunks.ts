import { ThunkDispatch } from "redux-thunk";
import {
  loadSessionsAction,
  deleteSessionAction,
} from "../actions/actionsCreators";
import { AnyAction } from "redux";

export const loadSessionsThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_MINDFULNESS}allsessions`
  );
  const sessionsList = await response.json();
  const sessions = sessionsList.sessions;
  dispatch(loadSessionsAction(sessions));
};

export const deleteSessionThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_MINDFULNESS}delete/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      dispatch(deleteSessionAction(id));
    }
  };
