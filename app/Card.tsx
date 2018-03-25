import * as React from "react";

import "../styles/card.less"

interface CardProps {
    id: string;
    count?: number;
}

export const Card: React.FunctionComponent<CardProps> = ({id, count}) => (
    <div className={"Card"}>
        {Array.from(Array(count).keys()).map((index) => <img alt={id}
                                                             key={index}
                                                             style={{top: `${index * 30}px`}}
                                                             className={"Card-img"}
                                                             src={`http://www.magiccorporation.com/mc.php?rub=cartes&file=ajax&op=scan&num=${id}`}/>)}
    </div>
);

Card.defaultProps = {
    count: 1
};