import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure, mount } from "enzyme";

import Main from "./components/Main"

configure({ adapter: new Adapter() });

describe("App", () => {


  it("loading test", () => {
    const {getByText} = render(<Main/>);
    expect(getByText(/Loading/i)).toBeInTheDocument();
    cleanup();
  })



  it("api test", async ()=>{
    const {getByTestId} = render(<Main/>);
    const div = await waitFor(() => getByTestId('contactsTest'));
    expect(div).toBeInTheDocument();
  })


  it("api test2", async () => {
    const wrapper =  await mount(<Main/>);

    await wrapper.update();
    console.log(wrapper.debug());
    expect(wrapper.find("contactsTest").length).toEqual(1);
    
  });

});



