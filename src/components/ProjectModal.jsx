import React from "react";
import "./Modal.css"; // for animation

const ProjectModal = ({ project, onClose, visible }) => {
  if (!project) return null;

  return (
    <div className={`modal ${visible ? "modal-show" : "modal-hide"}`}>
      <div className="modal-content">
        <h2>{project.title}</h2>
        <p>{project.subdescription}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProjectModal;