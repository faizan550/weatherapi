/** @format */

import React from 'react';
import { render } from '@testing-library/react';
import '../header/header.css'

const Header = () => {
	return (
		<div className = "weatherforecast-header">
			<p className = "weatherforecast-header-p">WEATHER FORECAST (5 DAYS)</p>
		</div>
	);
};

export default Header;
