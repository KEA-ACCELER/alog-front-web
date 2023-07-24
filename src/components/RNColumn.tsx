import { BsDot } from "react-icons/bs";
import { FloatingWrapper } from "./FloatingWrapper";
import { RNBadge } from "./RNBadge";
import "./RNColumn.css";
import { RNColumnContentData, RNTag } from "../interfaces/releaseNote.interface";
import { Button } from "react-bootstrap";

const RNColumnContent: RNColumnContentData[] = [{ content: "" }];

export const RNColumn = ({ tag }: { tag: RNTag }) => {
    return (
        <FloatingWrapper className="RNColumn" borderRadius="20px">
            <div className="rnColumnTag">
                <RNBadge tag={tag} type="tag" />
                <button className="deleteColumnBtn">X</button>
            </div>
            {RNColumnContent.map((it) => (
                <div className="rnBoxItem">
                    <button className="deleteColumnBtn">X</button>
                    <BsDot />
                    <input className="rnBoxItemContent" />
                    <div>
                        <button className="connectIssueBtn">Connect Issue</button>
                    </div>
                </div>
            ))}
            <Button className="addContentBtn" variant="outline-success">
                Add Content
            </Button>
        </FloatingWrapper>
    );
};
