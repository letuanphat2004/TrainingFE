import type { CSSProperties, ReactNode } from "react";

export type CssVariableStyle = CSSProperties & Record<`--${string}`, string | number | undefined>;

export interface SocialLink {
  icon: string;
  label: string;
  url: string;
}

export interface FooterLink {
  href: string;
  label: string;
}

export interface ServiceAction {
  href: string;
  label: string;
}

export interface TeamMemberLayout {
  cardHeight?: number;
  cardWidth?: number;
  descriptionLeft?: number;
  descriptionTop?: number;
  descriptionWidth?: number;
  featuredHeight?: number;
  featuredLeft?: number;
  featuredRadius?: number;
  featuredTop?: number;
  featuredWidth?: number;
  imageHeight?: number;
  imageLeft?: number;
  imageTop?: number;
  imageWidth?: number;
  nameLeft?: number;
  nameTop?: number;
  nameWidth?: number;
  roleLeft?: number;
  roleTop?: number;
  socialLeft?: number;
  socialTop?: number;
}

export interface TeamMemberTypography {
  descriptionFontSize?: number;
  descriptionLetterSpacing?: string;
  descriptionLineHeight?: string | number;
  nameFontSize?: number;
  nameLetterSpacing?: string;
  nameLineHeight?: string | number;
  roleFontSize?: number;
  roleLetterSpacing?: string;
  roleLineHeight?: string | number;
}

export type Content = ReactNode;
