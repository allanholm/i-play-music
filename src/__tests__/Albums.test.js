import mockedAxios from "axios";
import { cleanup, render, waitFor } from "@testing-library/react";
import Albums from "../pages/Albums";

afterEach(cleanup);

jest.mock("axios");

test("Test ", async function() {
  var response = {
    data: {
      results: [
        {
          name: "bulbasaur"
        },
        {
          name: "pikachu"
        },
        {
          name: "mewtwo"
        }
      ]
    }
  };

  mockedAxios.get.mockResolvedValue(response);
  var { getByText } = render(<Albums />);

  await waitFor(function() {
    expect(getByText(/bulbasaur/i)).toBeInTheDocument();
  });
});