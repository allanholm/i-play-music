import NavigationBar from "../components/NavigationBar";
import {screen, render} from "@testing-library/react";

test("testing stuff", function() {
  render(<NavigationBar />);
  var dims = screen.findAllByAltText(/navIcon/i);
  expect(dims);
})