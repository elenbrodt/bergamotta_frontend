import Header from "../../components/Header"
import Box from "../../components/Box"
import Link from "../../components/Button"
import Veg from "../../assets/imagesHome/veg.png";
import { P, VegImg, ConnectionDiv, ConnectionBlock } from "./style";

function Home() {
    return (
        <div>
            <Header />
            <Box background="white">
                <ConnectionDiv>
                    <ConnectionBlock>
                        <P>Conectando pessoas, propósitos e experiências gastronômicas</P>
                    </ConnectionBlock>
                    {/* <VegImg src={Veg} alt="comida vegana" /> */}
                </ConnectionDiv>
            </Box>
        </div>
    );
}

export default Home;