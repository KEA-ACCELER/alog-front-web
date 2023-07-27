import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ReleaseNote.css";
import { FloatingWrapper } from "../../components/FloatingWrapper";
import { RNBadge } from "../../components/RNBadge";
import { ReleaseNoteData } from "../../interfaces/releaseNote.interface";
import { BsDot } from "react-icons/bs";
import { useEffect, useState } from "react";
import FadeIn from "../../animation/FadeIn";

const Mock: ReleaseNoteData[] = [
    {
        version: "V1.0.10",
        date: "2023.06.04",
        content: [
            {
                key: 0,
                tag: "new",
                content: [
                    { key: 0, content: "Added homepage to allow user to show they are logged in" },
                    { key: 1, content: "Added a sort button allowing the user to filter the value array according to their needs." },
                ],
            },
            { key: 1, tag: "featured", content: [{ key: 0, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maecenas nec aenean a placerat vitae commodo." }] },
            { key: 2, tag: "changed", content: [{ key: 0, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maecenas nec aenean a placerat vitae commodo." }] },
            { key: 3, tag: "fixed", content: [{ key: 0, content: "Adaptation of the languages ​​and texts of the commentary part to better reflect reality" }] },
        ],
    },
    {
        version: "V1.0.9",
        date: "2023.06.04",
        content: [
            { key: 0, tag: "new", content: [{ key: 0, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maecenas nec aenean a placerat vitae commodo." }] },
            {
                key: 1,
                tag: "featured",
                content: [
                    { key: 0, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maecenas nec aenean a placerat vitae commodo." },
                    { key: 1, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maecenas nec aenean a placerat vitae commodo." },
                ],
            },
            { key: 2, tag: "changed", content: [{ key: 0, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maecenas nec aenean a placerat vitae commodo." }] },
            { key: 3, tag: "fixed", content: [{ key: 0, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maecenas nec aenean a placerat vitae commodo." }] },
        ],
    },
    {
        version: "V1.0.8",
        date: "2023.06.04",
        content: [
            { key: 0, tag: "new", content: [{ key: 0, content: "content" }] },
            {
                key: 1,
                tag: "featured",
                content: [
                    { key: 0, content: "content1" },
                    { key: 0, content: "content2" },
                ],
            },
            { key: 2, tag: "changed", content: [{ key: 0, content: "content" }] },
            { key: 3, tag: "fixed", content: [{ key: 0, content: "content" }] },
        ],
    },
    {
        version: "V1.0.7",
        date: "2023.06.04",
        content: [
            { key: 0, tag: "new", content: [{ key: 0, content: "content" }] },
            {
                key: 1,
                tag: "featured",
                content: [
                    { key: 0, content: "content1" },
                    { key: 0, content: "content2" },
                ],
            },
            { key: 2, tag: "changed", content: [{ key: 0, content: "content" }] },
            { key: 3, tag: "fixed", content: [{ key: 0, content: "content" }] },
        ],
    },
];
export const ReleaseNote = () => {
    const navigation = useNavigate();
    return (
        <div className="ReleaseNote">
            <FadeIn className="mainWrapper">
                <div className="topWrapper">
                    <h1>ReleaseNotes</h1>

                    <Button className="createNewBtn" variant="outline-primary" onClick={() => navigation("/CreateReleaseNote")}>
                        Create New
                    </Button>
                </div>
                <div className="releaseNoteList">
                    {Mock.map((it) => (
                        <FloatingWrapper className="releaseNote" width="90%" borderRadius="25px">
                            <div className="titleWrapper">
                                <h5 className="version">{it.version}</h5>
                                <div className="date">{it.date}</div>
                            </div>

                            {it.content.map((it) => (
                                <div className="releaseNoteContentItem">
                                    <RNBadge tag={it.tag} type="tag" />
                                    <div>
                                        {it.content.map((it) => (
                                            <div className="content">
                                                <BsDot width={18} />
                                                <div className="text">{it.content}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </FloatingWrapper>
                    ))}
                </div>
            </FadeIn>
            <FadeIn>
                <FloatingWrapper className="rightNavigation" width="150px" height="fit-content">
                    {Mock.map((it) => (
                        <a className="navContent">{it.version}</a>
                    ))}
                </FloatingWrapper>
            </FadeIn>
        </div>
    );
};
