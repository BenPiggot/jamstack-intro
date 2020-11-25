import React from "react";
import styles from './form.module.css';

const Form = () => {

  return (
    <form className={styles.form}>
      <label className={styles.label}>
        Name
        <input className={styles.input} type="text" name="name"/>
      </label>
      <label className={styles.label}>
        Email
        <input className={styles.input} type="email" name="email" />
      </label>
      <label className={styles.label}>
        Subject
        <input className={styles.input} type="text" name="subject" />
      </label>
      <label className={styles.label}>
        Body
        <textarea className={styles.input} name="body" />
      </label>
      <button className={styles.button}>Send</button>
    </form>
  )
}

export default Form;