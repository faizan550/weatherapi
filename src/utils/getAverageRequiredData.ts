/** @format */
import { uniqBy } from 'lodash';
import { weatherobject, listOfWeatherObject } from '../types/types';

export const getAverageRequiredDataForEachDay = (list: any) => {
	const data: any = list;
	const getUniqueDates = uniqBy(data, 'date').map((item: any) => item.date);

	return getUniqueDates.map((date: string) => {
		const weatherDataForCurrentDate = data.filter(
			(item: weatherobject) => item.date === date
		);
		return weatherDataForCurrentDate.reduce(
			(temp: weatherobject, cur: weatherobject) => {
				temp.date = cur.date;
				temp.temp += cur.temp / weatherDataForCurrentDate.length;
				temp.temp_max += cur.temp_max / weatherDataForCurrentDate.length;
				temp.temp_min += cur.temp_min / weatherDataForCurrentDate.length;
				temp.speed += cur.speed / weatherDataForCurrentDate.length;
				temp.pressure += cur.pressure / weatherDataForCurrentDate.length;
				temp.humidity += cur.humidity / weatherDataForCurrentDate.length;
				temp.id += cur.id / weatherDataForCurrentDate.length;
				return temp;
			},
			{
				i: 0,
				humidity: 0,
				speed: 0,
				temp_max: 0,
				id: 0,
				date: '',
				temp: 0,
				temp_min: 0,
				pressure: 0
			}
		);
	});
};
