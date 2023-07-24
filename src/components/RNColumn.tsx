import { BsDot } from "react-icons/bs";
import { FloatingWrapper } from "./FloatingWrapper";
import { RNBadge } from "./RNBadge";
import "./RNColumn.css";
import { RNTag } from "../interfaces/releaseNote.interface";

export const RNColumn = ({ tag }: { tag: RNTag }) => {
    return (
        <FloatingWrapper className="rnColumn" borderRadius="20px">
            <RNBadge tag={tag} type="tag" />
            <div className="rnBoxContent">
                <BsDot />
                <input className="" />
                <div>
                    Link Issue <input className="" />
                </div>
            </div>
            <div className="rnBoxContent">
                <BsDot />
                <input className="" />
                <div>
                    Link Issue <input className="" />
                </div>
            </div>
            <div className="rnBoxContent">
                <BsDot />
                <input className="" />
                <div>
                    Link Issue <input className="" />
                </div>
            </div>
        </FloatingWrapper>
    );
};
