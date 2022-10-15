import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Typography } from "../../components/ui/Typography";
import { Store } from "../../contexts/store";

import styles from "./Product.module.css";

export const ProductPage = () => {
	const id = useParams().id;

	const store = useContext(Store);

	if (!store) return null;
	const product = store.find((p) => {
		return p._id === id;
	});
	if (!product) return null;
	return (
		<div className={styles.order}>
      <div className={styles.imageWrapper}>
			  <img src={`/assets/images/${product.image}`} width={300} alt="name" />
      </div>
			<div className={styles.content}>
				<Typography variant="h3">{product.name}</Typography>
				<Typography variant="h5" type="bold">{product.price} р.</Typography>
				<section className={styles.description}>
					<Typography variant="p" color="secondary">{product.description}</Typography>
				</section>
				<Link className={styles.button} to={`/order/${product._id}`}>
					<Button>Заказать</Button>
				</Link>
			</div>
		</div>
	);
};
