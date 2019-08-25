import {Card} from "./Card";
import {CardSequence} from "./CardSequence";

export interface Deck {
    label:string;
    cards: CardSequence[];
    reserve?: Card[];
}