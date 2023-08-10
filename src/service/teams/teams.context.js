import React, { useState, createContext, useEffect } from "react";
import { DeleteTeams, GetTeamInfo, GetTeamList, GetTeamMembers, PostCreateTeams } from "./teams.service";

export const TeamsContext = createContext();

export const TeamsContextProvider = ({ children }) => {
  const OnCreateTeam = async (teamName, userNNList, userPk, userToken) => {
    const res = await PostCreateTeams(teamName, userNNList, userPk, userToken)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const OnGetTeamInfo = async (teamPk, userPk, userToken) => {
    const res = await GetTeamInfo(teamPk, userPk, userToken)
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch((err) => console.log(err));
    return res;
  };
  const OnDeleteTeam = async (teamPk, userPk) => {
    const res = await DeleteTeams(teamPk, userPk)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const OnGetTeamList = async (userPk, userToken) => {
    const res = await GetTeamList(userPk, userToken)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((err) => console.log(err));

    return res;
  };
  const OnGetTeamMembers = async (teamPk, userPk, userToken) => {
    const res = await GetTeamMembers(teamPk, userPk, userToken)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((err) => console.log(err));

    return res;
  };
  const OnPostTeamMembers = async () => {
    // const res = await PostCreateTeams(teamName, userNNList, userPk);
  };
  const OnDeleteTeamMembers = async () => {
    // const res = await PostCreateTeams(teamName, userNNList, userPk);
  };

  return (
    <TeamsContext.Provider
      value={{
        OnCreateTeam,
        OnGetTeamList,
        OnDeleteTeam,
        OnGetTeamInfo,
        OnGetTeamMembers,
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
};
