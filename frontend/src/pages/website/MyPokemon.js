import React, { useState, useEffect } from 'react';
import Base from "../../components/website/Base";
import axiosInstance from "../../config/Axios";
import {Link} from "react-router-dom";

const MyPokemon = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                // Fetch Pokémon data from the API
                const response = await axiosInstance.get('/api/my/pokemon');
                setPokemonData(response.data.pokemon);
            } catch (error) {
                console.error('Error fetching Pokémon data:', error);
                setError('Error fetching Pokémon data');
            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();
    }, []);

    const handleDelete = async (pokemonId) => {
        try {
            // Call delete API
            await axiosInstance.post(`/api/pokemon/delete/${pokemonId}`);
            // Remove deleted Pokémon from state
            setPokemonData(pokemonData.filter(pokemon => pokemon.id !== pokemonId));
        } catch (error) {
            console.error('Error deleting Pokémon:', error);
            setError('Error deleting Pokémon');
        }
    };

    return (
        <>
            <Base />
            {/* <Banner /> */}
            <div className="hero-5" id="hero">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="hero-thumb5-1">
                                <img
                                    src={`${process.env.PUBLIC_URL}/website/img/my-poken.png`}
                                    width="600px"
                                    alt="img"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-style5">
                                <h1
                                    className="hero-title custom-anim-left wow"
                                    data-wow-duration="1.2s"
                                    data-wow-delay="0.2s"
                                >
                                    My Selected<span className="text-theme"> Pokemons</span>
                                </h1>
                                <p
                                    className="hero-text custom-anim-left wow"
                                    data-wow-duration="1.2s"
                                    data-wow-delay="0.4s"
                                >
                                    Are you ready with your Pokemons? Head to the battle, Or and select your Pokemons!
                                </p>
                                <div
                                    className="btn-group custom-anim-left wow"
                                    data-wow-duration="1.2s"
                                    data-wow-delay="0.5s"
                                >
                                    <Link to="/catch-pokemon" className="th-btn style-border2">
                                        <span className="btn-border">
                                            Catch<i className="fa-solid fa-arrow-right ms-2" />
                                        </span>
                                    </Link>
                                    <Link to="/pokemon-battle" className="th-btn style-border2">
                                        <span className="btn-border">
                                            Battle<i className="fa-solid fa-arrow-right ms-2" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-5 mt-0" id="hero" data-bg-src="assets/img/hero/hero-4-bg.png">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        {loading && <p>Loading...</p>}
                        {error && <p className="text-danger">{error}</p>}
                        {!loading && !error && pokemonData.map((pokemon) => (
                            <div className="col-lg-3" key={pokemon.id}>
                                <div className="game-card style2">
                                    <div className="game-card-img">
                                        <img src={pokemon.front_shiny_sprite} alt="game image" />
                                    </div>
                                    <div className="game-card-details">
                                        <div className="media-left">
                                            <h3 className="box-title">
                                                {pokemon.pokemon_name.charAt(0).toUpperCase() + pokemon.pokemon_name.slice(1)}
                                            </h3>
                                            <p className="m-0">HP: {pokemon.base_hp}</p>
                                            <p className="m-0">Attack: {pokemon.base_attack}</p>
                                            <p>Defence: {pokemon.base_defense}</p>
                                            <div className="text-center">
                                                <button
                                                    className="btn btn-danger text-center"
                                                    onClick={() => handleDelete(pokemon.id)}
                                                >
                                                    <i className="fa fa-trash"></i>&nbsp;Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyPokemon;
