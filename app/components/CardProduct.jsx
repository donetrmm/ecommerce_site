import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import styles from "./css/cardproduct.module.css";
import { useCart } from "./CartContext";

export default function CardProduct(props) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", product: props.data });
  };

  return (
    <div className={styles.container}>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt={props.data.name} src={props.data.image} />
        <CardBody>
          <CardTitle tag="h5">{props.data.name}</CardTitle>
          <CardText>${props.data.price}</CardText>
          <Button color="dark" onClick={addToCart}>
            Agregar al carrito
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
