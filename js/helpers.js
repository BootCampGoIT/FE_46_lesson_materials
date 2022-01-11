export const calculate = (x, y, callback1, callback2) => {
  const res = callback1(x, y); //0.5
  return callback2(res);
};

export const print = (data) => 5 + data; //5.5
