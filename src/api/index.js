import axios from 'axios';

const GITHUB_API_URL = process.env.REACT_APP_CUSTOM_GITHUB_API_URL;
/* eslint-disable import/prefer-default-export */
export const githubClient = axios.create({
  baseURL: GITHUB_API_URL,
});
/* eslint-enable import/prefer-default-export */
