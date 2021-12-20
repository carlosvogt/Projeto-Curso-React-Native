import React from 'react';
import Filho from './Filho';

function Pai() {
  const x = 13;
  const y = 30;
  return (
    <>
      <Filho a={x} b={y} />
      <Filho a={x + 100} b={y + 200} />
    </>
  );
}
export default Pai;
