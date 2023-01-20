import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "../components/UserForm";

test("it shows two inputs and a button", () => {
  // render component
  render(<UserForm />);

  // mess with component as necessary
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // make an assertion to check how it is working
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", () => {
  const mockFunc = jest.fn();
  // try to render the component
  render(<UserForm handlerFunc={mockFunc} />);

  // find the two inputs
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  // simulate typing in a name
  user.click(nameInput);
  user.keyboard("Jordan");

  // simulate typing in an email address
  user.click(emailInput);
  user.keyboard("cjb@cjb.com");

  // find the button
  const button = screen.getByRole("button");

  // simulate clicking the button
  user.click(button);

  // create assertion to make certain onUserAdd method gets called.
  expect(mockFunc).toHaveBeenCalled();
  expect(mockFunc).toHaveBeenLastCalledWith({
    name: "Jordan",
    email: "cjb@cjb.com",
  });
});
