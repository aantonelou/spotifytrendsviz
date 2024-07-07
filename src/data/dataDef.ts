export interface HomepageMeta {
  title: string;
  description: string;
  favicon?: string;
}

/**
 * Hero section
 */
export interface Hero {
  imageSrc: string;
  name: string;
  subtitle: JSX.Element;
  description: JSX.Element;
}