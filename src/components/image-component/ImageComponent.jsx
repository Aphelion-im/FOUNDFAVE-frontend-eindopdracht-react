import './ImageComponent.css';

export default function ImageComponent({ image, title, className }) {
  return <img src={image} alt={title} title={title} className={className} />;
}
