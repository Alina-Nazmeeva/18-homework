import React, { Component } from 'react';
import {FormWrapper, Icon, NameInputWrapper, TextInput, SubmitInput, LinkWrapper, LinkContent, Footer} from "../../styledComponents/StyledForm";
import Checkbox from "./Checkbox";
import {RenderIf} from "../../RenderIf";

export default class Form extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        checkbox: false
    }

    componentDidMount(){
        if(localStorage.getItem("rememberMe") === "true"){
            this.setState({
                email: localStorage.email,
                password: localStorage.password,
                checkbox: true
            })
        }
    }

    validation = (value, target) => {
        const nameReg = /\p{L}{3,}/u;
        const emailReg = /.{3,}@.{2,}\..{2,}/;
        const passwordReg = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/;
        
        switch(target){
            case "firstName":
            case "lastName":
                return nameReg.test(value);
            case "email":
                return emailReg.test(value);
            case "password": 
                return passwordReg.test(value);     
            default:
                break;
        }
    }

    onInputChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        });
        event.target.style.borderColor = this.validation(event.target.value, event.target.id) ? "green" : "red";
    }

    toggleTick = (event) => {
        event.target.checked = !this.state.checkbox;
        this.setState((prevState) => {
            return {
                checkbox: !prevState.checkbox
            }
        });
    }

    handleSubmit = () => {
        if(this.props.location.pathname === "/signin"){
            if((localStorage.getItem("email") === this.state.email) &&
                (localStorage.getItem("password") === this.state.password)){
                    if(this.state.checkbox === true){
                        localStorage.setItem("rememberMe", this.state.checkbox.toString());
                    }
                    this.props.history.push("/welcome");
            } else {
                alert("Incorrect email or password");
            }
        } else if(this.props.location.pathname === "/signup"){
            if (this.validation(this.state.firstName, "firstName") && 
                this.validation(this.state.lastName, "lastName") && 
                this.validation(this.state.email, "email") && 
                this.validation(this.state.password, "password")){
                    localStorage.setItem("email", this.state.email);
                    localStorage.setItem("password", this.state.password);
                    this.props.history.push("/");
            } else if  (!this.validation(this.state.firstName, "firstName") || 
                        !this.validation(this.state.lastName, "lastName")){
                            alert("Name must contain at least 3 letters");
            } else if(!this.validation(this.state.email)){
                alert("Wrong email");
            } else if(!this.validation(this.state.password, "password")){
                alert("Password must contain at least 1 uppercase letter and 1 lowercase letter");
            }
        }
    }

    render(){
        return(
            <FormWrapper>
                <Icon></Icon>
                <p>{this.props.location.pathname === "/signin" ? "Sign In" : "Sign Up"}</p>
                <RenderIf condition={this.props.location.pathname === "/signup"}>
                    <NameInputWrapper>
                        <TextInput type="text" id="firstName" value={this.state.firstName} placeholder="First Name*" nameInput onChange={this.onInputChange}/>
                        <TextInput type="text" id="lastName" value={this.state.lastName} placeholder="Last Name*" nameInput onChange={this.onInputChange}/>
                    </NameInputWrapper>
                </RenderIf>
                <TextInput type="text" id="email" value={this.state.email} placeholder="Email Address*" onChange={this.onInputChange}/>
                <TextInput type="password" id="password" value={this.state.password} placeholder="Password*" onChange={this.onInputChange}/>
                <Checkbox   toggleTick={this.toggleTick} 
                            isChecked={this.state.checkbox}
                            text={this.props.location.pathname === "/signin" ? "Remember me" : "I want to receive inspiration, marketing promotions and updates via email"} />
                <SubmitInput type="button" onClick={this.handleSubmit} value={this.props.location.pathname === "/signin" ? "SIGN IN" : "SIGN UP"} />
                <RenderIf condition={this.props.location.pathname === "/signin"}>
                    <LinkWrapper signIn>
                        <LinkContent to="#">Forgot password?</LinkContent>
                        <LinkContent to="/signup">Don't have an account? Sign up</LinkContent>
                    </LinkWrapper>
                </RenderIf>
                <RenderIf condition={this.props.location.pathname === "/signup"}>
                    <LinkWrapper>
                        <LinkContent to="/signin">Already have an account? Sign in</LinkContent>
                    </LinkWrapper>
                </RenderIf>
                <Footer>Copyright © Alina Nazmeeva 2020</Footer>
            </FormWrapper>
        )
    }
}