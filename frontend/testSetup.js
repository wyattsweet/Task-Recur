import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LocalStorageMock from './localStorageMock';

global.localStorage = new LocalStorageMock();
configure({ adapter: new Adapter() });
