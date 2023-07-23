import React, { useState } from "react";
import styles from "./menu.module.scss";
import { Tag } from "../../types/blog";
import { TagItem } from "../tag-item";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { AD_CONTENT } from "../../constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
type Props = {
  tags: Tag[];
};
const MenuComponent: React.FC<Props> = ({ tags }) => {
  const [open, setOpen] = useState(false);
  const menuClass = open ? "display_block_mobile" : "display_none_mobile";
  return (
    <>
      <div className={styles.mobile}>
        <div className={styles.hamburger} onClick={() => setOpen(!open)}>
          {open ? (
            <span className={styles.closedButton}>×</span>
          ) : (
            <Image
              src="/menu_open.png"
              width={40} // 元の画像の実際の幅を指定
              height={40} // 元の画像の実際の高さを指定
              priority
              style={{ position: "relative" }}
              alt="thumbnail"
            />
          )}
        </div>
      </div>
      <div className={`${menuClass} display_inline_block_pc`}>
        <div className={styles.menu}>
          <div className={styles.displayNoneMobile}>
            <div>
              <h2>カテゴリ一覧</h2>
              {tags.map((tag) => (
                <TagItem name={tag.tag} id={tag.id} key={tag.id} />
              ))}
            </div>
            <div className={styles.profile}>
              <h2>プロフィール</h2>
              <div
                style={{
                  display: "flex", // Make this a flex container
                  justifyContent: "center", // Center children horizontally
                  alignItems: "center", // Center children vertically
                  height: "auto", // Use 100% of the viewport height
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "50%",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: `url(/icon.JPG)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
              </div>
              <div className={styles.me}>
                <h3>Mike</h3>
                <Link
                  href="https://www.instagram.com/mike_money_life/"
                  className={styles.instagram}
                >
                  <FontAwesomeIcon icon={faInstagram} size="xs" />
                </Link>
              </div>
              <p>
                ・20代資産形成術を分かりやすく解説
                <br />
                ・経済学部出身×株式投資歴4年
                <br />
                ・20代会社員
                <br />
                ・新卒一年目で資産120万円達成！
                <br />
                ・株式投資、積立NISA、仮想通貨、FX
                <br />
              </p>
            </div>
            {/* 広告欄
            <div className={styles.adContent}>
              <h2>ピックアップ</h2>
              {parse(AD_CONTENT)}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

MenuComponent.displayName = "Menu";
export const Menu = React.memo(MenuComponent);
