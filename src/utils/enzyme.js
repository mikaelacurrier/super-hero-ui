import Enzyme, {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter})

export {shallow, mount}
export default Enzyme