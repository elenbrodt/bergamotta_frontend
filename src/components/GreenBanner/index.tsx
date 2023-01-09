import "./style.css";
interface GreenBannerProps {
    title: string;
    texto: string;    
    btn_text: string;
    id?:string;
}

function GreenBanner(props: GreenBannerProps) {
    return (
        <div className="banner" id={props.id}>
            <h2 className="bannertitle">{props.title}</h2>
            <p className="bannertext">{props.texto}</p>
            <a className="bannerbtn" href="/cadastro">{props.btn_text}</a>
        </div>
    );
}

export default GreenBanner;