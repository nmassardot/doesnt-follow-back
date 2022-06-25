import { githubClient } from "./index";

export async function getFollowers(username) {
  try {
    const res = await githubClient.get(`/users/${username}/followers`);

    if (res && res.data.length < 30) {
      return res.data;
    } else {
      const allFollowers = [];
      allFollowers.concat(...res.data);
      let pageNumber = 2;
      while (res !== [] && pageNumber < 4) {
        const res = await githubClient.get(`/users/${username}/followers?page=${pageNumber}`);
        allFollowers.concat(...res.data);
        pageNumber++;
      }
      return allFollowers;
    }
  } catch (e) {
    return undefined;
  }
}
