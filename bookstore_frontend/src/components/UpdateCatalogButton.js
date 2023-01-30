import React from 'react';
import { Link } from 'react-router-dom';

function UpdateCatalogButton() {
    return (
    <Link to="/addorupdatebook">
      <button>Update Catalog</button>
    </Link>
    );
  }

export default UpdateCatalogButton;