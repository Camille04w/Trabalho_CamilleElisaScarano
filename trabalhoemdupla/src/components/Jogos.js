import './Jogos.css';

function Jogos(props) {



    return (

        <div class="DigaH1">

            <h1 className="titulo">{props.titulo}</h1>

            <p className="categoria">{props.categoria}</p>


            <p className="descricao">{props.descricao}</p>

            <h4 className="preco">{props.preco}</h4>

        </div>

    )

}



export default Jogos