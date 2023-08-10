import React, { useState, createContext, useEffect } from "react";
import { PostCreateTeams } from "./teams.service";

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
    const OnGetTeamInfo = async () => {
        // const res = await PostCreateTeams(teamName, userNNList, userPk);
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

    return <TeamsContext.Provider value={{ OnCreateTeam }}>{children}</TeamsContext.Provider>;
};
