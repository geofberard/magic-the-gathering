import {Card} from "./Card";
import {Deck} from "./Deck";
import {CardSequence} from "./CardSequence";
import {PLAINS} from "./Cards";

export class DeckBuilder {
    columns: number;

    constructor(columns: number) {
        this.columns = columns;
    }

    static format(columns: number) {
        return new DeckBuilder(columns);
    }

    sequence(composition: CardSequence): CardSequence[] {
        console.log( composition);
        return Array.from(Array(this.columns).keys()).map(() => composition);
    }
};