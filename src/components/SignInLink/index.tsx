import { SignInLinkBox, LinkSignIn } from "./style";
type SignInLinkProps = {
  text: string;
  link: string;
  href: string;
};
function SignInLink(props: SignInLinkProps) {
  return (
    <SignInLinkBox>
      <p>{props.text}</p>
      <LinkSignIn to={props.href}>{props.link}</LinkSignIn>
    </SignInLinkBox>
  );
}

export default SignInLink;
