import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './style/YogaCards.css';

function YogaCards() {
  const [poses, setPeople] = useState([
    {
      name: 'astavakrasana',
      url: 'https://www.jasonyoga.com/wp-content/uploads/astavakrasana_red.jpg',
    },
    {
      name: 'natarajasana',
      url: 'https://www.jasonyoga.com/wp-content/uploads/natarajasana_red.jpg',
    },
    {
      name: 'ustrasana',
      url:
        'https://www.jasonyoga.com/wp-content/uploads/ustrasana_red-400x400.jpg',
    },
    {
      name: 'eka pada urdhva dhanurasana',
      url:
        'https://www.jasonyoga.com/wp-content/uploads/eka_pada_urdhva_dhanurasana_red-1-400x400.jpg',
    },
    {
      name: 'lizard pose',
      url:
        'https://www.jasonyoga.com/wp-content/uploads/lizard_pose_red-400x400.jpg',
    },
    {
      name: 'parivrtta janu sirsasana',
      url:
        'https://www.jasonyoga.com/wp-content/uploads/parivrtta_janu_sirsasana_red-400x400.jpg',
    },
    {
      name: 'yoga pose',
      url:
        'https://www.jasonyoga.com/wp-content/uploads/ustrasana_red-400x400.jpg',
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + 'left the screen!');
  };

  return (
    <div className="yogaCards">
      <div className="yogaCards__cardContainer">
        {poses.map((pose) => (
          <TinderCard
            className="swipe"
            key={pose.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, pose.name)}
            onCardLeftScreen={() => outOfFrame(pose.name)}
          >
            <div
              style={{ backgroundImage: `url(${pose.url})` }}
              className="card"
            >
              <h3>{pose.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default YogaCards;
