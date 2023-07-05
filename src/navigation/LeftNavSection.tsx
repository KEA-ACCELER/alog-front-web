import { Outlet } from "react-router-dom";
import "./LeftNavSection.css";
import { Button } from "react-bootstrap";

export const LeftNavSection = () => {
    return (
        <div className="LeftNavSection">
            <div className="container">
                <div>image</div>
                <div>A-Log</div>
                <div>Planning</div>
                <div>
                    <Button>TimeLine</Button>
                </div>
                <div>
                    <Button>Board</Button>
                </div>
                <div>Release</div>
                <div>
                    <Button>Notes</Button>
                </div>
            </div>
            <Outlet />
        </div>
    );
};
