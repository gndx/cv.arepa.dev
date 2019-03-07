import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import About from '../../components/About';

Enzyme.configure({ adapter: new Adapter() });

describe("Pruebas Unitarias con Jest", () => {
  test("Render de un componente", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.exists()).toBe(false);
  });
  test("Recibir propiedades", () => {
    const wrapper = mount(<About name="Oscar Barajas" />);
    expect(wrapper.props().name).toEqual('Oscar Barajas');
  });
});
