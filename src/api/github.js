import { githubClient } from "./index";

export async function getFollowers(username) {
  try {
    const res = await githubClient.get(`/users/${username}/followers?per_page=100`);

    if (res && res.data.length < 100) {
      return res.data;
    } else {
      const allFollowers = [];
      allFollowers.push(...res.data);
      let pageNumber = 2;
      while (res.data.length === 100) {
        const res = await githubClient.get(`/users/${username}/followers?page=${pageNumber}&per_page=100`);
        allFollowers.push(...res.data);
        pageNumber++;
      }
      return allFollowers;
    }
  } catch (e) {
    return undefined;
  }
}

export async function getFollowing(username) {
  try {
    const res = await githubClient.post("/following", { username })
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
