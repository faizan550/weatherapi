/** @format */
import { listOfWeatherObject } from '../types/types';

export const getDataForFiveDays = (item: any) => {
	const maxDate = `${new Date().getDate() + 4}`;
	const minDate = `${new Date().getDate() + 0}`;
	const temp1 = `${new Date(item.date)}`;
	if (temp1.slice(8, 10) <= maxDate && temp1.slice(8, 10) >= minDate) {
		return item;
	}
};

export const getRequiredData = (list: any): listOfWeatherObject => {
	return list
		.map((item: any) => {
			const {
				main: { humidity, temp, temp_max, temp_min, pressure },
				wind: { speed },
				weather: {
					0: { description, id }
				},
				dt_txt
			} = item;
			const date = dt_txt.slice(0, -9);
			return {
				humidity,
				temp,
				temp_max,
				temp_min,
				speed,
				pressure,
				description,
				date,
				id
			};
		})
		.filter((item: any) => getDataForFiveDays(item));
};
