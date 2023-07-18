import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ReleaseNote.css";
import { FloatingWrapper } from "../../components/FloatingWrapper";

const Mock = [
    {
        title: "V1.0.10",
        date: "2023.06.04",
        content: "content",
    },
    {
        title: "V1.0.9",
        date: "2023.06.04",
        content: "content",
    },
    {
        title: "V1.0.9",
        date: "2023.06.04",
        content: "content",
    },
    {
        title: "V1.0.8",
        date: "2023.06.04",
        content: "content",
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
                            <div>{it.title}</div>
                            <div>{it.content}</div>
                        </FloatingWrapper>
                    ))}
                </div>
                <FloatingWrapper className="rightNavigation" width="150px" height="fit-content">
                    {Mock.map((it) => (
                        <a className="navContent">{it.title}</a>
                    ))}
                </FloatingWrapper>
            </div>
        </div>
    );
};
