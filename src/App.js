import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "./actions";
import CardComponent from "./components/Card";
import Loader from "./components/Loader";
import Pagination from "./components/Pagination";

function App() {
  const dispatch = useDispatch();
  const { isShow, isLoading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch({
      type: ActionTypes.POSTS_GET_REQUEST,
    });
    dispatch({
      type: ActionTypes.POST_GET_REQUEST,
      data: 1,
    });
  }, [dispatch]);

  if (isLoading) return <Loader />;
  return (
    <div className="App">
      <div className="card-container">
        <CardComponent />
        {isShow && <Pagination />}
      </div>
    </div>
  );
}

export default App;
