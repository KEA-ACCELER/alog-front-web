import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ReleaseNote.css";
import { FloatingWrapper } from "../../components/FloatingWrapper";
import { RNBadge } from "../../components/RNBadge";
import { ReleaseNoteData } from "../../interfaces/releaseNote.interface";

const Mock: ReleaseNoteData[] = [
    {
        version: "V1.0.10",
        date: "2023.06.04",
        content: [
            { tag: "new", content: ["content1", "content2"] },
            { tag: "featured", content: ["content"] },
            { tag: "changed", content: ["content"] },
            { tag: "fixed", content: ["content"] },
        ],
    },
    {
        version: "V1.0.9",
        date: "2023.06.04",
        content: [
            { tag: "new", content: ["content"] },
            { tag: "featured", content: ["content1", "content2"] },
            { tag: "changed", content: ["content"] },
            { tag: "fixed", content: ["content"] },
        ],
    },
    {
        version: "V1.0.8",
        date: "2023.06.04",
        content: [
            { tag: "new", content: ["content"] },
            { tag: "featured", content: ["content1", "content2"] },
            { tag: "changed", content: ["content"] },
            { tag: "fixed", content: ["content"] },
        ],
    },
    {
        version: "V1.0.7",
        date: "2023.06.04",
        content: [
            { tag: "new", content: ["content"] },
            { tag: "featured", content: ["content1", "content2"] },
            { tag: "changed", content: ["content"] },
            { tag: "fixed", content: ["content"] },
        ],
    },
];
export const ReleaseNote = () => {
    const navigation = useNavigate();
    return (
        <div className="ReleaseNote">
            <div className="topWrapper">
                <h1>ReleaseNotes</h1>
                <Button onClick={() => navigation("/CreateReleaseNote")}>Create New</Button>
            </div>

            <div className="mainWrapper">
                <div className="releaseNoteList">
                    {Mock.map((it) => (
                        <FloatingWrapper className="releaseNote" width="90%" borderRadius="25px">
                            <div className="titleWrapper">
                                <h5>{it.version}</h5>
                                <div>{it.date}</div>
                            </div>

                            {it.content.map((it) => (
                                <div className="releaseNoteContentItem">
                                    <RNBadge tag={it.tag} type="tag" />
                                    <div>
                                        {it.content.map((it) => (
                                            <div> . {it}</div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </FloatingWrapper>
                    ))}
                </div>
                <FloatingWrapper className="rightNavigation" width="150px" height="fit-content">
                    {Mock.map((it) => (
                        <a className="navContent">{it.version}</a>
                    ))}
                </FloatingWrapper>
            </div>
        </div>
    );
};
