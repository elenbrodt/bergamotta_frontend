import baseApi from "./config";

interface authOwnerPayload {
  email: string;
  password: string;
}

export function authOwner(payload: authOwnerPayload) {
  return baseApi.post("/ownerauthentication", payload);
}
