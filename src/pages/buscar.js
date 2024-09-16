
export default function Buscar(props){
    return(
        <div className="col-12 justify-content-center d-flex">
            <div className='d-flex color col-md-7 col-11 justify-content-start flex-column'>
                <h3>Buscar</h3>
                <input className="input-interno" type='text' value={props.findValue} onChange={props.atualizar}/>
            </div>
        </div>
    )
}