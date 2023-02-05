import React, { useState, Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";
// import TopicCard from '../topicCard';
import Image from "next/image";
import Link from "next/link";
import { BsEyeFill } from "react-icons/bs";
import { GiLoveHowl } from "react-icons/gi";
import { relativeDate } from "../../utilities/dayjs";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
export interface SingleTopicProps {
  topic?: any;
  topicLikes?: any;
  topicSaved?: object;
}
export default function SingleTopic({ topic }: SingleTopicProps) {
  const [followingState, setFollowingState] = useState(false);

  const [isReply, setIsReply] = useState(false);
  const serialize = (children) =>
    children.map((node, i) => {
      if (Text?.isText(node)) {
        let text = (
          <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
        );

        // if (node.bold) {
        //   text = <strong key={i}>{text}</strong>;
        // }

        // if (node.code) {
        //   text = <code key={i}>{text}</code>;
        // }

        // if (node.italic) {
        //   text = <em key={i}>{text}</em>;
        // }

        // Handle other leaf types here...

        return <Fragment key={i}>{text}</Fragment>;
      }

      if (!node) {
        return null;
      }

      switch (node.type) {
        case "h1":
          return <h1 key={i}>{serialize(node.children)}</h1>;
        case "h2":
          return <h2 key={i}>{serialize(node.children)}</h2>;
        case "h3":
          return <h3 key={i}>{serialize(node.children)}</h3>;
        case "h4":
          return <h4 key={i}>{serialize(node.children)}</h4>;
        case "h5":
          return <h5 key={i}>{serialize(node.children)}</h5>;
        case "h6":
          return <h6 key={i}>{serialize(node.children)}</h6>;
        // Iterate through all headings here...
        case "h6":
          return <h6 key={i}>{serialize(node.children)}</h6>;
        case "quote":
          return <blockquote key={i}>{serialize(node.children)}</blockquote>;
        case "ul":
          return <ul key={i}>{serialize(node.children)}</ul>;
        case "ol":
          return <ol key={i}>{serialize(node.children)}</ol>;
        case "list-item":
          return ``;
        case "paragraph":
          return <p key={i}>{serialize(node.children)}</p>;
        case "b":
          return <strong key={i}>{serialize(node.children)}</strong>;

        case "upload":
          return (
            <div className="relative md:h-[300px] my-10 w-full h-[200px]">
              <Image
                src={node.value.url}
                fill
                className="absolute object-cover"
                alt={""}
              />
            </div>
          );
        case "li":
          return <li key={i}>{serialize(node.children)}</li>;
        case "link":
          return (
            <Link href={node.url} key={i}>
              {serialize(node.children)}
            </Link>
          );

        default:
          return <p key={i}>{serialize(node.children)}</p>;
      }
    });

  return (
    <>
      <div className={`${isReply ? "hidden" : null}  px-[16px] w-full pb-8`}>
        <div className="pb-[70px] px-2">
          <div className="flex border-[#000] text-lg whitespace-nowrap pt-2 space-x-2 pb-1">
            <div className="relative w-[66px] h-[55px] ">
              {topic.author.profileImage ? (
                <Image
                  src={topic.author.profileImage.url}
                  fill
                  alt="avatar"
                  className="rounded-lg object-cover absolute"
                />
              ) : (
                <Image
                  src={"/images/dprofile.jpg"}
                  fill
                  alt="avatar"
                  className="rounded-lg object-cover absolute"
                />
              )}
            </div>
            <div className="flex items-center space-y-3 w-full space-x-1 justify-between">
              <div className="item-center justify-center">
                <div className="space-x-3">
                  <Link href="#">{topic.author.username}</Link>
                  {/* <span
                    onClick={toggleFollow}
                    className={` border-2 rounded-full px-2 text-sm`}
                  >
                    {followingState ? 'following' : 'Follow'}
                  </span> */}
                </div>
                <div className="flex space-x-2 text-xs">
                  <span>{relativeDate(topic.createdAt, true)}</span>{" "}
                  <div className="flex space-x-1 items-center">
                    <BsEyeFill />
                    <span>{topic.viwes}</span>
                  </div>
                  <Link href={`#`}>{topic.category.title}</Link>
                </div>
              </div>
            </div>
          </div>
          {topic.image ? (
            <div className="relative md:h-[300px] w-full h-[200px]">
              <Image
                src={topic?.image?.url}
                fill
                className="absolute object-cover"
                alt={""}
              />
            </div>
          ) : null}

          <div className=" flex flex-col  border-[#000] mb-1">
            <h1
              className={`md:text-2xl text-xl pt-3 pb-1  font-semibold leading-5`}
            >
              {topic.title}
            </h1>
          </div>
          <div className="border-b my-5 bg-[#ff9912] text-[#ff9912]"></div>
          <div className={` prose lg:prose-xl`}>
            {/* {topic.content.map(
              (item: any, ind) =>
                (item.type === "link" && (
                  <Link href={item.url}>{item.children[0].text}</Link>
                )) ||
                (item.type === "p" && (
                  <p key={ind}>{item.children[0].text}</p>
                )) ||
                (item.type === "h1" && <h1>{item.children[0].text}</h1>) ||
                (item.type === "h2" && <h2>{item.children[0].text}</h2>) ||
                (item.type === "h3" && <h3>{item.children[0].text}</h3>) ||
                (item.type === "h4" && <h4>{item.children[0].text}</h4>) ||
                (item.type === "h5" && <h5>{item.children[0].text}</h5>) ||
                (item.type === "h6" && <h6>{item.children[0].text}</h6>) ||
                (!item.type && (
                  <h6>
                    {item.children.map(
                      (i, id) =>
                        (item.italic && <i>{item.text}</i>) ||
                        (item.type === "link" && (
                          <Link href={item.url}>{item.children[0].text}</Link>
                        )) || <p key={id}>{i.text}</p>
                    )}
                  </h6>
                )) ||
                (item?.type === "upload" && (
                  <div className="relative md:h-[300px] w-full h-[200px]">
                    <Image
                      src={item?.value.url}
                      fill
                      className="absolute object-cover"
                      alt={""}
                    />
                  </div>
                )) ||
                (item.type === "ul" && (
                  <ul>
                    {item.children.map((i: any, id) => (
                      <li key={id}>{i.children[0].text}</li>
                    ))}
                  </ul>
                )) ||
                (item.type === "ol" && (
                  <ol>
                    {item.children.map((i: any, id) => (
                      <li key={id}>{i.children[0].text}</li>
                    ))}
                  </ol>
                ))
            )} */}
            {serialize(topic.content)}
          </div>
          <div className="mt-3">
            <div className="text-xl font-bold"> Connect with us</div>
            <div className="flex flex-wrap mt-10 max-w-full justify-between px-1 space-x-1 border-black ">
              <Link
                target={"_blank"}
                href={"https://www.facebook.com/Theunilorinforum"}
              >
                <div className="p-5 rounded-xl border bg-slate-50">
                  <AiFillFacebook className="text-2xl " />
                </div>
              </Link>

              <Link
                target={"_blank"}
                href={"https://twitter.com/unilorinforum"}
              >
                <div className="p-5 rounded-xl border bg-slate-50">
                  <AiFillTwitterSquare className="text-2xl " />
                </div>
              </Link>
              <Link
                target={"_blank"}
                href={"https://twitter.com/unilorinforum"}
              >
                <div className="p-5 rounded-xl border bg-slate-50">
                  <FaWhatsapp className="text-2xl " />
                </div>
              </Link>
              <Link
                target={"_blank"}
                href={"https://www.instagram.com/unilorinforum/"}
              >
                <div className="p-5 rounded-xl border bg-slate-50">
                  <AiFillInstagram className="text-2xl " />
                </div>
              </Link>
            </div>
          </div>
          <div className="" id="ezoic-pub-ad-placeholder-609"></div>
        </div>
      </div>
      <div className=" pb-60 ">
        <h2 className="border-b px-3 w-fit flex items-center justify-center ml-8 text-sm border-[#b6b309]">
          Topics Like this
        </h2>
      </div>
    </>
  );
}
