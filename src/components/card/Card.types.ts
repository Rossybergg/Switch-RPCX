export interface CardProps {
  title: string;
  imageSrc: string;
  image: string;
  onClick: (title: string, image: string) => void;
}
