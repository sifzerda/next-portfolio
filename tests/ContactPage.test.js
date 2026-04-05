import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactPage from "../src/app/contact/page"

// Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ success: true }),
  })
);

describe("ContactPage Form", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("submits the contact form successfully", async () => {
    render(<ContactPage />);

    fireEvent.change(screen.getByPlaceholderText(/Your name/i), {
      target: { value: "Test Name" },
    });

    fireEvent.change(screen.getByPlaceholderText(/example@email.com/i), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByPlaceholderText(/Write your message/i), {
      target: { value: "Hello!" },
    });

    fireEvent.click(screen.getByText(/Send Message/i));

    expect(
      await screen.findByText(/Thank you for your message!/i)
    ).toBeInTheDocument();
  });
});