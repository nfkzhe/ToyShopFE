import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { getAllCategories } from '~/untils/ApiHelper';
import Nav from './components/nav';
import { Link } from 'react-router-dom';
import { useCart } from '~/contexts/CartContext';

const cx = classNames.bind(styles);

function Header() {
  const [categories, setCategories] = useState([]);
  const { cartItems } = useCart();

  const getCategories = async () => {
    try {
      const response = await getAllCategories();
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const userInfo = JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    getCategories();
  }, []);

  // Tính tổng giá trị đơn hàng
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.ProductPrice * item.quantity,
    0
  );

  return (
    <header>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <defs>
          <symbol
            xmlns="http://www.w3.org/2000/svg"
            id="link"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 19a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm0-4a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm-5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm7-12h-1V2a1 1 0 0 0-2 0v1H8V2a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11H4V6a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V5h8v1a1 1 0 0 0 2 0V5h1a1 1 0 0 1 1 1ZM7 15a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm0 4a1 1 0 1 0-1-1a1 1 0 0 0 1 1Z"
            />
          </symbol>
          <symbol
            xmlns="http://www.w3.org/2000/svg"
            id="arrow-right"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76Z"
            />
          </symbol>
          <symbol
            xmlns="http://www.w3.org/2000/svg"
            id="category"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 5.5h-6.28l-.32-1a3 3 0 0 0-2.84-2H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1h4.56a1 1 0 0 1 .95.68l.54 1.64a1 1 0 0 0 .95.68h7a1 1 0 0 1 1 1Z"
            />
          </symbol>
          <symbol
            xmlns="http://www.w3.org/2000/svg"
            id="calendar"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"
            />
          </symbol>
          <symbol
            xmlns="http://www.w3.org/2000/svg"
            id="heart"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20.16 4.61A6.27 6.27 0 0 0 12 4a6.27 6.27 0 0 0-8.16 9.48l7.45 7.45a1 1 0 0 0 1.42 0l7.45-7.45a6.27 6.27 0 0 0 0-8.87Zm-1.41 7.46L12 18.81l-6.75-6.74a4.28 4.28 0 0 1 3-7.3a4.25 4.25 0 0 1 3 1.25a1 1 0 0 0 1.42 0a4.27 4.27 0 0 1 6 6.05Z"
            />
          </symbol>
          <symbol
            xmlns="http://www.w3.org/2000/svg"
            id="plus"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2Z"
            />
          </symbol>
          <symbol
            xmlns="http://www.w3.org/2000/svg"
            id="minus"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z"
            />
          </symbol>
          <symbol
            xmlns="http://www.w3.org/2000/svg"
            id="cart"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M8.5 19a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 8.5 19ZM19 16H7a1 1 0 0 1 0-2h8.491a3.013 3.013 0 0 0 2.885-2.176l1.585-5.55A1 1 0 0 0 19 5H6.74a3.007 3.007 0 0 0-2.82-2H3a1 1 0 0 0 0 2h.921a1.005 1.005 0 0 1 .962.725l.155.545v.005l1.641 5.742A3 3 0 0 0 7 18h12a1 1 0 0 0 0-2Zm-1.326-9l-1.22 4.274a1.005 1.005 0 0 1-.963.726H8.754l-.255-.892L7.326 7ZM16.5 19a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5Z"
            />
          </symbol>
          <symbol
            xmlns="http://www.w3.org/2000/svg"
            id="check"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47Z"
            />
          </symbol>
          <symbol
            xmlns="http://www.w3.org/2000/svg"
            id="trash"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M10 18a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1ZM20 6h-4V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2ZM10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm7 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8h10Zm-3-1a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
            />
          </symbol>
          <symbol
            xmlns="http://www.w3.org/2000/svg"
            id="star-outline"
            viewBox="0 0 15 15"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 9.804L5.337 11l.413-2.533L4 6.674l2.418-.37L7.5 4l1.082 2.304l2.418.37l-1.75 1.793L9.663 11L7.5 9.804Z"
            />
          </symbol>
          <symbol
            xmlns="http://www.w3.org/2000/svg"
            id="star-solid"
            viewBox="0 0 15 15"
          >
            <path
              fill="currentColor"
              d="M7.953 3.788a.5.5 0 0 0-.906 0L6.08 5.85l-2.154.33a.5.5 0 0 0-.283.843l1.574 1.613l-.373 2.284a.5.5 0 0 0 .736.518l1.92-1.063l1.921 1.063a.5.5 0 0 0 .736-.519l-.373-2.283l1.574-1.613a.5.5 0 0 0-.283-.844L8.921 5.85l-.968-2.062Z"
            />
          </symbol>
          <symbol
            xmlns="http://www.w3.org/2000/svg"
            id="search"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
            />
          </symbol>
          <symbol
            xmlns="http://www.w3.org/2000/svg"
            id="user"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19ZM12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z"
            />
          </symbol>
          <symbol
            xmlns="http://www.w3.org/2000/svg"
            id="close"
            viewBox="0 0 15 15"
          >
            <path
              fill="currentColor"
              d="M7.953 3.788a.5.5 0 0 0-.906 0L6.08 5.85l-2.154.33a.5.5 0 0 0-.283.843l1.574 1.613l-.373 2.284a.5.5 0 0 0 .736.518l1.92-1.063l1.921 1.063a.5.5 0 0 0 .736-.519l-.373-2.283l1.574-1.613a.5.5 0 0 0-.283-.844L8.921 5.85l-.968-2.062Z"
            />
          </symbol>
        </defs>
      </svg>
      <div className="container-fluid">
        <div className="row py-3 border-bottom">
          <div className="col-sm-4 col-lg-3 text-center text-sm-start">
            <div className="main-logo">
              <a href="/">
                <img
                  src="/images/logo1.png"
                  alt="logo"
                  className={cx('logoSize')}
                />
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
                <form
                  id="search-form"
                  className="text-center"
                  action="index.html"
                  method="post"
                >
                  <input
                    type="text"
                    className="form-control border-0 bg-transparent"
                    placeholder="Nhập sản phẩm muốn tìm"
                  />
                </form>
              </div>
              <div className="col-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
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
                            localStorage.removeItem("user");
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
