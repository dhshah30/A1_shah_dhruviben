import React, { Component } from "react";

export default class Login extends Component {
    render() {
    	
        return (

        	
            <form>
            <div class="col-4 text-center">
                <h3>Library</h3></div>

             


                <div className="form-group">
                <div class="row">
    				<div class="col-4 text-center">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                </div>
                </div>

                <div className="form-group">
                <div class="row">
    				<div class="col-4 text-center">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                </div>
                </div>

                <div class="row">
    				<div class="col-4 text-center">
                <button type="submit" className="button">Submit</button>
                <p className="forgot-password text-right">
                     <a href="#">Forgot passwordd??</a>
                </p>
                </div>
                </div>
          

            </form>



        );
        


    }
}
