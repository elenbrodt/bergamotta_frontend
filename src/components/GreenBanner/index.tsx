import "./style.css";
interface GreenBannerProps {
    texto: string;    
}

function GreenBanner(props: GreenBannerProps) {
    return (
        <div className="banner">
            <h2 className="bannertitle">O que você está esperando?</h2>
            <p className="bannertext">{props.texto}</p>
        <button className="bannerbtn">
            <a href="/cadastro">Quero fazer parte!</a>
        </button>
        </div>
    );
}

export default GreenBanner;