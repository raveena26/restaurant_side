import { useState } from "react";
import loginBackgroundImg from "../assets/images/loginBackground.png";
import { regex } from "../GlobalConstants";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { errorActions } from "../store/error";
import ErrorModal from "../components/ErrorModal";

const styles = {
  txtColor: {
    color: "#f39494",
    fontFamily: "fantasy",
    margin: "10px",
  },
  inputField: {
    margin: "10px",
  },
  btn: {
    borderRadius: "10px",
    padding: "5px",
    backgroundColor: "lightgreen",
    width: "100px",
  },
};

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errorVal = useSelector((state) => state.errorValues);
  const [loginValue, setLoginValue] = useState();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleLoginSignUp = (handleValue) => {
    if (handleValue === "login") {
      if (userName === "" || passWord === "") {
        dispatch(errorActions.updateErrorVal(true));
        dispatch(errorActions.updateErrorMessage("All fields are mandatory"));
        dispatch(errorActions.updateErrorTitle("Error"));
      } else {
        dispatch(errorActions.updateErrorVal(false));
        navigate("welcomeScreen", { replace: true });
      }
    } else if (handleValue === "signUp") {
      if (
        userName === "" ||
        passWord === "" ||
        email === "" ||
        firstName === "" ||
        lastName === ""
      ) {
        dispatch(errorActions.updateErrorVal(true));
        dispatch(errorActions.updateErrorMessage("All fields are mandatory"));
        dispatch(errorActions.updateErrorTitle("Error"));
      } else {
        if (!regex.test(email)) {
          dispatch(errorActions.updateErrorVal(true));
          dispatch(errorActions.updateErrorMessage("Invalid email !!!"));
          dispatch(errorActions.updateErrorTitle("Email Error"));
        } else {
          dispatch(errorActions.updateErrorVal(false));
          navigate("welcomeScreen", { replace: true });
        }
      }
    }
  };

  const handleClose = () => {
    dispatch(errorActions.updateErrorVal(false));
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${loginBackgroundImg})`,
          backgroundSize: "cover",
          height: "99vh",
          width: "100vw",
          position: "fixed",
        }}
      >
        <div
          style={{
            textAlign: "center",
            position: "absolute",
            top: "40vh",
            left: "40vw",
          }}
        >
          <h1 style={styles.txtColor}>Craving Something ?</h1>
          <h3 style={styles.txtColor}>Let's get started !</h3>
          {loginValue && (
            <>
              <input
                type="text"
                placeholder="Enter username"
                style={styles.inputField}
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <br />
              <input
                type="password"
                placeholder="Enter password"
                style={styles.inputField}
                value={passWord}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />{" "}
              <br />
              <button
                style={styles.btn}
                onClick={() => {
                  handleLoginSignUp("login");
                }}
              >
                LOGIN
              </button>
            </>
          )}
          {loginValue !== undefined && !loginValue && (
            <>
              <input
                type="text"
                placeholder="Enter email"
                style={styles.inputField}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br />
              <input
                type="text"
                placeholder="Enter username"
                style={styles.inputField}
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <br />
              <input
                type="text"
                placeholder="Enter First Name"
                style={styles.inputField}
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <br />
              <input
                type="text"
                placeholder="Enter Last Name"
                style={styles.inputField}
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <br />
              <input
                type="password"
                placeholder="Enter password"
                style={styles.inputField}
                value={passWord}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />{" "}
              <br />
              <button
                style={styles.btn}
                onClick={() => {
                  handleLoginSignUp("signUp");
                }}
              >
                SIGN UP
              </button>
            </>
          )}

          {loginValue === undefined && (
            <div style={{ display: "inline-flex" }}>
              <h5
                style={styles.txtColor}
                onClick={() => {
                  setLoginValue(true);
                }}
              >
                Login
              </h5>{" "}
              <h5
                style={styles.txtColor}
                onClick={() => {
                  setLoginValue(false);
                }}
              >
                Signup
              </h5>
            </div>
          )}
        </div>
      </div>
      {errorVal.errorVal === true && (
        <ErrorModal
          message={errorVal.errorMessage}
          title={errorVal.errorTitle}
          onClose={() => {
            handleClose();
          }}
        />
      )}
    </>
  );
};

export default LoginPage;
