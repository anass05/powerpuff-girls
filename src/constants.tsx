console.log(process.env);
export const { REACT_APP_SHOW_ID } = process.env;

export const URLS = {
  avatar: 'https://avatars.dicebear.com/api/micah/john.svg',
};

export const API_URIS = {
  base_url: 'https://api.tvmaze.com/',
  details: `shows/${REACT_APP_SHOW_ID}`,
  episodes: `shows/${REACT_APP_SHOW_ID}/episodes`,
};

export const routes = {
  home: '/',
  details: 'details/name=:name&image=:image&summary=:summary',
};
