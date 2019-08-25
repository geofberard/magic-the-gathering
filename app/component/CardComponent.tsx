import * as React from "react";
import {Card} from "../data/Card";
import "../../styles/component/card-component.less"

interface CardComponentProps {
    card: Card;
}

export const CardComponent: React.FunctionComponent<CardComponentProps> = ({card}) => {
    const [highlighted, setHighlighted] = React.useState(false);

    return (
        <div className={`CardComponent ${highlighted ? "highlighted" : ""}`}>
            <img className={"CardComponent-img"}
                 alt={card.id}
                 title={card.label}
                 onClick={() => setHighlighted(!highlighted)}
                 onMouseLeave={() => setHighlighted(false)}
                 src={`http://www.magiccorporation.com/mc.php?rub=cartes&file=ajax&op=scan&num=${card.id}`}/>
        </div>
    );
}