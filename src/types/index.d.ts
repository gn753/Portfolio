import { Theme, ThemeOptions } from "@mui/material/styles";

declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}
declare module "*.module.css";
declare module "*.module.scss";
declare module "*.css" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.svg" {
  const content: any;
  export default content;
}
