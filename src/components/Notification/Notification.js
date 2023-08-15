import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Notification.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Check from "../../assets/images/check.png";
import { AuthenticationContext } from "../../service/authentication/authentication.context";
import { GetNotifications } from "../../service/notification/notification.service";

function Notification({ show, handleClose }) {
  const location = useLocation();
  const navigate = useNavigate();
  const userToken = useContext(AuthenticationContext).userToken;
  const [notifications, setNotifications] = useState([]);

  const [showViewAll, setShowViewAll] = useState(false);

  const handleViewAll = () => {
    setShowViewAll(false);
    navigate("/myIssues", { state: { from: location.state } });
  };

  const getMinutesAgo = (datetime) => {
    const date = new Date(datetime);
    const now = new Date();
    return Math.round((now.getTime() - date.getTime()) / 60000);
  }

  // const alarms = [
  //   {
  //     datetime: "2023-07-27",
  //     issues: [
  //       {
  //         message: "Faker이(가) 귀하에게 이슈를 할당",
  //         time: "5분 전",
  //         content: "주관식 답변 처리",
  //         status: "해야 할 일",
  //       },
  //     ],
  //   },
  // ];

  useEffect(() => {
    GetNotifications(userToken).then((newNoti) => {
      if (newNoti != null) {
        setNotifications(newNoti);
      }
    });
  }, []);

  return (
    <div>
      <Offcanvas className="Notification" show={show} onHide={handleClose} backdrop={false} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>알림</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body">
          {notifications.map((noti, index) => (
            <div key={index} style={ {marginBottom: '5%' }}>
              <div className="issue-date">{noti.Datetime.substring(0,10)}</div>
              <div className="issue-container" key={noti.Id}>
                <div className="issue-msg-time">
                  <div className="issue-msg">{noti.MsgContent} </div> 
                </div>
                <div className="issue-img-content">
                  <img src={Check} alt="Checkmark" className="checkImg" />
                  <div className="issue-time">{getMinutesAgo(noti.Datetime) + 'min ago'}</div>
                  {/* <div className="issue-content">{'읽음 표시'}</div> */}
                </div>

                {/* <div className="issue-status">● {issue.status}</div> */}
              </div>
            </div>
          ))}
          <div className="button-container">
            <Button variant="primary" onClick={handleViewAll}>
              모두 보기
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Notification;
