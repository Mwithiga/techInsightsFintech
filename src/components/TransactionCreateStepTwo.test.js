import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("on initial render, the pay button is disabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "6" }} />);
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});
test("if an amount and a note is entered, the pay button becomes enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "6" }} />);
  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/note/i), "fare");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
