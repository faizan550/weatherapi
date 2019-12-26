/** @format */

import React, { useState } from 'react';
import {
	getWeatherIcon,
	getWeatherDescription,
	celtofahrenhite
} from './utils';
import moment from 'moment';
import './displayWeatherData.css';
import { weatherobject, listOfWeatherObject } from '../../../types/types';

const DisplayWeatherData = (props: any) => {
	const { averageDataForDays, location } = props;
	const [initialData, setInitialData] = useState<weatherobject>(
		averageDataForDays[0]
	);
	const [convertedTemp, setconvertedTemp] = useState(initialData.temp);

	return (
		<div>
			{/*General information of selected  weather day */}
			<div className='general-info-container'>
				<p>
					{location.name}, {location.country}
				</p>
				<p>{moment(initialData.date).format('dddd')}</p>
				<p>{getWeatherDescription(initialData.id)}</p>
			</div>
			{/* show selected weather day setails */}
			<div className='weather-display-container'>
				<div style={{ display: 'flex' }}>
					<div>
						<img
							className='weather-icon'
							src={getWeatherIcon(initialData.id)}></img>
					</div>
					<h1 style={{ fontSize: '90px', margin: '0px' }}>
						{Math.round(convertedTemp)}
					</h1>
					<h1 onClick={() => setconvertedTemp(initialData.temp)}>
						{' '}
						&nbsp;C&deg;
					</h1>
					<h1>|</h1>
					<h1
						onClick={() => setconvertedTemp(celtofahrenhite(initialData.temp))}>
						{' '}
						&nbsp;F&deg;
					</h1>
				</div>
				<div>
					<p>Pressure:&nbsp;{Math.round(initialData.pressure)}hPa</p>
					<p>Humidity:&nbsp;{Math.round(initialData.humidity)}%</p>
					<p>Wind Speed:&nbsp;{Math.round(initialData.speed)}m/s</p>
				</div>
			</div>

			{/* show weather for 5 days  */}

			<div className='weather-display-container'>
				{averageDataForDays.map((item: any, key: number) => {
					return [
						<div
							tabIndex={1}
							style={{ width: '150px' }}
							onClick={() => {
								setInitialData(averageDataForDays[key]);
								setconvertedTemp(initialData.temp);
							}}>
							<p className='weather-container'>
								{moment(item.date).format('dddd')}
							</p>
							<img src={getWeatherIcon(item.id)}></img>
							<p className='weather-container'>
								{Math.round(item.temp_max)}&deg;&nbsp;
								{Math.round(item.temp_min)} &deg;&nbsp;
							</p>
						</div>
					];
				})}
			</div>
		</div>
	);
};

export default DisplayWeatherData;
