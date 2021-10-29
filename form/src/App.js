import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "/Users/vins/Documents/konexio/react/form-react/form/src/App.css"

class form extends React.Component {
        constructor() {
            super()
            this.state = {
                email: "",
                password: "",
                rememberMe: false,
                emailIsValid: false,
                passwordIsValid: false,
                isSubmitted: false
            }
            this.handleEmailChange = this.handleEmailChange.bind(this)
            this.handlePasswordChange  = this.handleEmailChange.bind(this)
            // this.handleRememberMeChange = this.handleRememberMeChange.bind(this)
            // this.handleSubmit = this.handleSubmit.bind(this)
        }
        handleEmailChange(e){
            var regex = /[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
            if(e.target.value.match(regex)){
            this.setState({ email: e.target.value })
            }
            
        }
        

        // handlePasswordChange (e)

        // handleRememberMeChange()

        // handleSubmit()

        render() {
            return (
                <form >
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input onChange={this.handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input onChange={this.handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" >Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
                )
            };
        }



        export default form