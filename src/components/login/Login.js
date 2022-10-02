import React, { useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import config from '../../config/config'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorlogin, setErrorlogin] = useState(false)

  const handleLogin = async (e)   => {
    e.preventDefault();
    setErrorlogin(false)
    const res = await axios.post(config.baseUrl + 'api/user/login',{email,password})
    console.log('okkook',res)
    console.log("erro",errorlogin);
    if (res.data.error) {
      setErrorlogin(true)
      console.log("erro",errorlogin);
    }
    else {
      // window.location = '/'
    }
  };

  return (
    <form action="" onSubmit={handleLogin}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong">
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign in</h3>
                {
                  errorlogin ? <div className="errer-email">Email ou Mot de pass incorrect </div> : null
                }
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <label className="form-label">Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <label className="form-label">Password</label>
                </div>

                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Se connecter
                </button>
                <br />
                <Link to="/register"
                  className="btn btn-default btn-lg btn-block"
                >
                  créer un compte
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
