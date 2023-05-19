import React from "react";
import Button from "./Button";

interface Props {
  onPrevPage: () => void;
  onNextPage: () => void;
}

function Pagination({ onPrevPage, onNextPage }: Props) {
  return (
    <div className="flex gap-2">
      <Button onClick={onPrevPage}>Previous page</Button>
      <Button onClick={onNextPage}>Next page</Button>
    </div>
  );
}

export default Pagination;
