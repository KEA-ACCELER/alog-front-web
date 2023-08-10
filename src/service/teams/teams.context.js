import React, { useState, createContext, useEffect } from "react";
import { GetTeamList, PostCreateTeams } from "./teams.service";

export const TeamsContext = createContext();

export const TeamsContextProvider = ({ children }) => {
  const OnCreateTeam = async (teamName, userNNList, userPk, userToken) => {
    const res = await PostCreateTeams(teamName, userNNList, userPk, userToken)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const OnDeleteTeam = async () => {
    // const res = await PostCreateTeams(teamName, userNNList, userPk);
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
  const OnGetTeamMembers = async () => {
    // const res = await PostCreateTeams(teamName, userNNList, userPk);
  };
  const OnPostTeamMembers = async () => {
    // const res = await PostCreateTeams(teamName, userNNList, userPk);
  };
  const OnDeleteTeamMembers = async () => {
    // const res = await PostCreateTeams(teamName, userNNList, userPk);
  };

  return <TeamsContext.Provider value={{ OnCreateTeam, OnGetTeamList }}>{children}</TeamsContext.Provider>;
};
