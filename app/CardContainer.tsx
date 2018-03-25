import * as React from "react";

import "../styles/cardcontainer.less"

interface CardContainerProps {
    title:string;
}

export const CardContainer: React.FunctionComponent<CardContainerProps> = ({children,title}) => (
    <div className={"CardContainer"}>
        <div className={"CardContainer-title"}>{title}</div>
        <div className={"CardContainer-cards"}>
            {children}
        </div>
    </div>
);