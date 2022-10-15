import React from "react";
import styles from "./Typography.module.css";

interface IProps {
	children: string | any;
	variant?: "p" | "h5" | "h3";
  type?: 'bold' | "italic";
  color?: "primaty" | "secondary" | "caption";
}

export const Typography: React.FC<IProps> = ({ children, variant = "p", type = 'none' , color = 'inherit'}) => {
	return <p className={`${styles[variant]} ${styles[type]} ${styles[color]}`}>{children}</p>;
};
