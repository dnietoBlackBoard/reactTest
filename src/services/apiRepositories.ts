const URL = "https://api.github.com/users/anthology-developer-hub/repos";

export async function apiGetRepos() {
  try {
    const response = await fetch(URL);
    console.log("REPOS OBTAINED");
    console.log(response);
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      console.log(`Error status code: ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to get the repositories", error);
  }
}
