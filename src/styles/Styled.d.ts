import "styled-components";

declare module "styled-components";
export interface IDefaultTheme {
  theme: string;

  colors: {
    whitePrimary: string;
    whiteSecondary: string;
    whiteTertiary: string;

    blackPrimary: string;
    blackSecondary: string;
    blackTertiary: string;

    grayPrimary: string;
    graySecondary: string;
    grayTertiary: string;

    default: string;
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;

    success: string;
    info: string;
    warning: string;
    danger: string;
  };
}
