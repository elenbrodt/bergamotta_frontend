import { Title } from "./styles";

interface TitleLoginProps {
  title: string;
}

function TitleLogin(props: TitleLoginProps) {
  return <Title>{props.title}</Title>;
}
export default TitleLogin;
