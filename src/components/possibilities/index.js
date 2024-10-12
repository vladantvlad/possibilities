import Styled from "./index.module.css";
import Button from "../ui/Button";
import cardsData from "./data.json";
import CardPossibilities from "../CardPossibilities"
import possibilityGreenCircle from "../../assets/images/possibility_green_circle.png";
import possibilityPurpleCircle from "../../assets/images/possibility_purple_circle.png";

function Possibilities(openModal) {
  const cardsStyle = [
    {
      classCard: "possibility__inner-card-organization",
      classCardTitle: "card-organization__title",
      classCardDescription: "card-organization__description",
      classCardImage: "card-organization__image",
    },
    {
      classCard: "possibility__inner-card-control",
      classCardTitle: "card-control__title",
      classCardDescription: "card-control__description",
      classCardImage: "card-control__image",
    },
    {
      classCard: "possibility__inner-card-administration",
      classCardTitle: "card-administration__title",
      classCardDescription: "card-administration__description",
      classCardImage: "card-administration__image",
    },
    {
      classCard: "possibility__inner-card-task",
      classCardTitle: "card-task__title",
      classCardDescription: "card-task__description",
      classCardImage: "card-task__image",
    },
    {
      classCard: "possibility__inner-card-monitoring",
      classCardTitle: "card-monitoring__title",
      classCardDescription: "card-monitoring__description",
      classCardImage: "card-monitoring__image",
    },
    {
      classCard: "possibility__inner-card-record",
      classCardTitle: "card-record__title",
      classCardDescription: "card-record__description",
      classCardImage: "card-record__image",
    },
  ];
  return (
    <section className={Styled["section-possibility"]}>
      <div className={"container " + Styled["possibility__wrapper"]}>
        <h2 className={Styled["possibility__title"]}>Возможности Ed Space</h2>
        <h3 className={Styled["possibility__subtitle"]}>
          Поможем перенести корпоративную академию, базу знаний, учебные курсы,
          настроим систему мотивации обучения, круглосуточная поддержка.
        </h3>
        <div className={Styled["possibility__inner"]}>
          {cardsData.map((item, index) => (
            <CardPossibilities
              img={item.title}
              title={item.title}
              description={item.description}
              classCard={cardsStyle[index].classCard}
              classCardTitle={cardsStyle[index].classCardTitle}
              classCardDescription={cardsStyle[index].classCardDescription}
              classCardImage={cardsStyle[index].classCardImage}
              key={item.title}
            ></CardPossibilities>
          ))}
        </div>
        <div className={Styled["possibility__footer"]}>
          <Button name="Попробовать бесплатно" />
        </div>
        <img
          src={possibilityGreenCircle}
          alt="green-circle"
          className={Styled["possibility__green-circle"]}
        />
        <img
          src={possibilityPurpleCircle}
          alt="purple-circle"
          className={Styled["possibility__purple-circle"]}
        />
      
      </div>
    </section>
  );
}

export default Possibilities;