import * as React from "react";

export const useThemeColor = (color: string) => {
  return React.useEffect(() => {
    const themeTag = document.querySelector("meta[name=theme-color]");

    const currentThemeColor = themeTag?.getAttribute("content") || "#fff";

    if (themeTag) {
      themeTag.setAttribute("content", color);
    }

    return themeTag
      ? () => themeTag.setAttribute("content", currentThemeColor)
      : () => null;
  }, [color]);
};
