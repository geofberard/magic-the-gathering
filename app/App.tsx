import * as React from "react";

import {DeckComponent} from "./component/DeckComponent";
import {WHITE} from "./data/Decks";

export const App = () => (
    <>
        <DeckComponent deck={WHITE}/>
    </>
);