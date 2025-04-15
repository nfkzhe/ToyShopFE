function Nav({ categories }) {
    return (
        <div className="container-fluid">
            <div className="row py-3">
                <div className="d-flex justify-content-center justify-content-sm-between align-items-center">
                    <nav className="main-menu d-flex navbar navbar-expand-lg">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="offcanvas offcanvas-end"
                            tabIndex="-1"
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                        >
                            <div className="offcanvas-header justify-content-center">
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                                    {categories.map((item) => {
                                        return (
                                            <li key={item._id} className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href={'/danhmuc/' + item._id}
                                                    aria-current="page"
                                                    onClick={() => {}}
                                                >
                                                    {item.CateName}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Nav;
