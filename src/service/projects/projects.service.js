import axios from "axios";

const PROJECT_API_URL = process.env.REACT_APP_PROJECT_API_URL;
const API_URL = process.env.REACT_APP_ALOG_API_URL;

export const PostCreateProjects = async (projectName, description, teamPk, userToken) => {
  const projectData = {
    name: projectName,
    description: description,
    teamPk: teamPk,
    // pmPk: pmPk,
  };
  const options = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };

  console.log("Request body1:", projectData);
  console.log("user Token1: ", userToken);

  try {
    const res = await axios.post(`${API_URL}/api/projects`, projectData, options);
    console.log("res2:", res);
    console.log("user Token2: ", userToken);
    return res;
  } catch (err) {
    console.error("프로젝트 생성 중 오류 발생:", err.response ? err.response.data : err.message);
    throw new Error("프로젝트 생성 중 오류가 발생했습니다.");
  }
};

export const GetMyAllProjects = async (keyword, sortType, page, size, userToken) => {
  const options = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };
  console.log(userToken);

  try {
    const res = await axios.get(`${API_URL}/api/aggr/projects/mine?sortType=${sortType}&page=${page}&size=${size}`, options);
    console.log("Response:", res);
    return res;
  } catch (err) {
    console.error("프로젝트 조회 중 오류 발생:", err.response ? err.response.data : err.message);
    throw new Error("프로젝트 조회 중 오류가 발생했습니다.");
  }
};

export const GetMyTeamProjects = async (keyword, sortType, page, size, teamPk, userToken) => {
  const options = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };
  console.log(userToken);

  try {
    const res = await axios.get(`${API_URL}/api/aggr/projects/mine?sortType=${sortType}&page=${page}&size=${size}&teamPk=${teamPk}`, options);
    console.log("Response:", res);
    return res;
  } catch (err) {
    console.error("내 프로젝트 조회 중 오류 발생:", err.response ? err.response.data : err.message);
    throw new Error("내 프로젝트 조회 중 오류가 발생했습니다.");
  }
};

export const GetProjectDetail = async (projectPk, userToken) => {
  const options = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };
  try {
    const res = await axios.get(`${API_URL}/api/aggr/projects/${projectPk}`, options);
    console.log("Response:", res.data);
    return res;
  } catch (err) {
    console.error("프로젝트 조회 중 오류 발생:", err.response ? err.response.data : err.message);
    throw new Error("프로젝트 조회 중 오류가 발생했습니다.");
  }
};

export const PatchUpdateProject = async (projectPk, name, description, teamPk, pmPk, userToken) => {
  const projectData = {
    name,
    description,
    teamPk,
    pmPk,
  };
  const options = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };

  console.log("Request body:", projectData);

  try {
    const res = await axios.patch(`${API_URL}/api/projects/${projectPk}`, projectData, options);
    console.log(res);
    return res;
  } catch (err) {
    console.error("프로젝트 수정 중 오류 발생:", err.response ? err.response.data : err.message);
    throw new Error("프로젝트 수정 중 오류가 발생했습니다.");
  }
};

export const DeleteProject = async (projectPk, userToken) => {
  const options = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };
  try {
    const res = await axios.delete(`${API_URL}/api/projects/${projectPk}`, options);
    console.log(res);
    return res;
  } catch (err) {
    console.error("프로젝트 삭제 중 오류 발생:", err.response ? err.response.data : err.message);
    throw new Error("프로젝트 삭제 중 오류가 발생했습니다.");
  }
};

/* ----------------- 프로젝트 멤버 --------------- */

export const GetProjectMembers = async (projectPk, keyword, page, size, userToken) => {
  try {
    const res = await axios.get(`${API_URL}/api/aggr/projects/${projectPk}/members`, {
      params: {
        keyword,
        page,
        size,
      },
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log("Response:", res);
    console.log("Token:", userToken);
    return res;
  } catch (err) {
    console.error("프로젝트 멤버 조회 중 오류 발생:", err.response ? err.response.data : err.message);
    throw new Error("프로젝트 멤버 조회 중 오류가 발생했습니다.");
  }
};

export const AddProjectMembers = async (projectPk, userPks, userToken) => {
  const options = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };

  try {
    console.log(projectPk, userPks, userToken);
    const res = await axios.post(
      `${API_URL}/api/projects/${projectPk}/members`,
      {
        userPks: userPks,
      },
      options
    );
    console.log("Response:", res);
    return res;
  } catch (err) {
    console.error("프로젝트 멤버 추가 중 오류 발생:", err.response ? err.response.data : err.message);
    throw new Error("프로젝트 멤버 추가 중 오류가 발생했습니다.");
  }
};

export const RemoveProjectMembers = async (projectPk, userPks, userToken) => {
  const options = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    data: {
      userPks: userPks,
    },
  };

  try {
    console.log(projectPk, userPks, userToken);
    const res = await axios.delete(`${API_URL}/api/projects/${projectPk}/members`, options);
    console.log("Response:", res);
    return res;
  } catch (err) {
    console.error("프로젝트 멤버 삭제 중 오류 발생:", err.response ? err.response.data : err.message);
    throw new Error("프로젝트 멤버 삭제 중 오류가 발생했습니다.");
  }
};

/* ----------- 토픽 ------------- */
export const CreateTopic = async ({ projectPk, name, description, startDate, dueDate, userToken }) => {
  const requestBody = {
    name,
    description,
    startDate,
    dueDate,
  };

  const options = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };

  try {
    console.log(projectPk, name, description, startDate, dueDate, userToken);
    const res = await axios.post(`${API_URL}/api/projects/${projectPk}/topics`, requestBody, options);
    console.log("Response:", res);
    return res;
  } catch (err) {
    console.error("토픽 생성 중 오류 발생:", err.response ? err.response.data : err.message);
    throw new Error("토픽 생성 중 오류가 발생했습니다.");
  }
};

export const GetAllTopics = async ({ projectPk, keyword, sortType, page, size, userToken }) => {
  const params = {
    keyword,
    sortType,
    page,
    size,
  };

  const options = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };

  try {
    const res = await axios.get(`${API_URL}/api/aggr/projects/${projectPk}/topics?sortType=${sortType}&page=${page}&size=${size}`, options);
    console.log("project Pk", projectPk);
    console.log("Topic Response:", res);
    return res;
  } catch (err) {
    console.error("토픽 전체 조회 중 오류 발생:", err.response ? err.response.data : err.message);
    throw new Error("토픽 전체 조회 중 오류가 발생했습니다.");
  }
};

export const UpdateTopic = async ({ projectPk, topicPk, name, description, startDate, dueDate, userToken }) => {
  const body = {
    name,
    description,
    startDate,
    dueDate,
  };

  const options = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };

  try {
    const res = await axios.patch(`${API_URL}/api/projects/${projectPk}/topics/${topicPk}`, body, options);
    console.log("Response:", res);
    return res;
  } catch (err) {
    console.error("토픽 수정 중 오류 발생:", err.response ? err.response.data : err.message);
    throw new Error("토픽 수정 중 오류가 발생했습니다.");
  }
};

export const DeleteTopic = async ({ projectPk, topicPk, userToken }) => {
  const options = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };

  try {
    const res = await axios.delete(`${API_URL}/api/projects/${projectPk}/topics/${topicPk}`, options);
    console.log("Response:", res);
    return res;
  } catch (err) {
    console.error("토픽 삭제 중 오류 발생:", err.response ? err.response.data : err.message);
    throw new Error("토픽 삭제 중 오류가 발생했습니다.");
  }
};

export const GetTopicDetail = async ({ projectPk, topicPk, userToken }) => {
  const options = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };

  try {
    const res = await axios.get(`${API_URL}/api/aggr/projects/${projectPk}/topics/${topicPk}`, options);
    console.log("Response:", res);
    return res;
  } catch (err) {
    console.error("토픽 조회 중 오류 발생:", err.response ? err.response.data : err.message);
    throw new Error("토픽 조회 중 오류가 발생했습니다.");
  }
};
