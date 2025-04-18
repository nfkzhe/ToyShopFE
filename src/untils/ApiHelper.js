import AxiosInstance from './AxiosInstance';

// đăng ký tài khoản
const register = async (data) => {
    try {
        const { email, password, name } = data;
        const body = {
            email: email,
            password: password,
            ten: name,
        };
        const response = await AxiosInstance().post('user/register', body);
        if (response.status === 200) {
            return true;
        }
    } catch (error) {
        console.log(error);
    }
    return false;
};

// đăng nhập
const login = async (data) => {
    try {
        const { email, pass } = data;
        const body = { email, pass };

        const response = await AxiosInstance().post('user/login', body);
        if (response.status === 200) {
            return response.data; // Trả về { message, data, token }
        }
    } catch (error) {
        console.log(error);
    }
    return null;
};

// lấy danh sách tất cả danh mục
const getAllCategories = async () => {
    try {
        const response = await AxiosInstance().get('categories/');
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
    return [];
};

// lấy danh sách tất cả sản phẩm theo 1 danh mục
const getProductsByCategory = async (categoryId) => {
    try {
        const response = await AxiosInstance().get(`product/getbycate?category=${categoryId}`);
        if (response.status === 200) {
            return response.data;
        } else {
            return response;
        }
    } catch (error) {
        console.log(error);
    }
    return [];
};

// lấy chi tiết 1 sản phẩm
const getProductDetail = async (productId) => {
    try {
        const response = await AxiosInstance().get(`products/detail/${productId}`);
        if (response.status === 200) {
            return response.data;
        } else {
            console.log('Unexpected response:', response);
        }
    } catch (error) {
        console.log('Error fetching product details:', error);
    }
    return null; // Return null if the request fails
};

const getTopSold = async () => {
    try {
        const response = await AxiosInstance().get(`products/topsell`);
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
};
const getUser = async () => {
    try {
        const response = await AxiosInstance().get(`/user/find`);
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
};

const getCart = async () => {
    try {
        const response = await AxiosInstance().get(`/cart`);
        return response.data; // Trả về dữ liệu giỏ hàng
    } catch (error) {
        console.log(error);
        return { cart: [] }; // Trả về giỏ hàng rỗng nếu có lỗi
    }
};

// Cập nhật giỏ hàng lên server
const addCart = async (cartItems) => {
    try {
        const response = await AxiosInstance().post(`/cart`, { cart: cartItems });
        return response.data; // Trả về kết quả sau khi thêm giỏ hàng lên server
    } catch (error) {
        console.log(error);
    }
};

export {
    register,
    login,
    getAllCategories,
    getProductsByCategory,
    getProductDetail,
    getTopSold,
    getUser,
    getCart,
    addCart,
};
