import axios from "axios";
import { User } from "../types";

const instance = axios.create({
    baseURL: "http://localhost:4000/user",
});

export const loginUser = async (user: User) => {
    console.log(user);
    const result = await instance.post("/login", user);
    console.log(result);
};