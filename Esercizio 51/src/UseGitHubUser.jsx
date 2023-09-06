import useSWR from "swr";

function UseGitHubUser(username) {
  async function DataFetch() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(newError(error));
    }
  }

  const { data } = useSWR(username ? `https://api.github.com/users/${username}` : null, DataFetch);

  return (
    <>
      {!data ? <p>Loading...</p> : <ul>{data.id && <li>{data.id}</li>}</ul>}
    </>
  );
}

export default UseGitHubUser;
