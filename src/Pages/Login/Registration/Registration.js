import { Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Registration = () => {
  const { handleName, handelPass, handelEmail, registerProcess, error } =
    useAuth();
  const history = useHistory()
  return (
    <div className="container-fluid my-5">
      <Container>
        <div className="text-center">
          <h1 style={{ letterSpacing: "3px", fontWeight: "500" }}>
            {" "}
            <span className="text-info">REGISTER</span> HERE
          </h1>
          <Link
            className="text-info"
            style={{ textDecoration: "none" }}
            to="/login"
          >
            <small>Already Registered? Login</small>
          </Link>
        </div>
        <p className="text-danger text-center">{error}</p>

        <div className="text-center mt-5">
          <form onSubmit={() => {
            registerProcess()
            history.replace('/home')
          }}>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              onBlur={handleName}
              className="form-control m-2 w-50 mx-auto"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onBlur={handelEmail}
              className="form-control m-2 w-50 mx-auto"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onBlur={handelPass}
              className="form-control m-2 w-50 mx-auto"
            />
            <input
              type="password"
              name="password2"
              onBlur={handelPass}
              placeholder="Re-Type password"
              className="form-control m-2 w-50 mx-auto"
            />
            <input
              className="btn btn-outline-secondary w-50 m-2 fw-bold"
              type="submit"
              value="REGISTER"
            />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Registration;

/* const [loginData, setLoginData] = useState({});

const { registerUser } = useAuth();
const handelOnBlur = (e) => {
  const field = e.target.name;
  const value = e.target.value;
  const newLoginData = { ...loginData };
  newLoginData[field] = value;
  console.log(newLoginData);
  setLoginData(newLoginData);
};

const handelLogin = (e) => {
  if (loginData.password !== loginData.password2) {
    alert("password did not matched");
    return;
  }
  registerUser(loginData.email, loginData.name, loginData.password);
  e.preventDefault();
};
 */
