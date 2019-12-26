/** @format */

import React from 'react';
import Header from './components/weatherForcast/header/header';
import SearchForm from './components/weatherForcast/searchForm/searchForm';
import { useState } from 'react';
import { getRequiredData } from './utils/getRequiredData';
import { getAverageRequiredDataForEachDay } from './utils/getAverageRequiredData';
import DisplayWeatherData from './components/weatherForcast/displayWeatherData/displayWeatherData';
import './App.css';
import { listOfWeatherObject, locInfo } from './types/types';

const API_KEY: string = 'c73aa228bfba692462f96e89080aa39a';

const App: React.FC = () => {
	const [data, setData] = useState<any>({ cod: '0' });

	const getWeatherData = async (e: any) => {
		e.preventDefault();
		if (e.target.city) {
			setData(
				await fetch(
					`http://api.openweathermap.org/data/2.5/forecast?q=${e.target.city.value}&units=metric&appid=${API_KEY}`
				).then((response) => response.json())
      );
		} else if (e.target.zipcode) {
			setData(
				await fetch(
					`http://api.openweathermap.org/data/2.5/forecast?id=${e.target.zipcode.value}&units=metric&appid=${API_KEY}`
				).then((response) => response.json())
			);
		} else if (e.target.longitude && e.target.latitude) {
			setData(
				await fetch(
					`http://api.openweathermap.org/data/2.5/forecast?lat=${e.target.latitude.value}&lon=${e.target.longitude.value}&units=metric&appid=${API_KEY}`
				).then((response) => response.json())
			);
    }
	};

	const getAllRequiredData = (data: any): any => {
		const {
			list,
			city: { name, country }
		} = data;
		const formattedData: listOfWeatherObject = getRequiredData(list);
		const loc: locInfo = { name, country };
		return { formattedData, loc };
	};

	return (
		<div>
			<Header />
			<div className='align-form-center'>
				<SearchForm getWeatherData={getWeatherData} />
				{data.cod === '200' && (
					<DisplayWeatherData
						averageDataForDays={getAverageRequiredDataForEachDay(
							getAllRequiredData(data).formattedData
						)}
						location={getAllRequiredData(data).loc}
					/>
				)}
				{data.cod === '404' && (
					<h1 style={{ textAlign: 'center' }}>Data Not Found</h1>
				)}
			</div>
		</div>
	);
}; 
export default App;