import { Container, Row } from "react-bootstrap";
import Header from "./component/header";
import Banner from "./component/banner";
import Footer from "./component/footer";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <Banner />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
