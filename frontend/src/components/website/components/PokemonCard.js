const pokemon_list = [
    {
        id: 1,
        imgSrc: `${process.env.PUBLIC_URL}/website/images/356.png`,
        title: "Best Cerelac Mixed Fruits &amp; Wheat with Milk",

    },
    {
        id: 2,
        imgSrc: `${process.env.PUBLIC_URL}/website/images/356.png`,
        title: "Best Cerelac Mixed Fruits &amp; Wheat with Milk",
    },
    {
        id: 3,
        imgSrc: `${process.env.PUBLIC_URL}/website/images/356.png`,
        title: "Best Cerelac Mixed Fruits &amp; Wheat with Milk",

    },
    {
        id: 4,
        imgSrc: `${process.env.PUBLIC_URL}/website/images/356.png`,
        title: "Best Cerelac Mixed Fruits &amp; Wheat with Milk",

    },
    // {
    //     id: 5,
    //     imgSrc: `${process.env.PUBLIC_URL}/website/images/games-logo-1.png`,
    //     title: "Best Cerelac Mixed Fruits &amp; Wheat with Milk",
    //
    // },
    // {
    //     id: 6,
    //     imgSrc: `${process.env.PUBLIC_URL}/website/images/games-logo-1.png`,
    //     title: "Best Cerelac Mixed Fruits &amp; Wheat with Milk",
    //
    // },

];

const PokemonCard = () => {
    return (
        <>
            {pokemon_list.map(object => (

                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="single-box">
                        <div className="">
                            <img src={object.imgSrc} alt="image"/>
                        </div>
                        <div className="text-area">
                            <h6>{object.title}</h6>
                            <p className="mdr">HP - 27.05</p>
                            <p className="mdr">Attack - 27.05</p>
                            <p className="mdr">Defence - 27.05</p>

                            <a href="javascript:void(0)">Select</a>
                        </div>
                    </div>
                </div>


            ))}
        </>
    )
}
export default PokemonCard