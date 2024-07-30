import Base from "../../components/website/Base";
import PokemonCard from "../../components/website/components/PokemonCard";

const Home = () => {
    return (
        <>
            <Base/>
            {/*<Banner/>*/}
            <div className=" hero-5 " id="hero">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="hero-thumb5-1">
                                <img src={`${process.env.PUBLIC_URL}/website/img/my-poken.png`} width="600px"
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

                                    <a href="contact.html" className="th-btn style-border2">
                                      <span className="btn-border">
                                        Catch<i className="fa-solid fa-arrow-right ms-2"/>
                                      </span>
                                    </a>
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
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-3">
                            <div className="game-card style2">
                                <div className="game-card-img">
                                    <img src={`${process.env.PUBLIC_URL}/website/img/my-poken.png`} alt="game image"/>
                                </div>
                                <div className="game-card-details">
                                    <div className="media-left">
                                        <h3 className="box-title">
                                            The Hunter Killer
                                        </h3>
                                        <p className="m-0">HP : 12312</p>
                                        <p className="m-0">Attack : 213 </p>
                                        <p>Defence : 12312</p>
                                        <div className="text-center">
                                            <button className="btn btn-danger text-center"><i
                                                className="fa fa-trash"></i>&nbsp;Delete
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="game-card style2">
                                <div className="game-card-img">
                                    <img src={`${process.env.PUBLIC_URL}/website/img/my-poken.png`} alt="game image"/>
                                </div>
                                <div className="game-card-details">
                                    <div className="media-left">
                                        <h3 className="box-title">
                                            The Hunter Killer
                                        </h3>
                                        <p className="m-0">HP : 12312</p>
                                        <p className="m-0">Attack : 213 </p>
                                        <p>Defence : 12312</p>
                                        <div className="text-center">
                                            <button className="btn btn-danger text-center"><i
                                                className="fa fa-trash"></i>&nbsp;Delete
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="game-card style2">
                                <div className="game-card-img">
                                    <img src={`${process.env.PUBLIC_URL}/website/img/my-poken.png`} alt="game image"/>
                                </div>
                                <div className="game-card-details">
                                    <div className="media-left">
                                        <h3 className="box-title">
                                            The Hunter Killer
                                        </h3>
                                        <p className="m-0">HP : 12312</p>
                                        <p className="m-0">Attack : 213 </p>
                                        <p>Defence : 12312</p>
                                        <div className="text-center">
                                            <button className="btn btn-danger text-center"><i
                                                className="fa fa-trash"></i>&nbsp;Delete
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="game-card style2">
                                <div className="game-card-img">
                                    <img src={`${process.env.PUBLIC_URL}/website/img/my-poken.png`} alt="game image"/>
                                </div>
                                <div className="game-card-details">
                                    <div className="media-left">
                                        <h3 className="box-title">
                                            The Hunter Killer
                                        </h3>
                                        <p className="m-0">HP : 12312</p>
                                        <p className="m-0">Attack : 213 </p>
                                        <p>Defence : 12312</p>
                                        <div className="text-center">
                                            <button className="btn btn-danger text-center"><i
                                                className="fa fa-trash"></i>&nbsp;Delete
                                            </button>
                                        </div>
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
export default Home


