export const RenderIf = (props) => {
    if(!!props.condition){
        return props.children;
    }
    return null;
}