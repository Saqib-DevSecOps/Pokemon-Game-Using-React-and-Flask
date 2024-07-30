const SideMenu = () => {
    return (
        <>
            <div className="sidemenu-wrapper sidemenu-info d-none d-lg-block">
                <div className="sidemenu-content">
                    <button className="closeButton sideMenuCls">
                        <i className="far fa-times"/>
                    </button>
                    <div className="widget footer-widget">
                        <div className="th-widget-about">
                            <div className="about-logo">
                                <a href="index.html">
                                    <span data-mask-src="assets/img/logo.svg" className="logo-mask"/>{" "}
                                    <img src="assets/img/logo.svg" alt="Bame"/>
                                </a>
                            </div>
                            <p className="about-text">
                                Beyond esports tournaments, include a broader calendar of gaming
                                events, conferences, and conventions.
                            </p>
                            <h3 className="widget_title">
                                Follow <span className="text-theme">With Us:</span>
                            </h3>
                            <div className="th-widget-contact">
                                <div className="th-social style-mask">
                                    <a className="facebook" href="https://www.facebook.com/">
                                        <i className="fab fa-facebook-f"/>
                                    </a>{" "}
                                    <a className="twitter" href="https://www.twitter.com/">
                                        <img src="assets/img/icon/x-twitter-icon.svg" alt="icon"/>
                                    </a>
                                    <a className="instagram" href="https://www.instagram.com/">
                                        <img src="assets/img/icon/instagram-icon.svg" alt="icon"/>{" "}
                                    </a>
                                    <a className="linkedin" href="https://www.linkedin.com/">
                                        <i className="fab fa-linkedin"/>
                                    </a>{" "}
                                    <a className="google-play" href="https://www.google.com/">
                                        <img src="assets/img/icon/google-playstore-icon.svg" alt="icon"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget">
                        <h3 className="widget_title">Recent Posts</h3>
                        <div className="recent-post-wrap">
                            <div className="recent-post">
                                <div className="media-img">
                                    <a href="blog-details.html">
                                        <img src="assets/img/blog/recent-post-1-1.jpg" alt="Blog Image"/>
                                    </a>
                                </div>
                                <div className="media-body">
                                    <h4 className="post-title">
                                        <a className="text-inherit" href="blog-details.html">
                                            A Day in the Life of an Esports Event &amp; Enjoy
                                        </a>
                                    </h4>
                                    <div className="recent-post-meta">
                                        <a href="blog.html">
                                            <i className="fa-light fa-calendar"/>
                                            30 Nov, 2024
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="recent-post">
                                <div className="media-img">
                                    <a href="blog-details.html">
                                        <img src="assets/img/blog/recent-post-1-2.jpg" alt="Blog Image"/>
                                    </a>
                                </div>
                                <div className="media-body">
                                    <h4 className="post-title">
                                        <a className="text-inherit" href="blog-details.html">
                                            Strategies for Dominating Your Favorite Game
                                        </a>
                                    </h4>
                                    <div className="recent-post-meta">
                                        <a href="blog.html">
                                            <i className="fa-light fa-calendar"/>
                                            05 Dec, 2024
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="recent-post">
                                <div className="media-img">
                                    <a href="blog-details.html">
                                        <img src="assets/img/blog/recent-post-1-3.jpg" alt="Blog Image"/>
                                    </a>
                                </div>
                                <div className="media-body">
                                    <h4 className="post-title">
                                        <a className="text-inherit" href="blog-details.html">
                                            Behind the Scenes of Your Favorite Game
                                        </a>
                                    </h4>
                                    <div className="recent-post-meta">
                                        <a href="blog.html">
                                            <i className="fa-light fa-calendar"/>
                                            09 Sep, 2024
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget newsletter-widget">
                        <h3 className="widget_title">Newsletter</h3>
                        <p className="footer-text">
                            Subscribe to our newsletter to get our latest update &amp; news
                            consenter
                        </p>
                        <form className="newsletter-form">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="email"
                                    placeholder="Email Address"
                                    required=""
                                />{" "}
                                <button type="submit" className="th-btn">
                                    <i className="far fa-paper-plane"/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SideMenu