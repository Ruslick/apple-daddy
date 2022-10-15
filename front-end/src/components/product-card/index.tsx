import React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../pages";
import { Button } from "../ui/button";
import { Typography } from "../ui/Typography";
import styles from "./ProductCard.module.scss";

export const ProductCard: React.FC<{ product: IProduct }> = ({ product }) => {
	const { image, name, _id, price } = product;
	return (
		<li className={styles.wrapper}>
			<img
				className={styles.image}
				src={"/assets/images/" + image}
				width={100}
				alt="name"
			/>

			<div className={styles.content}>
				<Typography variant="h3">{price.toString()} р.</Typography>
				<Typography color="secondary">{name}</Typography>
			</div>

			<div className={styles.actions}>
				<Link to={`/order/${_id}`}>
					<Button>Заказать</Button>
				</Link>
				<Link to={`/product/${_id}`}>
					<Button variant="link">Подробнее...</Button>
				</Link>
			</div>
		</li>
	);
};
