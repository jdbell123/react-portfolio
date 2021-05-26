import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Column";
import PortfolioSection from "../components/PortfolioSection";

function Portfolio() {

    return (
        <Container>
            <Row>
                <Col>
                    <PortfolioSection />
                </Col>
            </Row>
        </Container>
    );
}

export default Portfolio;