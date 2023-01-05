import Box from "../../components/Box";
import Header from "../../components/Header";
import { Title } from './styles';


function About() {
    return (
        <div>
            <Header />
            <Box background="green">
                <p>test</p>
            </Box>
            <Title>Te ajudamos a encontrar<br></br>
            experiencias gastronômicas incríveis</Title>
        </div>
    );
}

export default About;