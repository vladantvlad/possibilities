import Styled from "./index.module.css";

function CardPossibilities({
  img,
  title,
  description,
  classCard,
  classCardTitle,
  classCardDescription,
  classCardImage,
}) 
{
  return (
    <div className={Styled[classCard]}>
      <img src={img} alt="cardImage" className={Styled[classCardImage]} />
      <div className={Styled[classCardTitle]}>{title}</div>
      <div className={Styled[classCardDescription]}>{description}</div>
    </div>
  );
}

export default CardPossibilities;