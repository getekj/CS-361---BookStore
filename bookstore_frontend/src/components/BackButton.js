import React from 'react';
import { Link } from 'react-router-dom';

function BackButton() {
    return (
    <Link to="/addorupdatebook">
      <button>Back To Previous Page</button>
    </Link>
    );
  }

export default BackButton;