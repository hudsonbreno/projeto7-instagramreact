import { useState } from "react"

function nomeUsuario(){
    let nome = prompt("Digite seu nome:");;
    return nome
}


export default function Usuario(){

    const [nomeDoUsuario, setNomeDoUsuario] = useState("catacomics");
    const [imagem, setImagem] = useState("assets/img/catanacomics.svg");


    function qualImagem(){
        let imagem = prompt("Digite a URL que  será sua nova foto de  perfil:");
        setImagem(imagem);
    }

    function qualNome(){
        let nome = prompt("Digite seu nome:");
        setNomeDoUsuario(nome)
    }

return(
    <div className="usuario">
        <img data-test="profile-image" onClick={qualImagem} src={imagem} alt="imagem de perfil"/>
        <div className="texto">
        <span>
            <strong data-test="name">{nomeDoUsuario}</strong>
            <ion-icon data-test="edit-name" name="pencil" onClick={qualNome}></ion-icon>
        </span>
        </div>
    </div>
);
}