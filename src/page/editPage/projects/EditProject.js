import React, { useState } from 'react';
import axios from 'axios';

function EditProject() {
    return (
        <div className="form-container">
            <h1>Edit Projects</h1>
            <br />
            <br />
            <a href="http://localhost:3000/AddProject">Create Project</a>
            <br />
            <br />
            <a href="http://localhost:3000/Project">Read Project</a>
            <br />
            <br />
            <a href="http://localhost:3000/UpdateProject">Update Project</a>
            <br />
            <br />
            <a href="http://localhost:3000/DeleteProject">Delete Project</a>
        </div>
    );
}

export default EditProject;
