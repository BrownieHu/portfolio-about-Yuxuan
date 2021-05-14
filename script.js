(function () {
  let newLink = document.createElement('a');

  newLink.setAttribute('href', '#');
  newLink.setAttribute('class', 'readMore');

  newLink.innerHTML = 'read more about me.';

  let allParagraphs = document.getElementsByTagName('div');
  const firstParagraph = allParagraphs[0];

  firstParagraph.appendChild(newLink);
  for (let i = 1; i < allParagraphs.length; i++) {
    allParagraphs[i].style.display = 'none';
  }

  newLink.addEventListener('click', toggleCopy);

  function toggleCopy(e) {
    let allParagraphs = document.getElementsByTagName('div');

    for (let i = 1; i < allParagraphs.length; i++) {
      allParagraphs[i].style.display = 'block';
    }

    this.remove();
    e.preventDefault();
  }
})();
