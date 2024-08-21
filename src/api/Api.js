
import axiosInstancee from "../axiosServiseFactory/aesEncription/AesEncripition";

// import axiosInstance from "../../axiosServiseFactory/AxiosServiseFactory";
import axios from "axios";
import { baseUrl } from "../baseUrl";

// const token = window.localStorage.getItem("userToken")

export const resiter = (data) => {
    return axios.post(`${baseUrl}user/adduser`, data);
};

export const loginn = (data) => {
    return axiosInstancee.post(`${baseUrl}user/login`, data);
};

export const getBed = (value, count, search) => {
    // console.log(value, count);

    return axiosInstancee.get(`${baseUrl}bed/get?page=${value}&count=${count}&search=${search}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

export const bedAdd = (data) => {
    return axiosInstancee.post(`${baseUrl}bed/add`, data);
};

export const bedType = (value) => {
    return axiosInstancee.get(`${baseUrl}bed-type/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const bedGroup = (value) => {
    return axiosInstancee.get(`${baseUrl}bed-group/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};


export const bedDelete = (id) => {
    return axiosInstancee.delete(`${baseUrl}bed/delete/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};



export const bedIDGet = (id) => {
    // console.log(id);

    return axiosInstancee.get(`${baseUrl}bed/get/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

export const updateBed = (id, data) => {
    return axiosInstancee.put(`${baseUrl}bed/setting/${id}`, data);
};

export const shiftAdd = (data) => {
    return axiosInstancee.post(`${baseUrl}shift/add`, data);
};


export const getShift = (value, count, search) => {
    // console.log(value, count);

    return axiosInstancee.get(`${baseUrl}shift/get?page=${value}&count=${count}&search=${search}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

export const shiftDelete = (id) => {
    return axiosInstancee.delete(`${baseUrl}shift/delete/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

export const shiftIDGet = (id) => {
    // console.log(id);

    return axiosInstancee.get(`${baseUrl}shift/get/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

export const updateShift = (id, data) => {
    return axiosInstancee.put(`${baseUrl}bed/setting/${id}`, data);
};


