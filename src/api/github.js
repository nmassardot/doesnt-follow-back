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
    let res = await githubClient.get(`/users/${username}/following?per_page=100`);
    if (res && res.data.length < 100) {
      return res.data;
    } else {
      const allFollowing = [];
      allFollowing.push(...res.data);
      let pageNumber = 2;
      while (res.data.length === 100) {
        res = await githubClient.get(`/users/${username}/following?page=${pageNumber}&per_page=100`);
        allFollowing.push(...res.data);
        pageNumber++;
      }
      return allFollowing;
    }
  } catch (e) {
    return undefined;
  }
}

export async function getUsersStarredRepo() {
  try {
    let res = await githubClient.get(`/repos/nmassardot/doesnt-follow-back/stargazers?per_page=100`);
    if (res && res.data.length < 100) {
      return res.data;
    } else {
      const stargazers = [];
      stargazers.push(...res.data);
      let pageNumber = 2;
      while (res.data.length === 100) {
        res = await githubClient.get(`/repos/nmassardot/cv-generator/stargazers?page=${pageNumber}&per_page=100`);
        stargazers.push(...res.data);
        pageNumber++;
      }
      return stargazers;
    }
  } catch (e) {
    return undefined;
  }
}
