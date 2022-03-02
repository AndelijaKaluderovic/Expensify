import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// yarn add enzyme raf @wojtekmaj/enzyme-adapter-react-17 TERMINAL
 
Enzyme.configure({ 
    adapter: new Adapter()
});