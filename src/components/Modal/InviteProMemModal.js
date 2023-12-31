import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { AddProjectMembers } from "../../service/projects/projects.service";
import { GetUserPkByNickname } from "../../service/teams/teams.service";

const InviteProMemModal = ({ show, onHide, projectPk, projectName, onMemberAdded, userToken }) => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleInviteMember = async () => {
    try {
      const nicknames = userInput.split(",").map((value) => value.trim());
      const userPks = [];

      for (const nickname of nicknames) {
        const response = await GetUserPkByNickname(nickname, userToken);
        console.log("userPk: ", response);
        userPks.push(response.data);
      }

      console.log(userPks);
      await AddProjectMembers(projectPk, userPks, userToken);
      alert("멤버가 성공적으로 추가되었습니다.");
      onHide();
      if (onMemberAdded) onMemberAdded();
    } catch (error) {
      alert("멤버 추가에 실패했습니다. 다시 시도해 주세요.");
    }
  };

  useEffect(() => {
    if (!show) {
      setUserInput("");
    }
  }, [show]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{`${projectName}에 사용자 추가`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>닉네임</Form.Label>
          <Form.Control type="text" placeholder="예: 홍길동" value={userInput} onChange={handleInputChange} />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          취소
        </Button>
        <Button variant="success" onClick={handleInviteMember}>
          팀원 추가
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InviteProMemModal;
