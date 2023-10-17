function findLinks() {
  let results = [];
  document.querySelectorAll('a').forEach((url) => {
    const externalLink = url.host !== window.location.host;
    if (url.href && url.href.includes('://')) {
        results.push({
            Url: url.href,
            'Anchor Text': url.textContent,
            External: externalLink ? 'TRUE' : 'FALSE',
        });
    }
  });
  console.table(results);
}
