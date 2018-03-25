import * as React from "react";
import {Card} from "./Card";

import "../styles/cardcontainer.less"
import {CardContainer} from "./CardContainer";
import {MultiCard} from "./MultiCard";
import {CleanCard} from "./CleanCard";

export const App = () => (
    <>
        <CardContainer title={"Clerc"}>
            <CleanCard id={"7770"}/>
            <MultiCard ids={["8031","8031","8176","8176"]}/>
            <CleanCard id={"2754"}/>
            <CleanCard id={"6524"}/>
            <CleanCard id={"8111"}/>
            <CleanCard id={"6741"}/>
            <MultiCard ids={["9033","9033","5067","5067"]}/>
            <CleanCard id={"8907"}/>
            <CleanCard id={"9031"}/>
            <CleanCard id={"8640"}/>
        </CardContainer>
        <CardContainer title={"Peut être ..."}>
            <Card id={"8554"}/>
            <Card id={"8576"}/>
            <Card id={"8102"}/>
            <Card id={"267"}/>
            <Card id={"5011"}/>
            <Card id={"8015"}/>
            <Card id={"8884"}/>
            <Card id={"8887"}/>
            <Card id={"8696"}/>
            <Card id={"8862"}/>
            <Card id={"4474"}/>
            <Card id={"9032"}/>
        </CardContainer>
    </>
);