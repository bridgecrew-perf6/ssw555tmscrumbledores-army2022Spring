import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Qa from "./components/Qa";
import Instructions from "./components/Instructions";
import Displayimage from "./components/DisplayImage";
import MusicEnable from "./components/MusicEnable";
import Audio from "./components/Audio";
import Canvas from "./Canvas";
import Header from "./components/Header";
import Footer from "./components/Footer";
Enzyme.configure({ adapter: new Adapter() });

test("Test case to check Heading of question in selecting image type from Qa component", () => {
  const wrapper = shallow(
    <Qa question="What kind of scenario are you looking to scribble on?" />
  );

  expect(wrapper.find("#question").text()).toBe(
    "What kind of scenario are you looking to scribble on?"
  );
});

test("Test case to check the HTML tags for Instruction.js file", () => {
  const wrapper = shallow(<Instructions />);

  expect(wrapper.find("h2").text()).toContain("About this game");
});

test("Test case to check Heading of question in selecting image type from DisplayImage component", () => {
  const wrapper = shallow(
    <Displayimage question="Choose an image to doodle on" />
  );

  expect(wrapper.find("#Question2").text()).toBe(
    "Choose an image to doodle on"
  );
});

test("Test case to check Heading of question in selecting music type from MusicEnable component", () => {
  const wrapper = shallow(
    <MusicEnable question="Would you like to listen to music while scribbling?" />
  );

  expect(wrapper.find("#Question3").text()).toBe(
    "Would you like to listen to music while scribbling?"
  );
});

test("Test case to check Heading of question in selecting music audio from Audio component", () => {
  const wrapper = shallow(
    <Audio question="Choose music that you would like to listen" />
  );

  expect(wrapper.find("#Question4").text()).toBe(
    "Choose music that you would like to listen"
  );
});

test("Test case to check the HTML tags for Canvas.tsx file Propertiesid1", () => {
  const wrapper = shallow(<Canvas />);

  expect(wrapper.find("#Propertiesid1").text()).toContain("Properties");
});

test("Test case for stroke color ", () => {
  const wrapper = shallow(<Canvas />);

  expect(wrapper.find("#strokeColorInputid").text()).toContain("strokeColor");
});

test("Test case for Footer component", () => {
  const wrapper = shallow(<Footer />);

  expect(wrapper.find("p").text()).toContain("© Copyright");
});

// test("checking onclick function of button in Audio.js function", () => {

//   const wrapper = shallow(< Audio />)
//   wrapper.find('button').simulate('click');
//   expect (wrapper.find('#initial_value_Audio').text()).toBe('1');
// })
