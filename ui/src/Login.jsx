import React from "react";

function Login (props) {
    return (<form method="post">
        <div className="form-group col-6">
            <label htmlFor="inputUsername">
                Username
            </label>
            <input type="text" className="form-control" id="inputUsername" placeholder="Enter username" name="username"/>
        </div>
        <div className="form-group col-6">
            <label htmlFor="inputPassword">
                Password
            </label>
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" name="password"/>
        </div>
        <button type="submit" className="btn btn-outline-info" onClick={props.login}>Login</button>
    </form>)
}

export default Login;
