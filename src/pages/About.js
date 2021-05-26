import Container from "../components/Container";
import Row from "../components/Row";
import Column from "../components/Column";
import AboutMe from "../components/AboutMe";

function About(){
    
     return (
        <Container>
             <Row>
                <Column>
                   <AboutMe/>
                </Column>
            </Row>
        </Container>
    );
}

export default About;