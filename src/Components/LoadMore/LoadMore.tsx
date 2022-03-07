import { log } from "console";
import React from "react";
import { LoadMoreBTN } from "./LoadMoreStyled";

interface Props {
  onLoadMore: Function;
}
function LoadMore({ onLoadMore }: Props) {
  const LIMIT_INCREASE:number = 5;

  const handleLoadMore = (number: number) => {
    onLoadMore(number);
  };

  return (
    <LoadMoreBTN onClick={() => handleLoadMore(LIMIT_INCREASE)}>
      Load More
      <i className="fa-solid fa-chevron-down"></i>
    </LoadMoreBTN>
  );
}

export default LoadMore;
