import { useEffect, useState } from "react";
import { getUser } from "~/untils/ApiHelper";

const Profile = ()=> {
    const [userInfo, setUserInfo] = useState({});

    const fetchUser = async () => {
        const user = JSON.parse(localStorage.getItem("user"))
        const userId = user._id
        const response = await getUser(userId)
        if (response && response.data) {
            setUserInfo(response.data)
        }else{
            setUserInfo({})
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])
    return (
        <div className="container mt-5">
            <div className="card shadow-sm">
                <div className="card-body d-flex flex-column flex-md-row align-items-center">
                    <div className="flex-grow-1 text-center text-md-start">
                        <h3 className="card-title">{userInfo.ten}</h3>
                        <p className="mb-1"><strong>Email:</strong> {userInfo.email}</p>
                        <p className="mb-1"><strong>Điện thoại:</strong> {userInfo.phone}</p>
                        <p className="mb-1"><strong>Địa chỉ:</strong> {userInfo.address}</p>

                        <button className="btn btn-primary mt-3">
                            Chỉnh sửa thông tin
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;