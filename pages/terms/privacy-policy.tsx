import Head from "next/head";
import { PrivacyPost } from "../../components/custom-post/privacy-post";

const PrivacyPolicy = () => {
  return (
    <div className="wrapper">
      <Head>
        <title>プライバシーポリシー -Mike Money Life Blog-</title>
        <meta
          name="description"
          content="Mike Money Life Blogのプライバシーポリシーです。"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes"
        />
        <meta property="og:image" content="/my-ogp.png" />
        <meta
          name="twitter:image"
          content="https://mike-travel-blog.com/my-ogp.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image:width" content={"1280"} />
        <meta property="og:image:height" content={"640"} />
        <link rel="icon" href="/icon.jpeg" />
      </Head>
      <PrivacyPost />
    </div>
  );
};

export default PrivacyPolicy;
