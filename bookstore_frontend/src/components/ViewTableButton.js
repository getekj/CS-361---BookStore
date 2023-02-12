import React from 'react';
import { Link } from 'react-router-dom';

function ViewTableButton() {
    return (
    <Link to="/viewcatalog">
      <button>View Catalog</button>
    </Link>
    );
  }

export default ViewTableButton;