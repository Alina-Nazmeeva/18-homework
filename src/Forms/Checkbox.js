import React from "react";
import "./Form.css";
// import styled from "styled-components";

// const Wrapper = styled.label`
//     display: block;
//     position: relative;
//     padding-left: 24px;
//     margin-bottom: 12px;
//     cursor: pointer;
//     font-size: 12px;
//     -webkit-user-select: none;
//     -moz-user-select: none;
//     -ms-user-select: none;
//     user-select: none;
// `;

// const Input = styled.input`
//     position: absolute;
//     opacity: 0;
//     cursor: pointer;
//     height: 0;
//     width: 0;
// `;

// const Checkmark = styled.span`
//     position: absolute;
//     top: 0;
//     left: 0;
//     height: 14px;
//     width: 14px;
//     background-color: #121212;
//     border: 1px solid #474747;
//     ::after{
//         content: "";
//         position: absolute;
//         display: none;
//         left: 4px;
//         top: 0px;
//         width: 4px;
//         height: 7px;
//         border: solid white;
//         border-width: 0 2px 2px 0;
//         -webkit-transform: rotate(45deg);
//         -ms-transform: rotate(45deg);
//         transform: rotate(45deg);
//     }
// `;

  /* Create the checkmark/indicator (hidden when not checked) */
//   .checkmark:after {
//     content: "";
//     position: absolute;
//     display: none;
//   }
  
  /* Show the checkmark when checked */
//   .checkbox:checked ~ .checkmark:after {
//     display: block;
// }
  
  /* Style the checkmark/indicator */
// .checkbox-wrapper .checkmark:after{
//     left: 4px;
//     top: 0px;
//     width: 4px;
//     height: 7px;
//     border: solid white;
//     border-width: 0 2px 2px 0;
//     -webkit-transform: rotate(45deg);
//     -ms-transform: rotate(45deg);
//     transform: rotate(45deg);
// }

export default function Checkbox({text}){
    return(
        <label className="checkbox-wrapper">{text}
                <input type="checkbox" className="checkbox"/>
                <span className="checkmark"></span>
            </label>
    )
}