import { useState } from "react";
import loginBackgroundImg from "../assets/images/loginBackground.png";
import {regex} from "../GlobalConstants";
import { useNavigate } from "react-router-dom";
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

  const navigate=useNavigate();
  const [loginValue, setLoginValue] = useState();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [firstName,setFirstName]=useState("")
  const[lastName,setLastName]=useState("")
 

  const handleLoginSignUp = (handleValue) => {
    if(handleValue==="login"){
      if (userName === "" || passWord === "") {
        console.log("All fields are mandatory");
      } else {
        console.log(userName, passWord,regex.test(email));
        navigate('welcomeScreen',{ replace: true });
      }
    }
    else if(handleValue==="signUp"){
      if (userName === "" || passWord === "" || email ==="" ||firstName==="" || lastName==="") {
        console.log("All fields are mandatory");
      } else {
        if(regex.test(email)){
          console.log("Invalid email !!!");
        }else{
          console.log(userName, passWord,regex.test(email));
          navigate('welcomeScreen',{ replace: true });
        }
       
      }
    }
    
  };



  return (
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
  );
};

export default LoginPage;
