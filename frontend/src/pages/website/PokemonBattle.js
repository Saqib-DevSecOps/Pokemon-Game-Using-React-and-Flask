import Base from "../../components/website/Base";
import PokemonCard from "../../components/website/components/PokemonCard";

const PokemonBattle = () => {
    return (
        <>
            <Base/>
            {/*<Banner/>*/}


            <div className=" hero-5 " id="hero">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="hero-thumb5-1">
                                <img src={`${process.env.PUBLIC_URL}/website/img/pokemon-battle.png`} width="700px"
                                     alt="img"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-style5">
                                <h1
                                    className="hero-title custom-anim-left wow"
                                    data-wow-duration="1.2s"
                                    data-wow-delay="0.2s"
                                >
                                    Start<span className="text-theme"> Battle</span>
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
                                    <input type="text" className="form-control"
                                           placeholder="Enter Opponent Name or type Random"/>
                                    <input type="text" className="form-control"
                                           placeholder="Enter Your Pokemon Name"/>
                                    <input type="text" className="form-control"
                                           placeholder="Enter Opponent Pokemon Name"/>

                                    <a href="contact.html" className="th-btn style-border2">
                                      <span className="btn-border">
                                        Battle<i className="fa-solid fa-arrow-right ms-2"/>
                                      </span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" hero-5 mt-0 " id="hero" data-bg-src="assets/img/hero/hero-4-bg.png">
                <h3 className="text-center text-white mt-4">My Pokemons</h3>
                <div className="container">
                    <div className="row align-items-center  justify-content-center flex-row-reverse">
                        <div className="col-lg-2">
                            <div className="game-card style2">
                                <div className="game-card-img">
                                    <img src={`${process.env.PUBLIC_URL}/website/img/my-poken.png`} alt="game image"/>
                                </div>
                                <div className="game-card-details">
                                    <div className="media-left">
                                        <h3 className="box-title">
                                             Killer
                                        </h3>
                                        <p className="m-0">HP : 12312</p>
                                        <p className="m-0">Attack : 213 </p>
                                        <p>Defence : 12312</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="game-card style2">
                                <div className="game-card-img">
                                    <img src={`${process.env.PUBLIC_URL}/website/img/my-poken.png`} alt="game image"/>
                                </div>
                                <div className="game-card-details">
                                    <div className="media-left">
                                        <h3 className="box-title">
                                             Killer
                                        </h3>
                                        <p className="m-0">HP : 12312</p>
                                        <p className="m-0">Attack : 213 </p>
                                        <p>Defence : 12312</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="game-card style2">
                                <div className="game-card-img">
                                    <img src={`${process.env.PUBLIC_URL}/website/img/my-poken.png`} alt="game image"/>
                                </div>
                                <div className="game-card-details">
                                    <div className="media-left">
                                        <h3 className="box-title">
                                             Killer
                                        </h3>
                                        <p className="m-0">HP : 12312</p>
                                        <p className="m-0">Attack : 213 </p>
                                        <p>Defence : 12312</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="game-card style2">
                                <div className="game-card-img">
                                    <img src={`${process.env.PUBLIC_URL}/website/img/my-poken.png`} alt="game image"/>
                                </div>
                                <div className="game-card-details">
                                    <div className="media-left">
                                        <h3 className="box-title">
                                             Killer
                                        </h3>
                                        <p className="m-0">HP : 12312</p>
                                        <p className="m-0">Attack : 213 </p>
                                        <p>Defence : 12312</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="game-card style2">
                                <div className="game-card-img">
                                    <img src={`${process.env.PUBLIC_URL}/website/img/my-poken.png`} alt="game image"/>
                                </div>
                                <div className="game-card-details">
                                    <div className="media-left">
                                        <h3 className="box-title">
                                             Killer
                                        </h3>
                                        <p className="m-0">HP : 12312</p>
                                        <p className="m-0">Attack : 213 </p>
                                        <p>Defence : 12312</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className=" hero-5 mt-0 " id="hero" data-bg-src="assets/img/hero/hero-4-bg.png">
                <h3 className="text-center text-white mt-4">Opponent's Pokemons</h3>
                <div className="container">
                    <div className="row align-items-center  justify-content-center flex-row-reverse">
                        <div className="col-lg-2">
                            <div className="game-card style2">
                                <div className="game-card-img">
                                    <img src={`${process.env.PUBLIC_URL}/website/img/my-poken.png`} alt="game image"/>
                                </div>
                                <div className="game-card-details">
                                    <div className="media-left">
                                        <h3 className="box-title">
                                             Killer
                                        </h3>
                                        <p className="m-0">HP : 12312</p>
                                        <p className="m-0">Attack : 213 </p>
                                        <p>Defence : 12312</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="game-card style2">
                                <div className="game-card-img">
                                    <img src={`${process.env.PUBLIC_URL}/website/img/my-poken.png`} alt="game image"/>
                                </div>
                                <div className="game-card-details">
                                    <div className="media-left">
                                        <h3 className="box-title">
                                             Killer
                                        </h3>
                                        <p className="m-0">HP : 12312</p>
                                        <p className="m-0">Attack : 213 </p>
                                        <p>Defence : 12312</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="game-card style2">
                                <div className="game-card-img">
                                    <img src={`${process.env.PUBLIC_URL}/website/img/my-poken.png`} alt="game image"/>
                                </div>
                                <div className="game-card-details">
                                    <div className="media-left">
                                        <h3 className="box-title">
                                             Killer
                                        </h3>
                                        <p className="m-0">HP : 12312</p>
                                        <p className="m-0">Attack : 213 </p>
                                        <p>Defence : 12312</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="game-card style2">
                                <div className="game-card-img">
                                    <img src={`${process.env.PUBLIC_URL}/website/img/my-poken.png`} alt="game image"/>
                                </div>
                                <div className="game-card-details">
                                    <div className="media-left">
                                        <h3 className="box-title">
                                             Killer
                                        </h3>
                                        <p className="m-0">HP : 12312</p>
                                        <p className="m-0">Attack : 213 </p>
                                        <p>Defence : 12312</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="game-card style2">
                                <div className="game-card-img">
                                    <img src={`${process.env.PUBLIC_URL}/website/img/my-poken.png`} alt="game image"/>
                                </div>
                                <div className="game-card-details">
                                    <div className="media-left">
                                        <h3 className="box-title">
                                             Killer
                                        </h3>
                                        <p className="m-0">HP : 12312</p>
                                        <p className="m-0">Attack : 213 </p>
                                        <p>Defence : 12312</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}
export default PokemonBattle