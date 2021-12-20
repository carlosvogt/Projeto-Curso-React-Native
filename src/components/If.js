function ComponentIf({ teste, children }) {
  if (teste) {
    return children;
  }
  return false;
}
export default ComponentIf;
