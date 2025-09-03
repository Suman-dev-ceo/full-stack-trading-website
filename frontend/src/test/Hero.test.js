import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landingPage/home/Hero";

describe("Hero Component", () => {
  test("render hero image", () => {
    render(<Hero />);
    const heroImg = screen.getByAltText("Hero Img");
    expect(heroImg).toBeInTheDocument();
    expect(heroImg).toHaveAttribute("src", "media/images/homeHero.png");
  });
  test("render signup button", () => {
    render(<Hero />);
    const signupButton = screen.getByRole("button", {
      name: /Sign up for free/i,
    });
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn-primary");
  });
});
