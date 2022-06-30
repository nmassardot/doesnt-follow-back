import React from 'react';

import { useParams } from 'react-router-dom';

import SectionFollowers from '../components/SectionFollowers';

function FollowersView() {
  const { username } = useParams();
  return (<SectionFollowers username={username} />);
}

export default FollowersView;
