import "./style.css";
interface GreenBannerProps {
    texto: string;    
}

function GreenBanner(props: GreenBannerProps) {
    return (
        <div className="banner">
            <h2 className="bannertitle">O que você está esperando?</h2>
            <p className="bannertext">{props.texto}</p>
            <a className="bannerbtn" href="/cadastro">Quero fazer parte!</a>
        </div>
    );
}

export default GreenBanner;