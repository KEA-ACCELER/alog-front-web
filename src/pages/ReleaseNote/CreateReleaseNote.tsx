import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./CreateReleaseNote.css";
import { RNBadge } from "../../components/RNBadge";
import { FloatingWrapper } from "../../components/FloatingWrapper";
import { BsDot } from "react-icons/bs";
import { RNColumn } from "../../components/RNColumn";

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
                        <div>
                            Version : V<input />.<input />.<input />.
                        </div>
                        <div>
                            Update Date : <input />
                        </div>
                    </div>

                    <RNColumn tag="new" />
                    <RNColumn tag="featured" />
                    <RNColumn tag="changed" />
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
