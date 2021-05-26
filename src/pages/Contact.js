import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Column";
import ContactSection from "../components/ContactSection";

function Contact (){
     return (
        <Container>
             <Row>
                <Col>
                  <ContactSection/>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;