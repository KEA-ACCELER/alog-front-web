import { Button, Fade } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "./CreateReleaseNote.css";
import { RNBadge } from "../../components/RNBadge";
import { FloatingWrapper } from "../../components/FloatingWrapper";
import { RNColumn } from "../../components/RNColumn";
import { RNTag, ReleaseNoteColumnData, ReleaseNoteData } from "../../interfaces/releaseNote.interface";
import { useRef, useState, useEffect } from "react";
import FadeIn from "../../animation/FadeIn";
import yorkie, { Text as YorkieText, OperationInfo } from 'yorkie-js-sdk';
import { ReleaseNote } from "./ReleaseNote";

const yorkieApiURL: string = process.env.REACT_APP_YORKIE_API_URL!;
const yorkieApiKey: string = process.env.REACT_APP_YORKIE_API_KEY!;

const initialDisplayData: ReleaseNoteData = {
  version: "",
  date: "",
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
  const navigate = useNavigate();
  const [data, setData] = useState(initialDisplayData);
  const [client, setClient] = useState(new yorkie.Client(yorkieApiURL, { apiKey: yorkieApiKey }));
  const [doc, setDoc] = useState(new yorkie.Document<ReleaseNoteData>(
    // `release-note-${Math.floor(Math.random() * 100000)}`,
    `release-note-37`,
  ));

  interface ContentDetail {
    key: number;
    content: string;
  }

  interface ContentItem {
    key: number;
    tag: string;
    content: ContentDetail[];
    show: boolean;
  }

  const toggleTag = (tag: RNTag) => {
    let filteredData = { ...data };
    const filteredContentData = data.content.map((it) => (it.tag === tag ? { ...it, show: !it.show } : it));

    console.log(filteredContentData);
    filteredData.content = [ ...filteredContentData ];
    updateData(filteredData);
  };

  const onSaveRelaseNote = () => {
    navigate("/releasenote");
  };

  const updateData = (newData: ReleaseNoteData) => {
    setData(newData);
    doc.update((root) => {
      console.log("log: update data");
      root.date = newData.date;
      root.version = newData.version;
      root.content = [...newData.content];
    }, 'update data');
  }


  useEffect(() => {
    client.activate().then(() => {
      // subscribe peer change event
      client.subscribe((event) => {
        if (event.type === 'peers-changed') {

        }
      });

      client.attach(doc).then(() => {

        const displayData = () => {
          console.log("display data")
          const root = doc.getRoot();
          console.log(root);
          setData(() => {
            const newColumnData = root.content.map((column) => {
              const newColumnContentData = column.content.map((item) => {
                const newColumnContent = {
                  issue: item.issue ? item.issue : "",
                  content: item.content,
                  key: item.key,
                }
                return newColumnContent;
              });
              return { ...column, content: newColumnContentData };
            });
            return { ...root, content: newColumnData };
          });
        };

        // 02-2. subscribe document event.
        doc.update((root) => {
          console.log(root);
          if (!root.version) {
            console.log('log: create content if not exists');
            // root = initialData;
            root.date = "";
            root.version = "";
            root.content = [...data.content];
          } else {
            console.log('log: content exists');
            displayData();
          }
        }, 'create content if not exists');

        doc.subscribe((event) => {
          if (event.type === 'snapshot') {
            // The text is replaced to snapshot and must be re-synced.
            console.log(event);
            displayData();
          } else if (event.type === 'remote-change') {
            // The text is updated by remote changes.
            console.log(event);
            displayData();
          } else if (event.type === 'local-change') {
            console.log(event);
          }
        });
        client.sync();
      });
    });
  }, []);

  return (
    <div className="CreateReleaseNote">
      <FadeIn width={"100%"}>
        <div className="mainContainer">
          <div className="topWrapper">
            <h1>Create New Release Note</h1>
            <div className="btnWrapper">
              <Button className="backBtn" variant="outline-primary" onClick={() => navigate(-1)}>
                Back
              </Button>
              <Button className="saveBtn" variant="outline-primary" onClick={() => onSaveRelaseNote()}>
                Save
              </Button>
            </div>
          </div>
          <FloatingWrapper className="newRelaseNote" width="90%" borderRadius="25px">
            <div className="detailsWrapper">
              <div className="rnTag">AL-123</div>
              <h6>
                Version : <input className="versionInput" value={data.version} onChange={(e) => {
                  updateData({ ...data, version: e.target.value })
                }} placeholder={"V0.0.0"} />
              </h6>
              <h6>
                Update Date :{" "}
                <input
                  className="updateDateInput"
                  value={data.date}
                  onChange={async (e) => {
                    updateData({ ...data, date: e.target.value })
                  }}
                  placeholder={"YYYY-MM-DD"}
                />
              </h6>
            </div>
            {data.content.map((it) =>
              it.show ? <RNColumn columnId={it.key} tag={it.tag} key={it.key} content={it.content} data={data} updateData={updateData} /> : null
            )}
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
