const listRepos = async (username) => {
  const res = await fetch(`https://api.github.com/users/${username}/repos?type=owner&sort=updated`);
  const repos = await res.json();

  const markup = repos.map(
    repo => `
      <li>
        <a href="${repo.html_url}">${repo.name}</a>
      </li>
    `)
    .join('');

    const content = document.getElementById('content');
    content.innerHTML =`<ul>${markup}</ul>`;
}

listRepos('BenPiggot');
