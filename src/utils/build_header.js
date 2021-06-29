export const build_header = () => {
  const baseHeader = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  return { ...baseHeader };
};
