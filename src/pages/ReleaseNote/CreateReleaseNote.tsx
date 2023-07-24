import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./CreateReleaseNote.css";
import { RNBadge } from "../../components/RNBadge";
import { FloatingWrapper } from "../../components/FloatingWrapper";
import { RNColumn } from "../../components/RNColumn";
import { ReleaseNoteColumnData } from "../../interfaces/releaseNote.interface";

const mock: ReleaseNoteColumnData[] = [{ tag: "new" }, { tag: "featured" }];

export const CreateReleaseNote = () => {
    const navigation = useNavigate();
    return (
        <div className="CreateReleaseNote">
            <div className="mainContainer">
                <div className="topWrapper">
                    <h1>Create New Release Note</h1>
                    <div className="btnWrapper">
                        <Button className="backBtn" variant="outline-primary" onClick={() => navigation(-1)}>
                            Back
                        </Button>
                        <Button className="saveBtn" variant="outline-primary" onClick={() => navigation("")}>
                            Save
                        </Button>
                    </div>
                </div>
                <FloatingWrapper className="newRelaseNote" width="90%" borderRadius="25px">
                    <div className="detailsWrapper">
                        <div className="rnTag">AL-123</div>
                        <h6>
                            Version : V<input className="versionInput" />.<input className="versionInput" />.<input className="versionInput" />.
                        </h6>
                        <h6>
                            Update Date : <input className="updateDateInput" />
                        </h6>
                    </div>
                    {mock.map((it) => (
                        <RNColumn tag={it.tag} />
                    ))}
                </FloatingWrapper>
            </div>
            <FloatingWrapper className="rightNavigation" width="220px" height="fit-content">
                <h4>Add New Category</h4>
                <div className="tagButton">
                    <RNBadge tag={"new"} />
                </div>
                <div className="tagButton">
                    <RNBadge tag={"featured"} />
                </div>
                <div className="tagButton">
                    <RNBadge tag={"changed"} />
                </div>
                <div className="tagButton">
                    <RNBadge tag={"fixed"} />
                </div>
                <div className="tagButton">
                    <RNBadge tag={"deprecated"} />
                </div>
                <div className="tagButton">
                    <RNBadge tag={"bug"} />
                </div>
            </FloatingWrapper>
        </div>
    );
};
