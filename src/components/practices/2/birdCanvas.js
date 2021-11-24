import { useCallback, useEffect, useState } from 'react';
import Bird from './bird.png';

const BirdCanvas = (props) => {

  const [left, setLeft] = useState(100);
  const [leftFacing, setLeftFacing] = useState(false);

  const {
    birdSize,
    bgColor,
  } = props;

  const updateLeft = useCallback((newLeftInput) => {
    let newLeft = newLeftInput;

    if (newLeft < 5) {
      newLeft = 5;
    } else if (newLeft > 600 - birdSize) {
      newLeft = 600 - birdSize;
    }

    if (newLeft < left) {
      setLeftFacing(true);
    } else if (newLeft > left) {
      setLeftFacing(false);
    }

    setLeft(newLeft);
  }, [left, birdSize]);

  useEffect(() => {
    updateLeft(left)
  }, [birdSize, left, updateLeft])

  let birdStyle = {
    width: birdSize,
    height: birdSize,
    position: 'absolute',
    bottom: 30,
    left: left,
    transform: `scaleX(${leftFacing ? '-1' : '1'})`
  };

  return (
    <div style={{position: 'relative'}}>
      <div style={{width: 600, height: 250, backgroundColor: bgColor}}>
        <img src={Bird} style={birdStyle} alt='bird bird bird'/>
      </div>
      <button onClick={() => {updateLeft(left - 10)}}>Left</button>
      <button onClick={() => {updateLeft(left + 10)}}>Right</button>
    </div>
  );
  
};

export { BirdCanvas };
