let listaStory=[
  {imgStory:"assets/img/9gag.svg", nomeUsuario:"9gag"},
  {imgStory:"assets/img/meowed.svg", nomeUsuario:"meowed"},
  {imgStory:"assets/img/barked.svg", nomeUsuario:"barked"},
  {imgStory:"assets/img/nathanwpylestrangeplanet.svg", nomeUsuario:"nathanwpylestrangeplanet"},
  {imgStory:"assets/img/wawawicomics.svg", nomeUsuario:"wawawicomics"},
  {imgStory:"assets/img/respondeai.svg", nomeUsuario:"respondeai"},
  {imgStory:"assets/img/filomoderna.svg", nomeUsuario:"filomoderna"},
  {imgStory:"assets/img/memeriagourmet.svg", nomeUsuario:"memeriagourmet"}
  ]

function Story(props){
  return(
    <div className="story">
      <div className="imagem">
        <img src={props.imgStory} alt={props.nomeUsuario}/>
      </div>
      <div className="usuario">
        {props.nomeUsuario}
      </div>
    </div>
  );
}

export default function Stories(){
    return(
      <div className="stories">
        {listaStory.map((i)=> (
          <Story key={i.nomeUsuario} imgStory={i.imgStory}  nomeUsuario={i.nomeUsuario} />
          ))}
        <div className="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
    );
  }