import { configure } from 'enzyme';

import { shallow, mount, render } from 'enzyme';
import Register from './Register'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });




describe("basic testing", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Register />);
    })
    test("render ", () => {
        console.log(wrapper.debug())
        expect(wrapper.find("#firstName").text()).toContain("")
        expect(wrapper.find("#lastName").text()).toContain("")
        expect(wrapper.find("#email").text()).toContain("")
        expect(wrapper.find("#password").text()).toContain("")
    })
})
