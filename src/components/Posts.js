import { useState } from "react"

let listaPosts = [
  
  {fotoPerfil:"assets/img/meowed.svg", nomePerfil:"meowed", post:"assets/img/gato-telefone.svg", altPost:"gato-telefone", curtidaImg:"assets/img/respondeai.svg", curtidaNome:"respondeai"},
  {fotoPerfil:"assets/img/barked.svg", nomePerfil:"barked", post:"assets/img/dog.svg", altPost:"dog",curtidaImg:"assets/img/adorable_animals.svg", curtidaNome:"adorable_animals"}

]

function Post(props){
  const[curtida, setCurtida] = useState(".branco");
  const [salvar, setSalvar] = useState(".branco");

  function vaiCurtida(){
    if (curtida === ".branco"){
      setCurtida(".vermelho")
    } else {
      setCurtida(".branco")
    }
  }

  function vaiSalvar(){
    if (salvar === ".branco"){
      setSalvar(".vermelho")
    } else {
      setSalvar(".branco")
    }
  }

  return(
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.fotoPerfil} alt={props.nomePerfil}/>
          {props.nomePerfil}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={props.post} alt="gato-telefone"/>
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon data-test="like-post" onClick={vaiCurtida} name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div className={salvar}>
            <ion-icon onClick={vaiSalvar} name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.curtidaImg} alt={props.curtidaNome}/>
          <div className="texto">
            Curtido por <strong>{props.curtidaNome}</strong> e <strong data-test="likes-number">outras 101.523 pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts(){
    return(
      <div className="posts">
        {listaPosts.map((f)=>
        <Post key={f.fotoPerfil} fotoPerfil={f.fotoPerfil} nomePerfil={f.nomePerfil} post={f.post} altPost={f.altPost} curtidaImg={f.curtidaImg} curtidaNome={f.curtidaNome} />
        )}
      </div>
    );
  }
  
