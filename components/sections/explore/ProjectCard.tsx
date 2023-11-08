import { Link, LinkBox, LinkOverlay, Text, useBreakpointValue } from "@chakra-ui/react";
import { getNumberWithSuffix } from "@shm/utils";
import Image from "next/image";
import React, { useEffect } from "react";
import { CategoryBadge } from "./CategoryBadge";
import { HorizontalTileButton } from "./Details/HorizontalTileButton";
import NextLink from "next/link";

export type ProjectCardProps = {
  imageURL?: string;
  title: string;
  description: string;
  category: string;
  userUpvotedState: boolean;
  projectId: string;
  onUpvoteProject: () => void;
  upvoteCount: number;
  shardeumNetwork?: any;
  projectStatus?: any;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  category,
  imageURL,
  userUpvotedState,
  onUpvoteProject,
  upvoteCount = 0,
  projectId = "",
  shardeumNetwork,
  projectStatus,
}) => {
  const numProjectsPerPage: number | undefined = useBreakpointValue({
    // lg: 160,
    lg: 160,
    base: 100,
  });

  return (
    <LinkBox
      w={{ lg: "32.5%", sm: "20.375rem" }}
      // w={{ lg: "23.5%", sm: "20.375rem" }}
      maxW={{ lg: "32.5%", sm: "20.375rem" }}
      h={{ lg: "28rem", base: "27rem" }}
      minH={{ lg: "28rem", base: "27rem" }}
      background="brand.grey-10"
      px="2rem"
      py="2rem"
      cursor="pointer"
    >
      <Image width={80} height={80} src={String(imageURL)} alt={title + "Image"} />
      <Text
        mt={{ lg: "8", sm: "6" }}
        mb={{ base: "2" }}
        color="brand.grey-80"
        fontSize={{ base: "md", sm: "md", lg: "lg" }}
        fontWeight={"bold"}
      >
        <NextLink href={`/ecosystem/${title.replace(/ /g, "")}`} passHref legacyBehavior>
          <LinkOverlay target="_blank">{title}</LinkOverlay>
        </NextLink>
      </Text>
      {/* ************upVoteButoon Commented uncomment when Needed **********  */}
      {/* <HorizontalTileButton
        maxWidth="fit-content"
        my="2"
        onClick={onUpvoteProject}
        bg={userUpvotedState ? "brand.grey-90" : "brand.grey-5"}
        color={userUpvotedState ? "brand.grey-5" : "brand.grey-90"}
      >
        <Text as="span" transform={`rotateX(${userUpvotedState ? 180 : 0}deg)`}>
          &#9650;
        </Text>
        &nbsp;&nbsp; Upvote{userUpvotedState ? "d" : ""} &nbsp;
        <Text as="span" color="brand.grey-50">
          {getNumberWithSuffix(upvoteCount)}
        </Text>
      </HorizontalTileButton> */}

      {numProjectsPerPage && description?.length > numProjectsPerPage ? (
        <Text
          mb={{ base: "8" }}
          fontSize={{ base: "md", lg: "md" }}
          textAlign="left"
          color="brand.grey-80"
        >
          {description.slice(0, numProjectsPerPage)}...
          <br />
          <br />
          <Text cursor="pointer" as="span">
            <b>Read more</b>
          </Text>
        </Text>
      ) : (
        <Text
          mb={{ base: "8" }}
          fontSize={{ base: "md", lg: "md" }}
          textAlign="left"
          color="brand.grey-80"
        >
          {description}
        </Text>
      )}

      <CategoryBadge
        category={category}
        shardeumNetwork={shardeumNetwork}
        projectStatus={projectStatus}
      />
    </LinkBox>
  );
};

export default ProjectCard;
