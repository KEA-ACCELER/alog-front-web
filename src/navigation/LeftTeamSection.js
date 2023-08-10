import { Outlet, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import "./LeftTeamSection.css";
import { Button } from "react-bootstrap";
import CreateTeamModal from "../components/Modal/CreateTeamModal";
import FadeIn from "../animation/FadeIn";
import { TeamsContext } from "../service/teams/teams.context";
import { AuthenticationContext } from "../service/authentication/authentication.context";

const LeftTeamSection = () => {
  const navigate = useNavigate();
  const [teams, setTeams] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const { userData, userToken } = useContext(AuthenticationContext);
  const { OnGetTeamList } = useContext(TeamsContext);

  const fetchTeamList = async () => {
    const teamList = await OnGetTeamList(userData.userPk, userToken);
    console.log("list : ", teamList);
    setTeams(teamList);
  };
  useEffect(() => {
    // 로컬 스토리지에서 팀 정보 가져오기
    fetchTeamList();
  }, []);

  return (
    <div className="LeftTeamSection">
      <FadeIn className="container">
        <Button className="all-button" variant="outline-primary" onClick={() => navigate("/All")}>
          All
        </Button>
        <Button className="private-button" variant="outline-primary" onClick={() => navigate("/Private")}>
          Private
        </Button>
        <div className="teams">
          <h4 className="teams-title">Teams</h4>
          {teams.map((it) => (
            <Button variant="outline-success" key={it.teamPk} onClick={() => navigate(`/${it.teamName}`)}>
              {it.teamName}
            </Button>
          ))}
          <Button variant="outline-success" onClick={() => setShowModal(true)}>
            +
          </Button>
          <CreateTeamModal fetchTeamList={fetchTeamList} show={showModal} handleClose={() => setShowModal(false)} />
        </div>
      </FadeIn>
      <Outlet />
    </div>
  );
};

export default LeftTeamSection;
