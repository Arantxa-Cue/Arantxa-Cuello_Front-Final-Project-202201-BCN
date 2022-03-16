import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import SessionForm from "../components/FormComponent/Form";
import store from "../redux/store";

describe("Given a Create session psge page component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a form", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SessionForm />
          </Provider>
        </BrowserRouter>
      );

      const form = screen.getByRole("main", {
        name: "",
      });

      expect(form).toBeInTheDocument();
    });
  });
});
