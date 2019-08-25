import {Deck} from "./Deck";
import {DeckBuilder} from "./DeckBuilder";
import {
    DARU_SPIRITUALIST,
    DEVOTED_CARETAKER,
    DOUBTLESS_ONE, DAWN_ELEMENTAL,
    MASTER_DECOY,
    MOTHER_OF_RUNES, PARIAH,
    PLAINS,
    SHAMANE_EN_KOR,
    SONGSTITCHER,
    SOUL_WARDEN,
    WHIPGRASS_ENTANGLER,
    WORSHIP, ANCESTOR_PROPHET, DISENCHANT, BATTLEFIELD_MEDIC, AURIFICATION, HARSH_MERCY, ARMAGEDDON_CLOCK
} from "./Cards";

export const WHITE: Deck = {
    label: "Clercs",
    cards: DeckBuilder
        .format(4)
        .sequence([
            PLAINS,
            MOTHER_OF_RUNES,
            MASTER_DECOY,
            PLAINS,
            [WORSHIP,PARIAH],
            [DEVOTED_CARETAKER, DAWN_ELEMENTAL],
            PLAINS,
            SOUL_WARDEN,
            WHIPGRASS_ENTANGLER,
            PLAINS,
            SHAMANE_EN_KOR,
            DARU_SPIRITUALIST,
            PLAINS,
            SONGSTITCHER,
            DOUBTLESS_ONE,
            PLAINS,
            BATTLEFIELD_MEDIC,
            [ANCESTOR_PROPHET, AURIFICATION, HARSH_MERCY, ARMAGEDDON_CLOCK]
        ]),
    reserve: [DISENCHANT,DISENCHANT,DISENCHANT,DISENCHANT]
};