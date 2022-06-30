import axios from 'axios';

// const GITHUB_API_URL = "https://github-followers-api.herokuapp.com";
const GITHUB_API_URL = process.env.REACT_APP_CUSTOM_GITHUB_API_URL;

export const githubClient = axios.create({
  baseURL: GITHUB_API_URL,
});
