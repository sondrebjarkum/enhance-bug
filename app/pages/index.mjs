export default function IndexPage({html}){
  return html`
    <style>
      .style {        
        font-size: 2em;
      }
    </style>
    <div class="style">
      <p>With attributes declared:</p>
      <component-test label="label" name="name"></component-test>
      <br />
      <p>Without attributes declared:</p>
      <component-test></component-test>

    </div>


  `
}