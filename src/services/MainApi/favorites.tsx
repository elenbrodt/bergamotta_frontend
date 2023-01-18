import baseApi from "./config";

export function userFavoriteById(req: any, props: string) {
  return baseApi.get(`/userfavorite/${props}`, {
    headers: {
      Authorization: `Bearer ${req}`,
    },
  });
}

export function userFavoritesById(props: string) {
  return baseApi.get(`/userfavorites/${props}`);
}

export function createFavorite(props: any) {
  return baseApi.post(`/createfavorite`, {
    place_id: props.place_id,
    user_id: props.user_id,
  });
}

export function deleteFavorite(props: any) {
  return baseApi.delete(`/favorite/${props.place_id}`, {
    headers: {
      Authorization: `Bearer ${props.user_id}`,
    },
  });
}
