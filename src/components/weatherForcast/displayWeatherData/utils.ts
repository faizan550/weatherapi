/** @format */

import { number } from 'prop-types';

export const getWeatherIcon = (id: number) => {
	if (id >= 200 && id < 300) {
		return 'http://openweathermap.org/img/wn/11d@2x.png';
	} else if (id >= 300 && id < 500) {
		return 'http://openweathermap.org/img/wn/09d@2x.png';
	} else if (id >= 500 && id < 600) {
		return 'http://openweathermap.org/img/wn/10d@2x.png';
	} else if (id >= 600 && id <= 700) {
		return 'http://openweathermap.org/img/wn/13d@2x.png';
	} else if (id > 700 && id < 800) {
		return 'http://openweathermap.org/img/wn/50d@2x.png';
	} else if (id === 800) {
		return 'http://openweathermap.org/img/wn/01d@2x.png';
	} else if (id > 800) {
		return 'http://openweathermap.org/img/wn/04d@2x.png';
	}
};

export const getWeatherDescription = (id: number) => {
	if (id >= 200 && id < 300) {
		return 'ThunderStom';
	} else if (id >= 300 && id < 500) {
		return 'Shower Rain';
	} else if (id >= 500 && id < 600) {
		return 'Rain';
	} else if (id >= 600 && id <= 700) {
		return 'Snow';
	} else if (id > 700 && id < 800) {
		return 'Mist';
	} else if (id === 800) {
		return 'Clear Sky';
	} else if (id > 800) {
		return 'Broken Clouds';
	}
};

export const celtofahrenhite = (temp: number) => {
    return ((temp * 9/5) + 32)
}
