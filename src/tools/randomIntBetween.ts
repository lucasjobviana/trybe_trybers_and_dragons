const randomIntBetween = (initialValue:number, lastValue:number) => {
  const aleatory = Math.ceil(Math.random() * lastValue);
  if (aleatory < initialValue) return aleatory + initialValue;
  return aleatory;
};

export default randomIntBetween;