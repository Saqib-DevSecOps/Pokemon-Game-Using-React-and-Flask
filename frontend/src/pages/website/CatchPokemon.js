import React, {useState, useEffect} from 'react';
import Base from "../../components/website/Base";
import axios from 'axios';

const CatchPokemon = () => {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        // Function to fetch Pokémon names
        const fetchPokemonNames = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20'); // Adjust limit as needed
                const pokemonList = response.data.results;

                // Fetch detailed information for each Pokémon
                const fetchPokemonDetails = async () => {
                    const detailsPromises = pokemonList.map(pokemon => axios.get(pokemon.url));
                    const detailsResponses = await Promise.all(detailsPromises);
                    const detailedPokemons = detailsResponses.map(res => {
                        const data = res.data;
                        return {
                            pokemon_name: data.name,
                            base_hp: data.stats[0].base_stat,
                            base_attack: data.stats[1].base_stat,
                            base_defense: data.stats[2].base_stat,
                            front_shiny_sprite: data.sprites.front_default,
                            other_sprite: data.sprites.other['official-artwork'].front_default
                        };
                    });
                    setPokemonData(detailedPokemons);
                };

                fetchPokemonDetails();
            } catch (error) {
                console.error('Error fetching Pokémon data:', error);
            }
        };

        fetchPokemonNames();
    }, []);

    return (
        <>
            <Base/>
            <div className="hero-5" id="hero">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="hero-thumb5-1">
                                <img src={`${process.env.PUBLIC_URL}/website/img/pokemon-team.png`} alt="img"/>
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
                                    Enter Random or Pokemon to select it and Select Pokemons from Below
                                </p>
                                <div
                                    className="btn-group custom-anim-left wow"
                                    data-wow-duration="1.2s"
                                    data-wow-delay="0.5s"
                                >
                                    <input type="text" className="form-control"
                                           placeholder="Enter Pokemon Name or type Random"/>

                                    <a href="contact.html" className="th-btn style-border2">
                                      <span className="btn-border">
                                        Catch<i className="fa-solid fa-arrow-right ms-2"/>
                                      </span>
                                    </a>
                                </div>
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
                                        <img src={pokemon.other_sprite} alt="game image"/>
                                    </div>
                                    <div className="game-card-details">
                                        <div className="media-left">
                                            <h3 className="box-title">
                                                {pokemon.pokemon_name.charAt(0).toUpperCase() + pokemon.pokemon_name.slice(1)}
                                            </h3>
                                            <p className="m-0">HP : {pokemon.base_hp}</p>
                                            <p className="m-0">Attack : {pokemon.base_attack}</p>
                                            <p>Defence : {pokemon.base_defense}</p>
                                            <div className="text-center">
                                                <button className="btn btn-success text-center"><i
                                                    className="fa fa-check"></i>&nbsp;Select
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row justify-content-center mt-4 align-content-center">
                        <div className="col-12 text-center">
                            <button className="btn btn-success">Load More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CatchPokemon;
