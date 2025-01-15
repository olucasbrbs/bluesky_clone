"use client";

import PostCard from "@/components/PostCard";
import LinkButton from "@/components/shared/LinkButton";
import Search from "@/components/shared/Search";
import { feedLinks, languageOptions, menu, posts } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Feed = () => {
  const isUserLogged = false;
  const [active, setActive] = useState<string>("discover");
  const [activeMenu, setActiveMenu] = useState<string>("home");

  return (
    <main className="mainWrapper justify-center absolute">
      {!isUserLogged ? (
        <section className="flex xl:flex-[0.55] xl:pt-8 flex-col xl:items-end xl:pr-14 max-xl:fixed max-xl:bottom-0 max-xl:w-full bg-darkGrayishBlue relative">
          <div className="flex xl:flex-col gap-3 max-xl:justify-between max-xl:p-4 max-xl:border-t border-lightGrayishBlue/30 top-8 sticky">
            <Link href="/sign-up" className="flex items-center gap-3">
              <Image
                src="/assets/bluesky_logo.png"
                alt="Logo"
                height={40}
                width={36}
              />
              <p className="xl:hidden text-white text-xl font-bold">Bluesky</p>
            </Link>
            <p className="text-white text-2xl font-extrabold leading-6 max-xl:hidden">
              Join the <br />
              conversation
            </p>
            <div className="flex gap-2">
              <LinkButton
                title="Sign up"
                color="blue"
                href="/sign-up"
                customClass="w-[70px] h-[33px] rounded-md text-sm max-xl:rounded-full"
              />
              <LinkButton
                title="Sign in"
                color="gray"
                href="/sign-in"
                customClass="w-[70px] h-[33px] rounded-md text-sm max-xl:rounded-full"
              />
            </div>
            <div className="max-xl:hidden">
              <select className="mainSelect">
                {languageOptions.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>
      ) : (
        <section className="flex-[0.55] flex flex-col justify-between px-14 max-xl:hidden relative">
          <div className="flex flex-col xl:pt-8 gap-2 top-0 sticky">
            {menu.map((item) => (
              <div
                key={item.id}
                className={`flex items-center px-8 py-3 gap-4 hover:bg-mediumGrayishBlue rounded-md text-darkGray hover:text-white cursor-pointer ${
                  activeMenu === item.title && "text-white bg-mediumGrayishBlue"
                }`}
                onClick={() => setActiveMenu(item.title)}
              >
                <p className="">
                  {activeMenu === item.title ? item.activeIcon : item.icon}
                </p>
                <p className="capitalize font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="pb-10 mx-auto bottom-0 sticky">
            <LinkButton title="Post" color="blue" href="/tweet" fullWidth />
          </div>
        </section>
      )}
      <section className="flex-1 max-md:flex-1 max-xl:flex-[0.6] flex flex-col border-x border-deepBlue">
        <div className="flex border-b border-deepBlue">
          <div
            className={`transition px-[14px] pt-[14px] hover:bg-mediumGrayishBlue`}
          >
            <p
              className={`border-b-[3px] border-transparent text-[14px] cursor-pointer font-bold pb-2 text-lightGray ${
                active === "discover" && "text-white !border-lightBlue"
              }`}
              onClick={() => setActive("discover")}
            >
              Discover
            </p>
          </div>
          <div
            className={`transition px-[14px] pt-[14px] hover:bg-mediumGrayishBlue`}
          >
            <p
              className={`border-b-[3px] border-transparent text-[14px] cursor-pointer font-bold pb-2 text-lightGray ${
                active === "feeds" && "text-white !border-lightBlue"
              }`}
              onClick={() => setActive("feeds")}
            >
              Feeds ✨
            </p>
          </div>
        </div>
        <div>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              nickname={post.nickname}
              user={post.user}
              time={post.time}
              icon={post.icon}
              content={post.content}
              comments={post.comments}
              reposts={post.reposts}
              likes={post.likes}
            />
          ))}
        </div>
      </section>
      <section className="flex-[0.7] flex flex-col pt-8 max-xl:hidden relative">
        <div className="px-[18px] mx-5 top-8 sticky">
          <Search />
          <div className="flex gap-1 px-2 py-3">
            {feedLinks.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="flex gap-1 items-center"
              >
                <p className="text-lightBlue border-b border-b-transparent transition hover:border-b-lightBlue text-sm">
                  {item.title}
                </p>{" "}
                {item.id !== "3" && (
                  <span className="text-white cursor-default">· </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Feed;
