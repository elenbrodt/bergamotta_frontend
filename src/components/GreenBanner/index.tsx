import { Link } from "react-router-dom";
import "./style.css";

interface GreenBannerProps {
  title: string;
  texto?: string;
  btn_text: string;
  id?: string;
  href: string;
}

function GreenBanner(props: GreenBannerProps) {
  return (
    <div className='banner' id={props.id}>
      <h2 className='bannertitle'>{props.title}</h2>
      <p className='bannertext'>{props.texto}</p>
      <Link className='bannerbtn' to={props.href}>
        {props.btn_text}
      </Link>
    </div>
  );
}

export default GreenBanner;
