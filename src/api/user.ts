import axios from "axios";
import { User } from "../types";

const instance = axios.create({
    baseURL: "http://localhost:4000/user",
});

export const loginUser = async (user: User) => {
    const result = await instance.post("/login", user);
    return result.data;
};