import {Deck} from "./Deck";
import {DeckBuilder} from "./DeckBuilder";
import {
    DARU_SPIRITUALIST,
    DEVOTED_CARETAKER,
    DOUBTLESS_ONE,
    MASTER_DECOY,
    MOTHER_OF_RUNES,
    PLAINS,
    SHAMANE_EN_KOR,
    SONGSTITCHER,
    SOUL_WARDEN,
    WHIPGRASS_ENTANGLER,
    WORSHIP
} from "./Cards";

export const WHITE: Deck = {
    label: "Blanc Clerc",
    cards: DeckBuilder.format(4)
        .sequence([
            PLAINS,
            MOTHER_OF_RUNES,
            MASTER_DECOY,
            PLAINS,
            WORSHIP,
            DEVOTED_CARETAKER,
            PLAINS,
            SOUL_WARDEN,
            WHIPGRASS_ENTANGLER,
            PLAINS,
            SHAMANE_EN_KOR,
            DARU_SPIRITUALIST,
            PLAINS,
            SONGSTITCHER,
            DOUBTLESS_ONE
        ])
};