function mySqrt(x: number): number {
  let isLoop = true
  let latestKnowledge = Math.floor(x / 2);
  let answer = 0;
  if (x === 1) {
      return 1
  }
  while (latestKnowledge >0 && isLoop === true) {
      if (latestKnowledge * latestKnowledge === x) {
          answer = latestKnowledge
          return answer;
      }
      else if (latestKnowledge * latestKnowledge > x) {
          latestKnowledge = Math.floor(latestKnowledge / 2);
      } else {
          isLoop = false
      }
  }

  isLoop = true
  while (isLoop) {
      answer = latestKnowledge;
      latestKnowledge++
      if (latestKnowledge * latestKnowledge <= x) {
          answer = latestKnowledge
      } else {
          isLoop = false
      }
  }

  return answer;
};

