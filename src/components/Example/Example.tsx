import * as React from 'react'
import styles from './Example.module.css'

interface Props {
  text: string
}

const LibExample = ({ text }: Props) => {
  return <div className={styles.test}>From LIB: {text}</div>
}

export default LibExample
