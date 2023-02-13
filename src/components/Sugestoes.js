let listaSugestoes= [

    {imgSugestoes:"assets/img/bad.vibes.memes.svg", altSugestoes:"ad.vibes.memes.svg", nomeSugestoes:"bad.vibes.memes", razaoSugestoes:"Segue você"},
    {imgSugestoes:"assets/img/chibirdart.svg", altSugestoes:"chibirdart.svg", nomeSugestoes:"chibirdart", razaoSugestoes:"Segue você"},
    {imgSugestoes:"assets/img/razoesparaacreditar.svg", altSugestoes:"razoesparaacreditar.svg", nomeSugestoes:"razoesparaacreditar", razaoSugestoes:"Novo no Instagram"},
    {imgSugestoes:"assets/img/adorable_animals.svg", altSugestoes:"adorable_animals.svg", nomeSugestoes:"adorable_animals", razaoSugestoes:"Segue você"},
    {imgSugestoes:"assets/img/smallcutecats.svg", altSugestoes:"smallcutecats.svg", nomeSugestoes:"smallcutecats", razaoSugestoes:"Segue você"},

]

function Sugestao(props){
    return(
        <div className="sugestao">
            <div className="usuario">
                <img src={props.imgSugestoes} alt={props.altSugestoes}/>
                <div className="texto">
                    <div className="nome">{props.nomeSugestoes}</div>
                    <div className="razao">{props.razaoSugestoes}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}

export default function Sugestoes(){
    return(
            <div className="sugestoes">
                <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
                </div>

                {listaSugestoes.map(
                (f)=><Sugestao key={f.imgSugestoes} imgSugestoes={f.imgSugestoes} altSugestoes={f.altSugestoes} nomeSugestoes={f.nomeSugestoes} razaoSugestoes={f.razaoSugestoes}/>
                )}

            </div>
    );
}