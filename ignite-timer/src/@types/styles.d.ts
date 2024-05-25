import "styled-components";
import { defaultTheme } from "../components/config/theme/defaultTheme";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface defaultTheme extends ThemeType {}
}
