import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopNavBar } from "./TopNavBar";
import { LeftNavSection } from "./LeftNavSection";
import Board from "../pages/Board/Board";
import Home from "../pages/Home/Home";
import { Timeline } from "../pages/Timeline/Timeline";
import { ReleaseNote } from "../pages/ReleaseNote/ReleaseNote";
import { CreateReleaseNote } from "../pages/ReleaseNote/CreateReleaseNote";
import Login from "../pages/Login/Login";
import RegisterForm from "../pages/Register/Registerform";
import MyProjects from "../pages/MyProjects/MyProjects";
import LeftTeamSection from "./LeftTeamSection";
import CreateProject from "../pages/CreateProject/CreateProject";
import MyIssues from "../pages/MyIssues/MyIssues";
import TeamInfo from "../pages/TeamInfo/TeamInfo";
import TeamSetting from "../pages/TeamSetting/TeamSetting";
import { ProjectAccess } from "../pages/ProjectSetting/ProjectAccess";
import { ProjectSetting } from "../pages/ProjectSetting/ProjectSetting";
import Profile from "../pages/Profile/Profile";
import { GithubLogin } from "../pages/Login/GithubLogin";
import React from "react";

const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TopNavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/ghLogin" element={<GithubLogin />} />
          <Route path="/registerform" element={<RegisterForm />} />
          <Route path="/teamInfo" element={<TeamInfo />} />
          <Route path="/:teamPk/teamSetting" element={<TeamSetting />} />
          <Route path="/:teamPk/:projectPk/projectSetting" element={<ProjectSetting />} />
          <Route path="/:teamPk/:projectPk/projectAccess" element={<ProjectAccess />} />
          <Route path="/profile" element={<Profile />} />
          <Route element={<LeftTeamSection />}>
            <Route path="/myProjects" element={<MyProjects />} />
            <Route path="/myIssues" element={<MyIssues />} />
            <Route path="/CreateProject" element={<CreateProject />} />
          </Route>
          <Route element={<LeftNavSection />}>
            <Route path="/:teamPk/:projectPk/Board" element={<Board />} />
            <Route path="/:teamPk/:projectPk/Timeline" element={<Timeline />} />
            <Route path="/:teamPk/:projectPk/ReleaseNote" element={<ReleaseNote />} />
            <Route path="/:teamPk/:projectPk/CreateReleaseNote/:notePk" element={<CreateReleaseNote />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
