import * as React from "react";
import {Card} from "../data/Card";
import "../../styles/component/card-component.less"

interface CardComponentProps {
    card: Card;
}

export const CardComponent: React.FunctionComponent<CardComponentProps> = ({card}) => (
    <div className={"CardComponent"}>
        <img className={"CardComponent-img"}
             alt={card.id}
             title={card.label}
             src={`http://www.magiccorporation.com/mc.php?rub=cartes&file=ajax&op=scan&num=${card.id}`}/>
    </div>
);