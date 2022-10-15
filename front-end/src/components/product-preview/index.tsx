import React from "react";
import { IProduct } from "../../pages";
import { Typography } from "../ui/Typography";

import styles from "./ProductPreview.module.scss";

export const ProductPreview: React.FC<{ product: IProduct }> = ({
	product,
}) => {
	return (
		<div className={styles.product}>
			<Typography type="bold">Ваш заказ</Typography>
			<Typography>{product.name}</Typography>
			<img
				src={`/assets/images/${product.image}`}
				width={40}
				alt={product.name}
			/>
			<Typography variant="h3">{product.price} р.</Typography>
		</div>
	);
};
