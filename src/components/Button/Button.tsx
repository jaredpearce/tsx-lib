import React from 'react';

import styles from './Button.module.css';

interface Props {
  btnLabel: string;
}

const LibButton = ({ btnLabel }: Props) => {

  function onClickHandler(evt: any) {
      console.log('button clicked', evt);
  };

  return (
    <label>
      <button onClick={onClickHandler} className={styles.btn}>
        <span>{btnLabel}</span>
      </button>
    </label>
  );
};

export default LibButton;
