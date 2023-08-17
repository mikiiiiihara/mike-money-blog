import React from "react";
import styles from "./tag-menu.module.scss";
import { Tag } from "../../types/blog";
import { TagItemVertical } from "../tag-item-vertical";
type Props = {
  tags: Tag[];
};
const TagMenuComponent: React.FC<Props> = ({ tags }) => {
  return (
    <div className={styles.tagMenu}>
      <h2>カテゴリ一覧</h2>
      {tags.map((tag) => (
        <TagItemVertical name={tag.tag} id={tag.id} key={tag.id} />
      ))}
    </div>
  );
};

TagMenuComponent.displayName = "TagMenu";
export const TagMenu = React.memo(TagMenuComponent);
