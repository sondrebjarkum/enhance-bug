import ComponentTestElement from "../elements/component-test.mjs"
import enhance from '@enhance/element';

enhance('component-test', {
  init(){
  },
  attrs: [
    'label',
    'name',
  ],

  render: ComponentTestElement,

});
