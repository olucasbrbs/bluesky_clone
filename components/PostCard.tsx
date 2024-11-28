import Image from "next/image";
import { FaRegCommentAlt, FaRegShareSquare, FaRegHeart } from "react-icons/fa";
// import { FaCommentAlt, FaShareSquare, FaHeart } from "react-icons/fa";
import { GoKebabHorizontal } from "react-icons/go";

interface PostCardProps {
  nickname: string;
  user: string;
  time: string;
  icon: string;
  content: string;
  comments: string;
  reposts: string;
  likes: string;
}

const PostCard = ({
  nickname,
  user,
  time,
  icon,
  content,
  comments,
  reposts,
  likes,
}: PostCardProps) => {
  return (
    <div className="px-[15px] py-2 flex gap-[10px] border-b border-[#2e4052]">
      <Image
        src={icon}
        alt="Icon"
        width={42}
        height={42}
        className="rounded-full w-[42px] h-[42px]"
      />

      <div className="flex flex-col">
        <div className="flex gap-1">
          <p className="font-bold text-[#f1f3f5] text-[15px] max-sm:hidden">
            {nickname}
          </p>
          <p className="userInfo truncate">
            @{user}.bsky.social
          </p>
          <span className="userInfo">·</span>
          <p className="userInfo">{time}</p>
        </div>

        <p className="text-[#f1f3f5] text-[15px]">{content}</p>
        <div className="flex gap-10 max-sm:gap-4 w-2/3 justify-between">
          <div className="!pl-0 postDiv ">
            <FaRegCommentAlt className="postIcon" />
            <p className="postIcon">{comments}</p>
          </div>
          <div className="postDiv">
            <FaRegShareSquare className="postIcon" />
            <p className="postIcon">{reposts}</p>
          </div>
          <div className="postDiv">
            <FaRegHeart className="postIcon" />
            <p className="postIcon">{likes}</p>
          </div>
          <div className="postDiv">
            <GoKebabHorizontal className="postIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
