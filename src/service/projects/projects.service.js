import axios from "axios";

const PROJECT_API_URL = process.env.REACT_APP_PROJECT_API_URL;
const API_URL = process.env.REACT_APP_ALOG_API_URL;

export const PostCreateProjects = async (projectName, description, teamPk, pmPk) => {
  const projectData = {
    name: projectName,
    description: description,
    teamPk: teamPk,
    pmPk: pmPk,
  };

  console.log("Request body:", projectData);

  try {
    const res = await axios.post(`${PROJECT_API_URL}/api/projects`, projectData);
    console.log(res);
    return res;
  } catch (err) {
    console.error("프로젝트 생성 중 오류 발생:", err.response ? err.response.data : err.message);
    throw new Error("프로젝트 생성 중 오류가 발생했습니다.");
  }
};

export const GetProjects = async (keyword, sortType, page, size) => {
  try {
    const res = await axios.get(`${PROJECT_API_URL}/api/projects?sortType=${sortType}&page=${page}&size=${size}`);
    console.log("Response:", res);
    return res;
  } catch (err) {
    console.error("프로젝트 조회 중 오류 발생:", err.response ? err.response.data : err.message);
    throw new Error("프로젝트 조회 중 오류가 발생했습니다.");
  }
};

export const GetProjectDetail = async (projectPk) => {
  try {
    const res = await axios.get(`${PROJECT_API_URL}/api/projects/${projectPk}`);
    console.log("Response:", res);
    return res;
  } catch (err) {
    console.error("프로젝트 조회 중 오류 발생:", err.response ? err.response.data : err.message);
    throw new Error("프로젝트 조회 중 오류가 발생했습니다.");
  }
};

export const PatchUpdateProject = async (projectPk, name, description, teamPk, pmPk) => {
  const projectData = {
    name,
    description,
    teamPk,
    pmPk,
  };

  console.log("Request body:", projectData);

  try {
    const res = await axios.patch(`${PROJECT_API_URL}/api/projects/${projectPk}`, projectData);
    console.log(res);
    return res;
  } catch (err) {
    console.error("프로젝트 수정 중 오류 발생:", err.response ? err.response.data : err.message);
    throw new Error("프로젝트 수정 중 오류가 발생했습니다.");
  }
};

export const DeleteProject = async (projectPk) => {
  try {
    const res = await axios.delete(`${PROJECT_API_URL}/api/projects/${projectPk}`);
    console.log(res);
    return res;
  } catch (err) {
    console.error("프로젝트 삭제 중 오류 발생:", err.response ? err.response.data : err.message);
    throw new Error("프로젝트 삭제 중 오류가 발생했습니다.");
  }
};

export const GetProjectMembers = async (projectPk, keyword, page, size) => {
  try {
    const res = await axios.get(`${PROJECT_API_URL}/api/projects/${projectPk}/members`, {
      params: {
        keyword,
        page,
        size,
      },
    });
    console.log("Response:", res);
    return res.data;
  } catch (err) {
    console.error("프로젝트 멤버 조회 중 오류 발생:", err.response ? err.response.data : err.message);
    throw new Error("프로젝트 멤버 조회 중 오류가 발생했습니다.");
  }
};

export const AddProjectMembers = async (projectPk, userPks) => {
  try {
    const res = await axios.post(`${PROJECT_API_URL}/api/projects/${projectPk}/members`, {
      userPks,
    });
    console.log("Response:", res);
    return res;
  } catch (err) {
    console.error("프로젝트 멤버 추가 중 오류 발생:", err.response ? err.response.data : err.message);
    throw new Error("프로젝트 멤버 추가 중 오류가 발생했습니다.");
  }
};
