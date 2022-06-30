import React from 'react';
import CardCategory from './components/CardCategory';
import CardTask from './components/CardTask';

const Card = ({fonts, colors, category, type, taskData, onClick}) => {
  switch (type) {
    case 'category':
      return (
        <CardCategory
          category={category}
          colors={colors}
          fonts={fonts}
          data={taskData}
          onClick={onClick}
        />
      );
    case 'task':
      return (
        <CardTask
          category={category}
          colors={colors}
          fonts={fonts}
          data={taskData}
          onClick={onClick}
        />
      );
    default:
      return null;
  }
};

export default Card;
