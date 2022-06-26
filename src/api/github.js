import { githubClient } from "./index";

export async function getFollowers(username) {
  try {
    const res = await githubClient.get(`/users/${username}/followers`);

    if (res && res.data.length < 30) {
      return res.data;
    } else {
      const allFollowers = [];
      allFollowers.push(...res.data);
      let pageNumber = 2;
      while (res !== [] && pageNumber < 10) {
        const res = await githubClient.get(`/users/${username}/followers?page=${pageNumber}`);
        allFollowers.push(...res.data);
        pageNumber++;
      }
      return allFollowers;
    }
  } catch (e) {
    return undefined;
  }
}
