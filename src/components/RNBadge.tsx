import { RNTag } from "../interfaces/releaseNote.interface";

export const RNBadge = ({ tag }: { tag: RNTag }) => {
    return <div>{tag}</div>;
};
