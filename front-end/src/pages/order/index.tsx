import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductPreview } from "../../components/product-preview";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Typography } from "../../components/ui/Typography";
import { Store } from "../../contexts/store";

import styles from "./Order.module.scss";

export const OrderPage = () => {
	const id = useParams().id;

	const store = useContext(Store);

	if (!store) return null;
	const product = store.find((p) => {
		return p._id === id;
	});
	if (!product) return null;

	return (
		<form action="" className={styles.form}>
			<Typography variant="h5">Оформление заказа</Typography>
      <ProductPreview product={product}/>


			<div className={styles.inputs}>
				<Input type="text" caption="Ваше имя" />

				<Input type="tel" caption="Номер телефона" />
			</div>

			<Button>Отправить</Button>
		</form>
	);
};
