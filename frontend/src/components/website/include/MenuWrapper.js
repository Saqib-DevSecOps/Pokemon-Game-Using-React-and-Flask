const MenuWrapper = () => {
    return (
        <>
            <div className="th-menu-wrapper">
                <div className="th-menu-area text-center">
                    <button className="th-menu-toggle">
                        <i className="fal fa-times"/>
                    </button>
                    <div className="mobile-logo">
                        <a href="index.html">
                            <span data-mask-src="assets/img/logo.svg" className="logo-mask"/>
                            <img src="assets/img/logo.svg" alt="Bame"/>
                        </a>
                    </div>
                    <div className="th-mobile-menu">
                        <ul>
                            <li className="menu-item-has-children">
                                <a href="index.html">HOME</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="index.html">Home Esports</a>
                                    </li>
                                    <li>
                                        <a href="home-2.html">Home Streaming</a>
                                    </li>
                                    <li>
                                        <a href="home-3.html">Home Video Gaming</a>
                                    </li>
                                    <li>
                                        <a href="home-4.html">Home Tournament</a>
                                    </li>
                                    <li>
                                        <a href="home-5.html">Home Gamer</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="about.html">ABOUT US</a>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">TOURNAMENT</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="tournament.html">Tournament</a>
                                    </li>
                                    <li>
                                        <a href="tournament-details.html">Tournament Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">BLOG</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="blog-details.html">Blog Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">PAGES</a>
                                <ul className="sub-menu">
                                    <li className="menu-item-has-children">
                                        <a href="#">Shop</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="shop.html">Shop</a>
                                            </li>
                                            <li>
                                                <a href="shop-details.html">Shop Details</a>
                                            </li>
                                            <li>
                                                <a href="cart.html">Cart Page</a>
                                            </li>
                                            <li>
                                                <a href="checkout.html">Checkout</a>
                                            </li>
                                            <li>
                                                <a href="wishlist.html">Wishlist</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="team.html">Players</a>
                                    </li>
                                    <li>
                                        <a href="team-details.html">Players Details</a>
                                    </li>
                                    <li>
                                        <a href="game.html">Game</a>
                                    </li>
                                    <li>
                                        <a href="game-details.html">Game Details</a>
                                    </li>
                                    <li>
                                        <a href="gallery.html">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="point-table.html">Point Table</a>
                                    </li>
                                    <li>
                                        <a href="error.html">Error Page</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="contact.html">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
export default MenuWrapper