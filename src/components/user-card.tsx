"use client";

import React from "react";
import { Avatar, Button, Chip, cn, Image } from "@nextui-org/react";
import { Link } from "~/navigation";
import { Icon } from "@iconify/react";
import { type components } from "~/strapi/strapi";

export type UserItem = components["schemas"]["Account"];

export type UserCardProps = React.HTMLAttributes<HTMLDivElement> & {
  user: UserItem & { id: number };
  locale: string;
};

const Tags = (props: {
  tags: { id: number | undefined; name: string | undefined }[];
  locale: string;
}) => {
  return props.tags.map(
    (tag) =>
      tag.id &&
      tag.name && (
        <Chip
          key={tag.id}
          size="sm"
          as={Link}
          // href={`/tag/${tag.id}`}
          href={"#"}
          color="primary"
          variant="flat"
          className="capitalize"
        >
          {
            tag[
              `name${props.locale === "en" ? "" : `_${props.locale}`}` as keyof typeof tag
            ]
          }
        </Chip>
      ),
  );
};

const Scoicals = (props: { [key in string]: string | undefined }) => {
  return (
    <div className="flex items-center gap-x-2">
      {props.instagram && (
        <Button
          as={Link}
          href={props.instagram}
          isIconOnly
          variant="ghost"
          color="warning"
        >
          <Icon icon={"mdi:instagram"} className="h-6 w-6" />
        </Button>
      )}

      {props.weibo && (
        <Button
          as={Link}
          href={props.weibo}
          isIconOnly
          variant="ghost"
          color="warning"
        >
          <Icon icon={"mdi:sina-weibo"} className="h-6 w-6" />
        </Button>
      )}

      {props.twitter && (
        <Button
          as={Link}
          href={props.twitter}
          isIconOnly
          variant="ghost"
          color="warning"
        >
          <Icon icon={"mdi:twitter"} className="h-6 w-6" />
        </Button>
      )}

      {props.github && (
        <Button
          as={Link}
          href={props.github}
          isIconOnly
          variant="ghost"
          color="warning"
        >
          <Icon icon={"mdi:github"} className="h-6 w-6" />
        </Button>
      )}

      {props.youtube && (
        <Button
          as={Link}
          href={props.youtube}
          isIconOnly
          variant="ghost"
          color="warning"
        >
          <Icon icon={"mdi:youtube"} className="h-6 w-6" />
        </Button>
      )}

      {props.douyin && (
        <Button
          as={Link}
          href={props.douyin}
          isIconOnly
          variant="ghost"
          color="warning"
        >
          <Icon icon={"fa6-brands:tiktok"} className="h-6 w-6" />
        </Button>
      )}

      {props.bilibili && (
        <Button
          as={Link}
          href={props.bilibili}
          isIconOnly
          variant="ghost"
          color="warning"
        >
          <Icon icon={"ant-design:bilibili-outlined"} className="h-6 w-6" />
        </Button>
      )}

      {props.xhs && (
        <Link href={props.xhs}>
          <Image src="/logos/xhs.png" alt="xhs scoical link" className="w-12" />
        </Link>
      )}

      {props.jike && (
        <Button
          href={props.jike}
          isIconOnly
          color="warning"
          variant="ghost"
          as={Link}
        >
          <Image
            src="data:image/png;base64,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"
            alt="jike scoical link"
            className="w-8"
          />
        </Button>
      )}
    </div>
  );
};

const UserCard = (props: UserCardProps) => {
  const { nickname, avatar, bio, tags, slug } = props.user;
  const { className, children } = props;
  const user = props.user;

  const tagsData =
    tags?.data?.map((tag) => {
      return {
        id: tag.id,
        name: tag.attributes?.name,
        name_zh: tag.attributes?.name_zh,
      };
    }) ?? [];

  return (
    <div
      className={cn(
        "relative flex flex-col items-center rounded-large bg-content1 px-4 py-6 text-center shadow-small transition-all",
        className,
      )}
    >
      <Link href={`/u/${slug}`}>
        <Avatar className="h-20 w-20" src={avatar?.data?.attributes?.url} />
      </Link>
      <h3 className="mt-2 text-large font-medium">
        <Link href={`/u/${slug}`} className="hover:text-primary">
          {nickname || children}
        </Link>
      </h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {<Tags tags={tagsData} locale={props.locale} />}
      </div>
      <p className="mb-6 mt-2 line-clamp-3 text-default-600">{bio}</p>

      <Scoicals
        twitter={user.twitter?.link}
        github={user.github?.link}
        youtube={user.youtube?.link}
        douyin={user.douyin?.link}
        xhs={user.xhs?.link}
        jike={user.jike?.link}
        bilibili={user.bilibili?.link}
        instagram={user.instagram?.link}
        weibo={user.weibo?.link}
      />
    </div>
  );
};

export default UserCard;
