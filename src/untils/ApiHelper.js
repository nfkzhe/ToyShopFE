import AxiosInstance from "./AxiosInstance";

// đăng ký tài khoản
const register = async (data) => {
    try {
        const { email, password, name } = data;
        const body = {
            email: email,
            password: password,
            ten: name
        }
        const response = await AxiosInstance()
            .post('user/register', body);
        if (response.status == 200) {
            return true;
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}

// đăng nhập
const login = async (data) => {
    try {
        const { email, password } = data;
        const body = {
            email: email,
            password: password
        }
        const response = await AxiosInstance()
            .post('user/login', body);
        if (response.status == 200) {
            return response.user;
        }
    } catch (error) {
        console.log(error);
    }
    return null;
}

// lấy danh sách tất cả danh mục
const getAllCategories = async () => {
    try {
        const response = await AxiosInstance()
            .get('categories/');
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
    return [];
}

// lấy danh sách tất cả sản phẩm theo 1 danh mục
const getProductsByCategory = async (categoryId) => {
    try {
        const response = await AxiosInstance()
            .get(`product/getbycate?category=${categoryId}`);
        if (response.status == 200) {
            return response.data;
        }else{
            return response;
        }
    } catch (error) {
        console.log(error);
    }
    return [];
}

// lấy chi tiết 1 sản phẩm
const getProductDetail = async (productId) => {
    try {
        const response = await AxiosInstance()
            .get(`products/detail/${productId}`);
        if (response.status == 200) {
            return response;
        } else {
            console.log("Unexpected response:", response);
        }
    } catch (error) {
        console.log("Error fetching product details:", error);
    }
    return null; // Return null if the request fails
}

const getTopSold = async () => {
    try {
        const response = await AxiosInstance()
            .get(`products/topsell`);
        if (response.status == 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}

export {
    register, login,
    getAllCategories, getProductsByCategory,
    getProductDetail, getTopSold
};
