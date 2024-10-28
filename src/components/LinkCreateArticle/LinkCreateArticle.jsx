import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import './LinkCreateArticle.scss';

const LinkCreateArticle = () => {
  const user = useSelector((state) => state.user);

  if (!!user.user.token) {
    return (
      <Link to="/new-article" className="create-article">
        Create article
      </Link>
    );
  }
};

export default LinkCreateArticle;