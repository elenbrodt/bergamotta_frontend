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

export function createFavorite(props: any, req: string) {
  return baseApi.post(`/createfavorite/${req}`, {
    place_id: props.place_id,
  });
}

export function deleteFavorite(props: any) {
  return baseApi.delete(`/favorite/${props.place_id}`, {
    headers: {
      Authorization: `Bearer ${props.user_id}`,
    },
  });
}
