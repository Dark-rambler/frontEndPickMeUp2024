import { IconNameType } from "../components/icons/Index";

export interface headerProps {
  icon: IconNameType;
  link: string;
  label: string;
  hover?: boolean;
}

export interface BannerProps {
  title?: string;
  description?: string;
  image: string;
  color?: string;
  height?: string;
  responsiveHeight?: string;
  schedule?: string;
  address?: string;
}

export interface navBarInterface {
  id: number;
  icon: IconNameType;
  label?: string;
  link?: string;
}

