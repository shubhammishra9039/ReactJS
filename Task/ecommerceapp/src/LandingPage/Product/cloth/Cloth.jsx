import React, { useState } from 'react';
import useFetch from '../../../CustomHook/useFetch';
import Card from './Card';

function Cloth() {
  let clothData = useFetch();

  console.log(clothData);

  return (
    <>
      {clothData.map(({ id, image, title, price }) => (
        <div key={id}>
          <Card id={id} image={image} title={title} price={price} />
        </div>
      ))}
    </>
  );
}

export default Cloth;
