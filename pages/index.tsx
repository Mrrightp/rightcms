import React, { useEffect } from "react";
import TopicCardComponent from "../components/topicComponents/topicCardComponent";

type Props = {
  topics?: any;
};

export default function index({ topics }: Props) {
  console.log(topics);

  return (
    <div>
      {topics.docs.map((topic) => {
        return <TopicCardComponent key={topic.id} topic={topic} />;
      })}
    </div>
  );
}
export async function getServerSideProps(context: any) {
  const pageReq = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/topics?debth=2`
  );
  const pageData = await pageReq.json();
  console.log(pageData);

  return {
    props: { topics: pageData },
  };
}
