import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import DayWeather from "../index";

const weatherData = require('./api_test.json');
const dayNumber = 3;

afterEach(cleanup);

describe('Day Weather component', () => {
    it('renders', () =>{
        render(<DayWeather 
                weatherData = {weatherData}
                dayNumber = {dayNumber}
                />);
    });

    it('matches snapshot DOM node structure', () => {
        const {asFragment} = render(<DayWeather 
                                    weatherData = {weatherData}
                                    dayNumber = {dayNumber}
                                    />);
        expect (asFragment()).toMatchSnapshot();
    })

    it('day of the week is Friday using api_test.json', () => {
        const { getByTestId } = render(<DayWeather 
                                    weatherData = {weatherData}
                                    dayNumber = {dayNumber}
                                    />);
        expect (getByTestId('dayOfWeek')).toHaveTextContent('Fri');
    })

    it('day of the week is Friday and icon and temps load according data from api_test.json', () => {
        const { getByTestId } = render(<DayWeather 
                                    weatherData = {weatherData}
                                    dayNumber = {dayNumber}
                                    />);
        expect (getByTestId('dayOfWeek')).toHaveTextContent('Fri');
        expect (getByTestId('weatherImage')).toHaveProperty('src','http://openweathermap.org/img/wn/04d@2x.png');
        expect (getByTestId('weatherImage')).toHaveProperty('alt','overcast clouds');
        expect (getByTestId('maxTemp')).toHaveTextContent('85° 68°');
        expect (getByTestId('minTemp')).toHaveTextContent('68°');
    })
})