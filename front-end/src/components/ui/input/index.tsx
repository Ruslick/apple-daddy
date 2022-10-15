import React from "react";
import { Typography } from "../Typography";

import styles from "./Input.module.scss";

interface IProps {
	type: "tel" | "text";
	caption: string;
}

export const Input: React.FC<IProps> = ({ type, caption }) => {


	return (
		<div className={styles.wrapper}>
			<Typography variant="p">{caption}</Typography>
			<input
				className={styles.input}
				type={type}
				required
			/>
		</div>
	);
};
