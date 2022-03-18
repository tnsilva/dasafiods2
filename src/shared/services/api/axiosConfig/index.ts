import axios from "axios";

import { responseInterceptor, errorInterceptor } from "../interceptors";
import { Environment } from "../../../environment";

const api = axios.create({
  baseURL: Environment.URL_BASE,
  headers: {
    "Content-Type": "application/json",
  
  },
});

export { api };
