import './Map.css';

export default function Product({
  image,
  company,
  title,
  address,
  zipcode,
  city,
  telephone,
  email,
}) {
  return (
    <>
      <article className="map-component">
        <img src={image} alt={title} title={title} />
        <h2>{title}</h2>
        <ul>
          <li>Address: {address}</li>
          <li>Zip code: {zipcode}</li>
          <li>City: {city}</li>
          <li>Telephone: {telephone}</li>
          <li>E-mail: {email}</li>
        </ul>
      </article>
    </>
  );
}
