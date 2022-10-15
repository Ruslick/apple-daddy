import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout";
import { Store } from "../contexts/store";
import { Home } from "./home";
import { OrderPage } from "./order";
import { ProductPage } from "./product";

export interface IProduct {
	name: string;
	price: number;
	image: string;
	_id: string;
  description: string;
}

const data = [
	{
		_id: "1",
    description: 'Новые наушники AirPods от Apple с футляром беспроводной зарядки позволят заряжаться от устройств Qi либо стандартного коннектора Lightning. Синхронизируется с iPhone, Apple Watch, iPad или Mac, поддерживает Siri. Футляр обеспечивает несколько циклов зарядки, благодаря чему наушники могут работать до 24 часов.',
		name: "Apple AirPods with Charging Case",
		price: 421,
		image: "airpods.jpeg",
	},
	{
		_id: "2",
    description: 'Новые наушники AirPods от Apple с футляром беспроводной зарядки позволят заряжаться от устройств Qi либо стандартного коннектора Lightning. Синхронизируется с iPhone, Apple Watch, iPad или Mac, поддерживает Siri. Футляр обеспечивает несколько циклов зарядки, благодаря чему наушники могут работать до 24 часов.',

		name: "Apple AirPods Pro with MagSafe",
		price: 512,
		image: "airpods.jpeg",
	},
	{
		_id: "3",
    description: 'Новые наушники AirPods от Apple с футляром беспроводной зарядки позволят заряжаться от устройств Qi либо стандартного коннектора Lightning. Синхронизируется с iPhone, Apple Watch, iPad или Mac, поддерживает Siri. Футляр обеспечивает несколько циклов зарядки, благодаря чему наушники могут работать до 24 часов.',

		name: "Apple AirPods 2, с зарядным кейсом",
		price: 123,
		image: "airpods.jpeg",
	},
	{
		_id: "4",
    description: 'Новые наушники AirPods от Apple с футляром беспроводной зарядки позволят заряжаться от устройств Qi либо стандартного коннектора Lightning. Синхронизируется с iPhone, Apple Watch, iPad или Mac, поддерживает Siri. Футляр обеспечивает несколько циклов зарядки, благодаря чему наушники могут работать до 24 часов.',
    
		name: "Apple AirPods 3-го поколения",
		price: 21,
		image: "airpods.jpeg",
	},
];

export const Pages = () => {
	const [store, setStore] = useState<null | IProduct[]>(null);
	useEffect(() => {
		setTimeout(() => {
			setStore(data);
		}, 1000);
	}, []);
	if (!store) return null;

	return (
		<BrowserRouter>
			<Store.Provider value={store}>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="product/:id" element={<ProductPage />} />
						<Route path="order/:id" element={<OrderPage />} />
					</Route>
				</Routes>
			</Store.Provider>
		</BrowserRouter>
	);
};
