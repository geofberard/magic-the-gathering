import * as React from "react";

import "../../styles/component/card.less"

interface MultiCardProps {
    ids: string[];
}

export const MultiCard: React.FunctionComponent<MultiCardProps> = ({ids}) => (
    <div className={"Card"}>
        {ids.map((id, index) => (
            <img alt={id}
                 key={index}
                 style={{top: `${index * 30}px`}}
                 className={"Card-img"}
                 src={`http://www.magiccorporation.com/mc.php?rub=cartes&file=ajax&op=scan&num=${id}`}/>))}
    </div>
);