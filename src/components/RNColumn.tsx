import { BsDot } from "react-icons/bs";
import { FloatingWrapper } from "./FloatingWrapper";
import { RNBadge } from "./RNBadge";
import "./RNColumn.css";
import { RNColumnContentData, RNTag, ReleaseNoteColumnData, ReleaseNoteData } from "../interfaces/releaseNote.interface";
import { Button } from "react-bootstrap";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { TextButton } from "./Buttons";
import FadeIn from "../animation/FadeIn";
import yorkie, { Text as YorkieText } from 'yorkie-js-sdk';

const RNColumnContent: RNColumnContentData[] = [{ key: 0, content: "" }];

export const RNColumn = ({
    columnId,
    tag,
    content,
    data,
    // setData,
    updateData,
}: {
    columnId: number;
    tag: RNTag;
    content: RNColumnContentData[];
    data: ReleaseNoteData;
    // setData: Dispatch<SetStateAction<ReleaseNoteData>>;
    updateData: (data: ReleaseNoteData) => void;
}) => {
    const contentId = useRef(1);

    const deleteItem = (id: number) => {
        const newContent = data.content.map((column) => {
            if (column.key === columnId) {
                const newColumnContentData = column.content.filter((item) => item.key !== id);
                return { ...column, content: newColumnContentData };
            }
            return column;
        });
        updateData({ ...data, content: newContent });
    };
    const addItem = () => {
        const newColumnContentData: RNColumnContentData = { key: contentId.current, content: "" };
        const columnContentData: RNColumnContentData[] = [...data.content[columnId].content, newColumnContentData];
        const newColumnData: ReleaseNoteColumnData = data.content[columnId];
        newColumnData.content = columnContentData;

        const newContentData = data.content.map((column) => {
            if (column.key === columnId) {
                return newColumnData;
            }
            return column;
        });

        contentId.current += 1;
        updateData({ ...data, content: newContentData});
    };

    const handleInputChange = (itemId: number, inputValue: string) => {
        const newContentData = data.content.map((column) => {
            if (column.key === columnId) {
                const newColumnContentData = column.content.map((item) => {
                    if (item.key === itemId) {
                        return { ...item, content: inputValue };
                    }
                    return item;
                });
                return { ...column, content: newColumnContentData };
            }
            return column;
        });

        updateData({ ...data, content: newContentData });
    };
    return (
        <FloatingWrapper className="RNColumn" borderRadius="20px">
            <FadeIn childClassName="childClassName" width="100%">
                <div className="rnColumnTag">
                    <RNBadge tag={tag} type="tag" />
                </div>
                {data.content[columnId].content.map((it) => (
                    <div className="rnBoxItem" key={it.key}>
                        <TextButton className="deleteColumnBtn" onClick={() => deleteItem(it.key)}>
                            X
                        </TextButton>
                        <BsDot />
                        <input className="rnBoxItemContent" value={it.content} onChange={(e) => handleInputChange(it.key, e.target.value)} />
                        <div>
                            <TextButton className="connectIssueBtn">Connect Issue</TextButton>
                        </div>
                    </div>
                ))}
                <Button
                    className="addContentBtn"
                    variant="outline-success"
                    onClick={() => {
                        addItem();
                    }}
                >
                    Add Content
                </Button>
            </FadeIn>
        </FloatingWrapper>
    );
};
