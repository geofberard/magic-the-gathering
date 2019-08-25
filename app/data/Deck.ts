import {CardSequence} from "./CardSequence";

export class Deck {
    label:string;
    cards: CardSequence[];
    reserve?: CardSequence;
}