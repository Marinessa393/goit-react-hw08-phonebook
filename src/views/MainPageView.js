import React from 'react';

const styles = {
  h1: {
    textAlign: 'center',
    marginTop: 120,
    color: 'blue',
  },

  strong: {
    textAlign: 'center',
    marginTop: 40,
    color: 'orange',
    fontSize: 30,
    fontWeight: 700,
  },
};

const MainPageView = () => {
  return (
    <div>
      <h1 style={styles.h1}>Hello everybody, my name is Verka Serdyuchka</h1>
      <p style={styles.strong}>Let`s begin to dance!</p>
    </div>
  );
};

export default MainPageView;
