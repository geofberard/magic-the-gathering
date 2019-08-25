import * as React from "react";
import {CardSequence} from "../data/CardSequence";
import {CardComponent} from "./CardComponent";
import "../../styles/component/card-sequence-component.less"

interface CardSequenceComponentProps {
    cardSequence: CardSequence;
}

export const CardSequenceComponent: React.FunctionComponent<CardSequenceComponentProps> = ({cardSequence}) => (
    <div className={"CardSequenceComponent"}>
        {cardSequence.map((card, index) => <CardComponent card={card} key={index}/>)}
    </div>
);