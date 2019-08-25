import {Card} from "./Card";
import {CardSequence} from "./CardSequence";

type wtf = Array<Card | Array<Card>>;

export class DeckBuilder {
    columns: number;

    constructor(columns: number) {
        this.columns = columns;
    }

    static format(columns: number) {
        return new DeckBuilder(columns);
    }

    sequence(composition: wtf): CardSequence[] {
        return Array.from(Array(this.columns).keys())
            .map((index) => composition
                .map((card: Card| Card[]) => (card instanceof Array) ? getCardFromArray(card,index): card));
    }
};

const getCardFromArray = (cards: Card[], index: number) => cards[index < cards.length ? index : index % cards.length];