import baseApi from "./config";

interface authUserPayload {
  email: string;
  password: string;
}

export function authUser(payload: authUserPayload) {
  return baseApi.post("/userauthentication", payload);
}
