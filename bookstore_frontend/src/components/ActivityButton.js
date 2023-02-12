import React from 'react';
import { Link } from 'react-router-dom';

function ActivityButton() {
    return (
    <Link to="/activity">
      <button>Activities</button>
    </Link>
    );
  }

export default ActivityButton;