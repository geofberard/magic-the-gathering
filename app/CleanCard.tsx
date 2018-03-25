import * as React from "react";
import {MultiCard} from "./MultiCard";

interface CleanCardProps {
    id: string;
}

export const CleanCard: React.FunctionComponent<CleanCardProps> = ({id}) => (
    <MultiCard ids={[id,id,id,id]}/>
);