import { Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Slide from "react-reveal/Slide";

const Login = () => {
  const {
    loginProcess,
    handelEmail,
    handelPass,
    error,
    user,

    setError,
    setUser,
  } = useAuth();
  console.log(user);

  const history = useHistory();
  const location = useLocation();
  const redirect = location?.state?.from || "/home";
  return (
    <div className="container-fluid mt-5">
      <Slide left>
        <Container>
          <div className="text-center">
            <h1 style={{ letterSpacing: "3px", fontWeight: "500" }}>
              {" "}
              <span className="text-info">LOG IN</span> HERE
            </h1>
            <Link
              className="text-info"
              style={{ textDecoration: "none" }}
              to="/registration"
            >
              <small>Don't have Account? Please Register</small>
            </Link>
            <p className="text-danger text-center">{error}</p>
          </div>

          <div className="text-center my-5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                loginProcess()
                  .then((result) => {
                    const user = result.user;
                    setUser(user);
                    setError("");
                    history.push(redirect);
                  })
                  .catch((error) => {
                    setError(error.message);
                  });
              }}
            >
              <input
                type="email"
                name="email"
                onBlur={handelEmail}
                placeholder="Your Email"
                className="form-control m-2 w-50 mx-auto"
              />
              <input
                type="password"
                name="password"
                onBlur={handelPass}
                placeholder="Password"
                className="form-control m-2 w-50 mx-auto"
              />

              <input
                className="btn btn-outline-secondary w-50 m-2 fw-bold"
                type="submit"
                value="LOGIN"
              />
            </form>
          </div>
        </Container>
      </Slide>
    </div>
  );
};

export default Login;

{
  /* <h1 style={{letterSpacing:'3px'}}>Please Log in</h1>
          <Link style={{textDecoration:'none'}} to="/registration">
            <small>Don't have Account? Please Register</small>
          </Link> */
}

/* const [loginData, setLoginData] = useState({});

 const { loginUser } = useAuth();
 const handelOnChange = (e) => {
   const field = e.target.name;
   const value = e.target.value;
   const newLoginData = { ...loginData };
   newLoginData[field] = value;
   console.log(newLoginData);
   setLoginData(newLoginData);
 };

 const handelLogin = (e) => {
   loginUser(loginData.email, loginData.password);
   e.preventDefault();
 }; */
