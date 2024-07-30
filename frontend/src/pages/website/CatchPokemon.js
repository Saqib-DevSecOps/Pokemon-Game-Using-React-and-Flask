import React, { useState } from 'react';
import Base from "../../components/website/Base";
import axiosInstance from "../../config/Axios";

const CatchPokemon = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonName, setPokemonName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        setPokemonName(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Make a POST request to catch a Pokémon
            const response = await axiosInstance.post('/api/pokemon', { pokemon_name: pokemonName });
            const pokemon = response.data;
            setPokemonData(prevData => [...prevData, pokemon]);
            setPokemonName('');
        } catch (error) {
            console.log(error)
            setError(error.response ? error.response.data.error : 'Error catching Pokémon');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Base />
            <div className="hero-5" id="hero">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="hero-thumb5-1">
                                <img src={`${process.env.PUBLIC_URL}/website/img/pokemon-team.png`} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-style5">
                                <h1
                                    className="hero-title custom-anim-left wow"
                                    data-wow-duration="1.2s"
                                    data-wow-delay="0.2s"
                                >
                                    Pokemon<span className="text-theme"> Catcher</span>
                                </h1>
                                <p
                                    className="hero-text custom-anim-left wow"
                                    data-wow-duration="1.2s"
                                    data-wow-delay="0.4s"
                                >
                                    Enter Random or Pokemon to select it and Select Pokemons from The List Below
                                </p>
                                <form onSubmit={handleFormSubmit} className="btn-group custom-anim-left wow"
                                    data-wow-duration="1.2s" data-wow-delay="0.5s">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Pokemon Name or type Random"
                                        value={pokemonName}
                                        onChange={handleInputChange}
                                    />
                                    <button type="submit" className="th-btn style-border2" disabled={loading}>
                                        <span className="btn-border">
                                            Catch<i className="fa-solid fa-arrow-right ms-2" />
                                        </span>
                                    </button>
                                </form>
                                {error && <p className="text-danger mt-2">{error}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-5 mt-0" id="hero" data-bg-src="assets/img/hero/hero-4-bg.png">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        {pokemonData.map((pokemon, index) => (
                            <div className="col-lg-3" key={index}>
                                <div className="game-card style2">
                                    <div className="game-card-img">
                                        <img src={pokemon.other_sprite} alt="game image" />
                                    </div>
                                    <div className="game-card-details">
                                        <div className="media-left">
                                            <h3 className="box-title">
                                                {pokemon.pokemon_name.charAt(0).toUpperCase() + pokemon.pokemon_name.slice(1)}
                                            </h3>
                                            <p className="m-0">HP: {pokemon.base_hp}</p>
                                            <p className="m-0">Attack: {pokemon.base_attack}</p>
                                            <p>Defence: {pokemon.base_defense}</p>
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
};

export default CatchPokemon;
