import './App.css';
import '@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/group-ui/assets/themes/vwag/vwag.css';
import { applyPolyfills, defineCustomElements } from '@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/loader';

applyPolyfills().then(() => {
  defineCustomElements();
});

export default App;
