import React from 'react';
import './App.scss';
import { useAppDispatch } from '../store/hooks';
import { fetchWeather } from '../store/slices/weatherSlice';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';

function App() {

  return (
    <Routes>
			<Route path='/' element={<HomePage />} />
		</Routes>
  );
}

export default App;
