import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import checkImageURL from '../../utils/checkImageURL';

import authorIcon from '../../assets/icons/user.png';
import './Person.scss';

const Person = ({ isAuthor = false, author = null, dataOfUpdate }) => {
  if (author) {
    return <Author author={author} dataOfUpdate={dataOfUpdate} />;
  }

  return <User />;
};

const User = () => {
  const user = useSelector((state) => state.user);
  const image = user.user.image ? user.user.image : authorIcon;
  const [stateImage, setStateImage] = useState(image);

  useEffect(() => {
    setStateImage(image);
  }, [image]);

  if (!user.user.username) {
    return;
  }

  return (
    <div className="person">
      <div className="person__description">
        <p className="person__name">{user.user.username}</p>
      </div>
      <img src={stateImage} className="person__image" alt="icon user" onError={() => setStateImage(authorIcon)} />
    </div>
  );
};

const Author = ({ author, dataOfUpdate }) => {
  const [image, setImage] = useState(author.image);

  return (
    <div className="person">
      <div className="person__description">
        <p className="person__name">{author.username}</p>
        <p className="person__date-of-publication">{format(dataOfUpdate, 'PP')}</p>
      </div>
      <img src={image} className="person__image" onError={() => setImage(authorIcon)} alt="icon author" />
    </div>
  );
};

export default Person;
