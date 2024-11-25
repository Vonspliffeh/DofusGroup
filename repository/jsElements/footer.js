export function createFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <ul class="footer">
      <li><a href="index.html">DofusGroup</a></li>
      <li><a href="communauté.html">Communauté</a></li>
      <li><a href="communauté.html">Autres liens</a></li>
    </ul>
  `;
  document.querySelector('footer').appendChild(footer);
}
