import React from "react";
import SingleTopic from "../../components/topicComponents/singleTopicComponent";

type Props = {
  topic: any;
};

export default function SingleTopicPage({ topic }: Props) {
  console.log(topic);

  return (
    <div>
      <SingleTopic topic={topic} />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { slug } = context.params;

  console.log(slug);

  const pageReq = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/topics/${slug}`
  );
  const pageData = await pageReq.json();

  return {
    props: { topic: pageData },
  };
}
