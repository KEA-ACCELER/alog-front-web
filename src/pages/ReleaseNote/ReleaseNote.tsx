import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ReleaseNote.css";
import { FloatingWrapper } from "../../components/FloatingWrapper";

const Mock = [
    {
        version: "V1.0.10",
        date: "2023.06.04",
        content: [
            { tag: "added", content: ["content1", "content2"] },
            { tag: "fixed", content: ["content"] },
            { tag: "deleted", content: ["content"] },
            { tag: "added", content: ["content"] },
        ],
    },
    {
        version: "V1.0.9",
        date: "2023.06.04",
        content: [
            { tag: "added", content: ["content"] },
            { tag: "fixed", content: ["content1", "content2"] },
            { tag: "deleted", content: ["content"] },
            { tag: "added", content: ["content"] },
        ],
    },
    {
        version: "V1.0.8",
        date: "2023.06.04",
        content: [
            { tag: "added", content: ["content"] },
            { tag: "fixed", content: ["content"] },
            { tag: "deleted", content: ["content"] },
            { tag: "added", content: ["content"] },
        ],
    },
    {
        version: "V1.0.7",
        date: "2023.06.04",
        content: [
            { tag: "added", content: ["content"] },
            { tag: "fixed", content: ["content"] },
            { tag: "deleted", content: ["content"] },
            { tag: "added", content: ["content"] },
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
                                    <div>{it.tag}</div>
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
