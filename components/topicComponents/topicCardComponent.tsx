import Image from "next/image";
import React from "react";
import Link from "next/link";
import { relativeDate } from "../../utilities/dayjs";
import {
  BsThreeDots,
  BsDot,
  BsSuitHeartFill,
  BsFillEyeFill,
} from "react-icons/bs";
type Props = {
  topic: any;
};

export default function TopicCardComponent({ topic }: Props) {
  console.log(topic);

  return (
    <div className="flex  justify-between space-x-2 border-b border-Gray h-fit py-2 px-1 topiccard">
      <div className="relative mt-3 w-[60px] h-[60px] pt-1">
        {topic.author.profileImage ? (
          <Image
            src={topic.author.profileImage.url}
            alt="jjj"
            className="rounded-lg absolute object-cover topic-card-avatar"
            fill
          />
        ) : (
          <Image
            src={"/images/dprofile.jpg"}
            alt="jjj"
            className="rounded-lg absolute object-cover topic-card-avatar"
            fill
          />
        )}
      </div>
      <div className="w-full mt-4 flex flex-col  ">
        <div className="flex w-full  justify-between">
          <div className="flex items-end">
            <span className="author">{topic.author.username}</span>
            <BsDot />
            <span className="time">{relativeDate(topic.createdAt, true)}</span>
          </div>
          <BsThreeDots />
        </div>
        <div>
          <Link href={`/topic/${topic.id}`}>
            <h2 className="">{topic.title}</h2>
          </Link>
        </div>
        <div>
          <p>
            Sometime in 2021, the idea for a forum came up, somewhere for so...
          </p>
        </div>
        <div className="flex justify-between  items-end">
          <div className="flex">
            <div className="flex items-center ">
              <BsSuitHeartFill className="text-orange icons" />
              <span className="number">10K</span>
            </div>
            <BsDot />
            <div className="flex items-center">
              <BsFillEyeFill className="text-orange icons" />
              <span className="number">40</span>
            </div>
          </div>
          <div className="border rounded-full border-black text-[10px] px-4 py-0">
            <Link href="#">{topic.category.title}</Link>
          </div>
        </div>

        {topic.image ? (
          <div className="relative w-full h-[264px] mt-1">
            <Image
              src={topic.image?.url}
              alt=""
              fill
              className="rounded-md object-cover absolute"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
