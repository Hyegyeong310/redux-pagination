import React, { useCallback, useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "../actions";

function PaginationComponent() {
  const dispatch = useDispatch();
  const { total, activeId } = useSelector((state) => state.post);
  const [firstDisabled, setFirstDisabled] = useState(false);
  const [lastDisabled, setLastDisabled] = useState(false);
  const [displayedRange, setDisplayedRange] = useState([2, 3, 4, 5, 6]);

  useEffect(() => {
    if (activeId === 1) {
      setFirstDisabled(true);
    }
    if (activeId === total) {
      setLastDisabled(true);
    }
  }, [activeId, total]);

  useEffect(() => {
    if (activeId < 4) {
      setDisplayedRange([2, 3, 4, 5, 6]);
    } else if (activeId >= 4 && activeId < total - 2) {
      setDisplayedRange([
        activeId - 2,
        activeId - 1,
        activeId,
        activeId + 1,
        activeId + 2,
      ]);
    } else if (activeId >= total - 2) {
      setDisplayedRange([
        total - 5,
        total - 4,
        total - 3,
        total - 2,
        total - 1,
      ]);
    }
  }, [activeId, total]);

  const onClickPrevOrFirst = useCallback(
    (isFirst = false) => {
      if (activeId === 1) return;
      dispatch({
        type: ActionTypes.POST_GET_REQUEST,
        data: isFirst ? 1 : activeId - 1,
      });
    },
    [activeId, dispatch]
  );

  const onClickGoNextOrLast = useCallback(
    (isLast = false) => {
      if (activeId === total) return;
      dispatch({
        type: ActionTypes.POST_GET_REQUEST,
        data: isLast ? total : activeId + 1,
      });
    },
    [activeId, dispatch, total]
  );

  const onClickPage = useCallback(
    (page) => {
      dispatch({
        type: ActionTypes.POST_GET_REQUEST,
        data: page,
      });
    },
    [dispatch]
  );

  return (
    <Pagination style={{ marginTop: 10 }}>
      <Pagination.First
        onClick={() => onClickPrevOrFirst(true)}
        disabled={firstDisabled}
      />
      <Pagination.Prev
        onClick={() => onClickPrevOrFirst()}
        disabled={firstDisabled}
      />
      <Pagination.Item onClick={() => onClickPage(1)} active={activeId === 1}>
        {1}
      </Pagination.Item>
      <Pagination.Ellipsis disabled />
      {displayedRange.map((page) => (
        <Pagination.Item
          key={page}
          active={page === activeId}
          onClick={() => onClickPage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
      <Pagination.Ellipsis disabled />
      <Pagination.Item
        onClick={() => onClickPage(total)}
        active={activeId === total}
      >
        {total}
      </Pagination.Item>
      <Pagination.Next
        onClick={() => onClickGoNextOrLast()}
        disabled={lastDisabled}
      />
      <Pagination.Last
        onClick={() => onClickGoNextOrLast(true)}
        disabled={lastDisabled}
      />
    </Pagination>
  );
}

export default PaginationComponent;
