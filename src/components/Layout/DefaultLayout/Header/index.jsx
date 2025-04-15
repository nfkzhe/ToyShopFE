import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { getAllCategories } from '~/untils/ApiHelper';
import Nav from './components/nav';
import { Link } from 'react-router-dom';
import { useCart } from '~/contexts/CartContext';
import Icon from '~/components/Icon';

const cx = classNames.bind(styles);

function Header() {
    const [categories, setCategories] = useState([]);
    const { cartItems } = useCart(); // Sử dụng cart từ context

    const getCategories = async () => {
        try {
            const response = await getAllCategories();
            setCategories(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const userInfo = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        getCategories();
    }, []);

    // Tính tổng giá trị đơn hàng
    const totalPrice = cartItems.reduce((acc, item) => acc + item.ProductPrice * item.quantity, 0);

    return (
        <header>
            <Icon />
            <div className="container-fluid">
                <div className="row py-3 border-bottom">
                    <div className="col-sm-4 col-lg-3 text-center text-sm-start">
                        <div className="main-logo">
                            <a href="/">
                                <img src="/assets/images/logo1.png" alt="logo" className={cx('logoSize')} />
                            </a>
                        </div>
                    </div>

                    <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
                        <div className="search-bar row bg-light p-2 my-2 rounded-4">
                            <div className="col-md-4 d-none d-md-block">
                                <select className="form-select border-0 bg-transparent">
                                    <option>Tất cả danh mục</option>
                                    {categories.map((item) => (
                                        <option key={item._id} value={item._id}>
                                            {item.CateName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-11 col-md-7">
                                <form id="search-form" className="text-center" action="index.html" method="post">
                                    <input
                                        type="text"
                                        className="form-control border-0 bg-transparent"
                                        placeholder="Nhập sản phẩm muốn tìm"
                                    />
                                </form>
                            </div>
                            <div className="col-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
                        <div className="support-box text-end d-none d-xl-block">
                            <span className="fs-6 text-muted">Cần Hỗ Trợ ?</span>
                            <h6 className="mb-0">0363.911.561</h6>
                        </div>

                        <ul className="d-flex justify-content-end list-unstyled m-0 position-relative">
                            <li className="dropdown">
                                <a
                                    className="rounded-circle bg-light p-2 mx-1 dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    href="#"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <AiOutlineUser size={24} />
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end ms-2">
                                    {userInfo ? (
                                        <>
                                            <li className="px-3 py-2 text-dark fw-bold">{userInfo.ten}</li>
                                            <li>
                                                <button
                                                    className="dropdown-item"
                                                    onClick={() => {
                                                        localStorage.removeItem('user');
                                                        window.location.reload();
                                                    }}
                                                >
                                                    Đăng xuất
                                                </button>
                                            </li>
                                        </>
                                    ) : (
                                        <li>
                                            <Link className="dropdown-item" to="/login">
                                                Đăng nhập
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </li>

                            <li>
                                <a href="#" className="rounded-circle bg-light p-2 mx-1">
                                    <AiOutlineHeart size={24} />
                                </a>
                            </li>

                            <li className="d-lg-none">
                                <a
                                    href="#"
                                    className="rounded-circle bg-light p-2 mx-1 position-relative"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasCart"
                                    aria-controls="offcanvasCart"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24">
                                        <use xlinkHref="#cart"></use>
                                    </svg>
                                    {cartItems.length > 0 && (
                                        <span className="badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle">
                                            {cartItems.length}
                                        </span>
                                    )}
                                </a>
                            </li>
                        </ul>

                        <div className="cart text-end d-none d-lg-block dropdown">
                            <button
                                className="border-0 bg-transparent d-flex flex-column gap-2 lh-1 position-relative"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasCart"
                                aria-controls="offcanvasCart"
                            >
                                <span className="fs-6 text-muted dropdown-toggle">Giỏ Hàng</span>
                                <span className="cart-total fs-5 fw-bold">
                                    {totalPrice.toLocaleString('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    })}
                                </span>
                                {cartItems.length > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {cartItems.length}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Nav categories={categories} />
        </header>
    );
}

export default Header;
