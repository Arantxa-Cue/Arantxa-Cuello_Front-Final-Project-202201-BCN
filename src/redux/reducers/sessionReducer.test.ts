import { Session } from "../../types/Session";
import actionsTypes from "../actions/actionsTypes";
import sessionReducer from "./sessionReducer";

describe("Given a sessionReducer function", () => {
  describe("When it is called with a loadSessions action with an array of sessions", () => {
    test("Then it should return the new state with the array of sessions", () => {
      const state: Session[] = [];

      const sessionsArray: Session[] = [
        {
          title: "hello",
          comment: "mornings",
          date: "saturdays",
          iFrame: "example",
        },
        {
          title: "goodnight",
          comment: "evenings",
          date: "saturdays",
          iFrame: "example2",
        },
      ];

      const action = {
        type: actionsTypes.loadSessions,
        sessions: sessionsArray,
      };

      const newState = sessionReducer(state, action);

      expect(newState).toEqual(sessionsArray);
    });
  });
});
