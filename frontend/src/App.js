// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/website/Home';
import CatchPokemon from './pages/website/CatchPokemon';
import MyPokemon from './pages/website/MyPokemon';
import PokemonBattle from './pages/website/PokemonBattle';
import Signup from './pages/website/Signup';
import Login from './pages/website/Login';
import store from "./config/Store";
import PrivateRoute from "./config/PrivateRoute";
import Logout from "./pages/website/Logout";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/catch-pokemon' element={<PrivateRoute><CatchPokemon /></PrivateRoute>} />
                    <Route path='/my-pokemon' element={<PrivateRoute><MyPokemon /></PrivateRoute>} />
                    <Route path='/pokemon-battle' element={<PrivateRoute><PokemonBattle /></PrivateRoute>} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/logout' element={<Logout />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
