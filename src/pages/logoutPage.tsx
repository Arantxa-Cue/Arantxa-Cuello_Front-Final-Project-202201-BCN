import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import styled from "styled-components";
import { logoutUserAction } from "../redux/actions/actionsCreators";
import { primary } from "../styles/globalStyles";

const LogoutPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("UserToken");
    dispatch(logoutUserAction());

    navigate(`/`);
  };
  return (
    <>
      <Form>
        <div>
          <h1>Do you want to log out?</h1>
          <button type="submit" onClick={logOut}>
            Log out.
          </button>
          <Toaster />;
        </div>
      </Form>
    </>
  );
};

const Form = styled.main`
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h1 {
    padding: 10px;
    color: ${primary};
    font-size: 20px;
    font-weight: normal;
  }
`;

export default LogoutPage;
