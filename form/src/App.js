import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "/Users/vins/Documents/konexio/react/form-react/form/src/App.css"

class form extends React.Component {
        constructor() {
            super()
            this.state = {
                firstName:"",
                lastName:"",
                email: "",
                password: "",
                rememberMe: false,
                emailIsValid: false,
                passwordIsValid: false,
                isSubmitted: false
            }
            this.handleEmailChange = this.handleEmailChange.bind(this)
            this.handlePasswordChange = this.handlePasswordChange.bind(this)
            this.handleRememberMeChange = this.handleRememberMeChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
            this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
            this.handleLasttNameChange = this.handleLasttNameChange.bind(this)
            // this.styleEmail = this.styleEmail.bind(this)
        }
        handleEmailChange(e){
            this.setState({ email: e.target.value })        
            var regexEmail = /[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
            if(e.target.value.match(regexEmail)){
                this.setState({ emailIsValid: true})
            }
            else(this.setState({ emailIsValid: false}))
        }
        

        handlePasswordChange(e){
            var regexPassword = /^.{5,}$/
            this.setState({password : e.target.value})
            if(e.target.value.match(regexPassword)){
                this.setState({passwordIsValid : true})
            }
            else(this.setState({passwordIsValid : false}))
            
        }

        handleRememberMeChange(e){
            var check = document.getElementById('checkbox');
            if(check.checked == true){
                this.setState({rememberMe : true})
        }
        else(this.setState({rememberMe : false}))
            
        }

        handleSubmit(e){
            e.preventDefault()
            this.state.emailIsValid  && this.state.passwordIsValid ? this.setState({isSubmitted : true}) : this.setState({isSubmitted : false})


        }
        handleFirstNameChange(e){
            this.setState({ firstName: e.target.value }) 
        }

        handleLasttNameChange(e){
            this.setState({ lastName: e.target.value }) 
        }

        // styleEmail(e){
        //     this.emailIsValid ? e.target.className=""
        // }

        render() {
            
            return (
                    <form onSubmit={this.handleSubmit}>
    <div className="mb-3">
        <label  className="form-label">Inscription</label>
        <input className="form-control mb-4" type="text" placeholder="First Name" onChange={this.handleFirstNameChange}/>
        <input className="form-control mb-4" type="text" placeholder="Last Name" onChange={this.handleLasttNameChange}/>
        <input onChange={this.handleEmailChange} onChange={this.styleEmail} placeholder="Your Email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>  
    </div>
    <div className="mb-3">
        <label  className="form-label">Password</label>
        <input onChange={this.handlePasswordChange} placeholder="Your password" type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3 form-check">
        <input onChange={this.handleRememberMeChange} name='checkbox' type="checkbox" className="form-check-input" id="checkbox"/>
        <label className="form-check-label" >Remember me</label>
    </div>
    <button onSubmit={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
    </form>
                )
            };
        }



export default form