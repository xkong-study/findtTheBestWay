import { render, screen, fireEvent } from "@testing-library/react";
import Page2 from "../../pages/page2";

describe("Page2 component", () => {
  test("renders GoogleMap when isLoaded is true", () => {
    // Mock useJsApiLoader hook to return isLoaded as true
    jest.mock("use-js-api-loader", () => ({
      __esModule: true,
      default: () => ({ isLoaded: true }),
    }));

    render(<Page2 />);

    const mapElement = screen.getByTestId("google-map");
    expect(mapElement).toBeInTheDocument();
  });

  test("opens slide panel when clicking the ChevronLeftIcon", () => {
    // Mock useJsApiLoader hook to return isLoaded as true
    jest.mock("use-js-api-loader", () => ({
      __esModule: true,
      default: () => ({ isLoaded: true }),
    }));

    render(<Page2 />);

    const chevronIcon = screen.getByLabelText("Chevron Left Icon");
    fireEvent.click(chevronIcon);

    const slidePanel = screen.getByTestId("slide-panel");
    expect(slidePanel).toHaveClass("translate-x-0");
  });
});
