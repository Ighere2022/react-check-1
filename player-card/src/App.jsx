import Product_name from "./components/Product_name";
import Productprice from "./components/price";
import Description from "./components/Description";
import Image from "./components/Image";
import { Boots } from "./Product";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <Card style={{ width: "18rem" }}>
        <Image image={Boots.Image} />
        <Card.Body>
          <Product_name brand={Boots.ProductName} />
          <Productprice price={Boots.Price} />
          <Description color={Boots.Description} />
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
      <p>Hello {userName === "" ? "there!" : userName}</p>
      {userName !== "" && (
        <img
          src="https://i.pinimg.com/736x/15/35/4c/15354ca8b8cf3712622f2de21997b96c.jpg"
          alt="hdfdfd"
          style={{ width: "150px" }}
        />
      )}
    </div>
  );
}

export default App;
