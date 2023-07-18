import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ReleaseNote.css";
export const ReleaseNote = () => {
    const navigation = useNavigate();
    return (
        <div className="ReleaseNote">
            <div className="topWrapper">
                <h1>ReleaseNotes</h1>
                <Button onClick={() => navigation("/CreateReleaseNote")}>Create New</Button>
            </div>

            <div className="mainWrapper">
                <div className="releaseNotes"></div>
                <div className="rightNavigation">
                    <a className="navContent">V1.0.10</a>
                    <a className="navContent">V1.0.9</a>
                    <a className="navContent">V1.0.8</a>
                </div>
            </div>
        </div>
    );
};
