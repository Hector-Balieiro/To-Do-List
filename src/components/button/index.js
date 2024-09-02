export default function Button(props){
    return <button
        onClick={props.funcao}
        type={props.type}
        data-bs-toggle={props['data-bs-toggle']}
        data-bs-target={props['data-bs-target']}
        className={props['className']}
        style = {props['style']}
        data-bs-dismiss={props['data-bs-dismiss']}
        aria-label={props['arial-label']}>{props.children}</button>
        
}