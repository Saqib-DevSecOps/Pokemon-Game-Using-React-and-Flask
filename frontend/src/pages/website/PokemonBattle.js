import React, { useState } from "react";
import Base from "../../components/website/Base";
import axiosInstance from "../../config/Axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PokemonBattle = () => {
    const [opponentName, setOpponentName] = useState("");
    const [pokemons, setPokemons] = useState([]);
    const [enemyPokemons, setEnemyPokemons] = useState([]);
    const [showBattleFields, setShowBattleFields] = useState(false);
    const [attackerName, setAttackerName] = useState("");
    const [defenderName, setDefenderName] = useState("");
    const [battleResult, setBattleResult] = useState(null);

    const handleOpponentSubmit = async () => {
        try {
            const response = await axiosInstance.post('/api/battle', { opponent: opponentName });

            setPokemons(response.data.pokemons);
            setEnemyPokemons(response.data.enemy_pokemons);
            setShowBattleFields(true);
        } catch (error) {
            toast.error('battle not Found. Please try again.');
        }
    };

    const handleBattleStart = async () => {
        // Check if the attacker and defender names exist in the lists
        const attackerExists = pokemons.some(pokemon => pokemon.pokemon_name === attackerName);
        const defenderExists = enemyPokemons.some(pokemon => pokemon.pokemon_name === defenderName);

        if (!attackerExists) {
            toast.error('Your selected Pokémon not found.');
            return;
        }
        if (!defenderExists) {
            toast.error('Opponent Pokémon not found.');
            return;
        }

        try {
            const response = await axiosInstance.post(`/api/battle/${opponentName}/fight`, {
                attacker: attackerName,
                defender: defenderName
            });

            setBattleResult(response.data);
            setPokemons(response.data.pokemons);
            setEnemyPokemons(response.data.enemy_pokemons);
        } catch (error) {
            console.error('Error starting battle:', error);
            toast.error('Error starting battle. Please try again.');
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
                                <img src={`${process.env.PUBLIC_URL}/website/img/pokemon-battle.png`} width="700px" alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-style5">
                                <h1 className="hero-title custom-anim-left wow" data-wow-duration="1.2s" data-wow-delay="0.2s">
                                    Start<span className="text-theme"> Battle</span>
                                </h1>
                                <p className="hero-text custom-anim-left wow" data-wow-duration="1.2s" data-wow-delay="0.4s">
                                    Are you ready with your Pokemons? Head to the battle, or select your Pokemons!
                                </p>
                                {!showBattleFields ? (
                                    <div className="btn-group custom-anim-left wow" data-wow-duration="1.2s" data-wow-delay="0.5s">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Opponent Name or type Random"
                                            value={opponentName}
                                            onChange={(e) => setOpponentName(e.target.value)}
                                        />
                                        <button onClick={handleOpponentSubmit} className="th-btn style-border2">
                                            <span className="btn-border">
                                                Fetch Opponent<i className="fa-solid fa-arrow-right ms-2" />
                                            </span>
                                        </button>
                                    </div>
                                ) : (
                                    <div className="btn-group custom-anim-left wow" data-wow-duration="1.2s" data-wow-delay="0.5s">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Your Pokemon Name"
                                            value={attackerName}
                                            onChange={(e) => setAttackerName(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Opponent Pokemon Name"
                                            value={defenderName}
                                            onChange={(e) => setDefenderName(e.target.value)}
                                        />
                                        <button onClick={handleBattleStart} className="th-btn style-border2">
                                            <span className="btn-border">
                                                Start Battle<i className="fa-solid fa-arrow-right ms-2" />
                                            </span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {battleResult && (
                <div className="battle-result">
                    <h3 className="text-center text-white mt-4">Battle Result</h3>
                    <div className="container">
                        <p>{battleResult.message}</p>
                        <p>Kills: {battleResult.kills}</p>
                        <p>Deaths: {battleResult.deaths}</p>
                    </div>
                </div>
            )}

            {showBattleFields && (
                <>
                    <div className="hero-5 mt-0" id="hero" data-bg-src="assets/img/hero/hero-4-bg.png">
                        <h3 className="text-center text-white mt-4">My Pokemons</h3>
                        <div className="container">
                            <div className="row align-items-center justify-content-center flex-row-reverse">
                                {pokemons.map((pokemon) => (
                                    <div className="col-lg-3" key={pokemon.pokemon_name}>
                                        <div className="game-card style2">
                                            <div className="game-card-img">
                                                <img src={pokemon.front_shiny_sprite} alt="game image" />
                                            </div>
                                            <div className="game-card-details">
                                                <div className="media-left">
                                                    <h3 className="box-title">{pokemon.pokemon_name}</h3>
                                                    <p className="m-0">HP : {pokemon.base_hp}</p>
                                                    <p className="m-0">Attack : {pokemon.base_attack}</p>
                                                    <p>Defence : {pokemon.base_defense}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="hero-5 mt-0" id="hero" data-bg-src="assets/img/hero/hero-4-bg.png">
                        <h3 className="text-center text-white mt-4">Opponent's Pokemons</h3>
                        <div className="container">
                            <div className="row align-items-center justify-content-center flex-row-reverse">
                                {enemyPokemons.map((pokemon) => (
                                    <div className="col-lg-3" key={pokemon.pokemon_name}>
                                        <div className="game-card style2">
                                            <div className="game-card-img">
                                                <img src={pokemon.front_shiny_sprite} alt="game image" />
                                            </div>
                                            <div className="game-card-details">
                                                <div className="media-left">
                                                    <h3 className="box-title">{pokemon.pokemon_name}</h3>
                                                    <p className="m-0">HP : {pokemon.base_hp}</p>
                                                    <p className="m-0">Attack : {pokemon.base_attack}</p>
                                                    <p>Defence : {pokemon.base_defense}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}

            <ToastContainer />
        </>
    );
};

export default PokemonBattle;
