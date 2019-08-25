import * as React from "react";
import {Deck} from "../data/Deck";
import {CardSequenceComponent} from "./CardSequenceComponent";
import "../../styles/component/deck-component.less"

interface DeckComponentProps {
    deck: Deck;
}

export const DeckComponent: React.FunctionComponent<DeckComponentProps> = ({deck}) => (
    <div className={"DeckComponent"}>
        <div className={"DeckComponent-title"}>Setup</div>
        <div className={"CardContainer-cards"}>
            {deck.cards.map((sequence, index) => <CardSequenceComponent cardSequence={sequence} key={index}/>)}
        </div>
        {!deck.reserve ? null : (
            <>
                <div className={"DeckComponent-title"}>Réserve</div>
                <CardSequenceComponent cardSequence={deck.reserve}/>
            </>
        )}
    </div>
);
