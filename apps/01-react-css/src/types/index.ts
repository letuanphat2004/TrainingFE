import type { CSSProperties } from "react";

export interface NavigationItem {
  label: string;
  path: string;
  homeMenu?: boolean;
}

export interface Service {
  eyebrow: string;
  title: string;
  icon: string;
  smallIcon: string;
  description: string;
}

export interface Professional {
  role: string;
  name: string;
  image: string;
}

export interface Assistant {
  name: string;
  role: string;
  image: string;
}

export interface BlogPost {
  category: string;
  title: string;
  image: string;
}

export type BackgroundImageStyle = CSSProperties & {
  "--background-image": string;
};
