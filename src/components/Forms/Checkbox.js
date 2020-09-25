import React from "react";
import {Wrapper, Input, Checkmark} from "../../styledComponents/StyledCheckbox";

export default function Checkbox(props){
    return(
        <Wrapper className="checkbox-wrapper">{props.text}
          <Input type="checkbox" onChange={props.toggleTick} className="checkbox" checked={props.isChecked} />
          <Checkmark className="checkmark"></Checkmark>
        </Wrapper>
    )
}