export default function ComponentTestElement({ html, state }) {
  const { attrs = {} } = state;
  const { label = "", name = "" } = attrs;


  return html`

  <div>
    <p>${label}</p>
    <p>${name}</p>
    <nested-element></nested-element>
  </div>
  <script type="module" src="/_public/browser/component-test.mjs"></script>
  `;
}
