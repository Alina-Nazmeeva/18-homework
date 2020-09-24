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

    validation = (target) => {
        const nameReg = /\p{L}{3,}/u;
        const emailReg = /.{3,}@.{2,}\..{2,}/;
        const passwordReg = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/;

        switch(target.id){
            case "firstName":
            case "lastName":
                target.style.borderColor = nameReg.test(target.value) ? "green" : "red";
                break;
            case "email":
                target.style.borderColor = emailReg.test(target.value) ? "green" : "red";
                break;
            case "password": 
                target.style.borderColor = passwordReg.test(target.value) ? "green" : "red";
                break;      
            default:
                break;
        }
        // if(target.id === "firstName" || target.id === "lastName"){
        //     console.log(target.id);
        //     target.style.borderColor = nameReg.test(target.value) ? "green" : "red";
        // }
    }

    onInputChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        });
        console.log(this.state);
        this.validation(event.target);
    }

    toggleTick = (event) => {
        this.setState({
            checkbox: event.target.checked
        });
        console.log(this.state.checkbox);
    }

    render(){
        return(
            <FormWrapper>
                <Icon></Icon>
                <RenderIf condition={this.props.location.pathname === "/signin"}>
                    <p>Sign In</p>
                </RenderIf>
                <RenderIf condition={this.props.location.pathname === "/signup"}>
                    <p>Sign Up</p>
                </RenderIf>
                <RenderIf condition={this.props.location.pathname === "/signup"}>
                    <NameInputWrapper>
                        <TextInput type="text" id="firstName" value={this.state.firstName} placeholder="First Name*" nameInput onChange={this.onInputChange}/>
                        <TextInput type="text" id="lastName" value={this.state.lastName} placeholder="Last Name*" nameInput onChange={this.onInputChange}/>
                    </NameInputWrapper>
                </RenderIf>
                <TextInput type="text" id="email" value={this.state.email} placeholder="Email Address*" onChange={this.onInputChange}/>
                <TextInput type="password" id="password" value={this.state.password} placeholder="Password*" onChange={this.onInputChange}/>
                <RenderIf condition={this.props.location.pathname === "/signin"}>
                    <Checkbox text="Remember me" toggleTick={this.toggleTick}/>
                </RenderIf>
                <RenderIf condition={this.props.location.pathname === "/signup"}>
                    <Checkbox  toggleTick={this.toggleTick} text="I want to receive inspiration, marketing promotions and updates via email" />
                </RenderIf>
                <RenderIf condition={this.props.location.pathname === "/signin"}>
                    <SubmitInput type="submit" value="SIGN IN" />
                </RenderIf>
                <RenderIf condition={this.props.location.pathname === "/signup"}>
                    <SubmitInput type="submit" value="SIGN UP" />
                </RenderIf>
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