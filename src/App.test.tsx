import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should render HomePage", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const nav = screen.getByRole("navigation");

      expect(nav).toBeInTheDocument();
    });
  });
});
