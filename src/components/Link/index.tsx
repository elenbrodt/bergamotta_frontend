import "./style.css";
interface LinkProps {
    texto: string;
    redirect: string;
}

function Link(props: LinkProps) {
    return (
        <button>
            <a href={props.redirect}>{props.texto}</a>
        </button>
    );
}

export default Link;