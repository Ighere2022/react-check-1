import Product_name from "./components/Product_name";
import Productprice from "./components/price";
import Description from "./components/Description";
import Image from "./components/Image";
import { Boots } from "./Product";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Image image={Boots.Image} />
        <Card.Body>
          <Product_name brand={Boots.ProductName} />
          <Productprice price={Boots.Price} />
          <Description color={Boots.Description} />
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
