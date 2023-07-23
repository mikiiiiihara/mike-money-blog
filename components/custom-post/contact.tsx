import React from "react";
import styles from "./custom-post.module.scss";
import parse from "html-react-parser";

const body = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeH2QS1ox-DAamCa3N3IAuc50E_z6tlUmO9yIAFgvqlf7HnSg/viewform?embedded=true" width="640" height="956" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>`;
const ContactComponent = () => {
  return (
    <div className={styles.contact}>
      <h2 className={styles.title}>お問い合わせ</h2>
      <p>以下フォームから回答お願いいたします。</p>
      <div className={styles.content}>{parse(body)}</div>
    </div>
  );
};

ContactComponent.displayName = "ContactPost";
export const ContactPost = React.memo(ContactComponent);
