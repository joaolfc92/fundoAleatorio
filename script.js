
class Nome extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            nome: this.props.nome

        }

        this.limparNome = this.limparNome.bind(this)
        this.trocarfundo = this.trocarfundo.bind(this)
    }


    limparNome(){
        this.setState({nome: ""})
    }

    trocarfundo(){
        var body = document.getElementsByTagName('body');
        var r = Math.floor(Math.random()*251);
        var g = Math.floor(Math.random()*251);
        var b = Math.floor(Math.random()*251);

        var cor = "rgb("+r+","+g+","+b+")" 

        /*var paleta = ['red','blue','green','black']
        var cor = Math.floor(Math.random()*4)*/


        body[0].style.backgroundColor = cor;
    }


        render(){
            return (
                <div>
        <h1>Meu nome é {this.state.nome}</h1>
        <button onClick = {this.limparNome} >Trocar o nome</button>
        <button onClick = {this.trocarfundo} >Fundo aleatorio</button>
                </div>
            )
        }
    }


   




let elemento = (
    <div>
        <Nome nome="João"/>
       
    </div>
)




ReactDOM.render(
    elemento,
    document.getElementById('app')
)



// criando funções e executando