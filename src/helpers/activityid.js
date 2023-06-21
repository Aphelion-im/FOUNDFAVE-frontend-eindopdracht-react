function generateActivityId(length, chars) {
  let result = '';
  for (let i = length; i > 0; --i)
    result += chars[Math.round(Math.random() * (chars.length - 1))];
  return result;
}

export { generateActivityId };
