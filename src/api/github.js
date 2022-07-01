import { githubClient } from "./index";

export async function getFollowers(username) {
  try {
    const res = await githubClient.post("/followers", { username });
    return res.data.followers;
  } catch (e) {
    return undefined;
  }
}

export async function getFollowing(username) {
  try {
    const res = await githubClient.post("/following", { username });
    return res.data.following;
  } catch (e) {
    return undefined;
  }
}

export async function getUsersStarredRepo() {
  try {
    const res = await githubClient.get("/repo-stargazers");
    return res.data.stargazers;
  } catch (e) {
    return undefined;
  }
}
