import React, { useState, createContext, useEffect } from "react";
import { PostCreateTeams } from "./teams.service";

export const TeamsContext = createContext();

export const TeamsContextProvider = ({ children }) => {
    const OnCreateTeam = async () => {
        const res = await PostCreateTeams(teamName, userNNList, userPk);
    };
    return <TeamsContext.Provider value={{ OnCreateTeam }}>{children}</TeamsContext.Provider>;
};
