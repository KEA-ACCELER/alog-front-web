import { Button, Fade } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./CreateReleaseNote.css";
import { RNBadge } from "../../components/RNBadge";
import { FloatingWrapper } from "../../components/FloatingWrapper";
import { RNColumn } from "../../components/RNColumn";
import { RNTag, ReleaseNoteColumnData, ReleaseNoteData } from "../../interfaces/releaseNote.interface";
import { useRef, useState } from "react";
import FadeIn from "../../animation/FadeIn";

const mockRNData: ReleaseNoteData = {
    version: "0.0.0",
    date: "2999.01.01",
    content: [
        { key: 0, content: [{ key: 0, content: "" }], tag: "new", show: false },
        { key: 1, content: [{ key: 0, content: "" }], tag: "featured", show: false },
        { key: 2, content: [{ key: 0, content: "" }], tag: "changed", show: false },
        { key: 3, content: [{ key: 0, content: "" }], tag: "fixed", show: false },
        { key: 4, content: [{ key: 0, content: "" }], tag: "deprecated", show: false },
        { key: 5, content: [{ key: 0, content: "" }], tag: "bug", show: false },
    ],
};

export const CreateReleaseNote = () => {
    const navigation = useNavigate();
    const [data, setData] = useState(mockRNData);
    const [categoryData, setCategoryData] = useState(mockRNData.content);

    const toggleTag = (tag: RNTag) => {
        let filteredData = data;
        const filteredContentData = data.content.map((it) => (it.tag === tag ? { ...it, show: !it.show } : it));
        console.log(filteredContentData);
        setCategoryData(filteredContentData);
        filteredData.content = filteredContentData;
        setData(filteredData);
    };
    return (
        <div className="CreateReleaseNote">
            <FadeIn width={"100%"}>
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
                                Version : V<input className="versionInput" placeholder={data.version} />
                            </h6>
                            <h6>
                                Update Date : <input className="updateDateInput" placeholder={data.date} />
                            </h6>
                        </div>
                        {categoryData.map((it) => (it.show ? <RNColumn columnId={it.key} tag={it.tag} key={it.key} content={it.content} data={data} setData={setData} /> : null))}
                        {/* show 값이 true인 column만 렌더링 한다 */}
                    </FloatingWrapper>
                </div>
            </FadeIn>
            <FloatingWrapper className="rightNavigation" width="220px" height="fit-content">
                <FadeIn className="rightNavigationWrapper" childClassName="childClassName">
                    <h4>Add New Category</h4>
                    <div className="tagButton" onClick={() => toggleTag("new")}>
                        <RNBadge tag={"new"} />
                    </div>
                    <div className="tagButton" onClick={() => toggleTag("featured")}>
                        <RNBadge tag={"featured"} />
                    </div>
                    <div className="tagButton" onClick={() => toggleTag("changed")}>
                        <RNBadge tag={"changed"} />
                    </div>
                    <div className="tagButton" onClick={() => toggleTag("fixed")}>
                        <RNBadge tag={"fixed"} />
                    </div>
                    <div className="tagButton" onClick={() => toggleTag("deprecated")}>
                        <RNBadge tag={"deprecated"} />
                    </div>
                    <div className="tagButton" onClick={() => toggleTag("bug")}>
                        <RNBadge tag={"bug"} />
                    </div>
                </FadeIn>
            </FloatingWrapper>
        </div>
    );
};
