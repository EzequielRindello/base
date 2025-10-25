import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Container>
      <br />
      <hr />
      <h1>404 - Page Not Found</h1>
      <br />
      <hr />
      <button onClick={handleGoBack}>Go to Landing Page</button>
    </Container>
  );
}

export default NotFound;