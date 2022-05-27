import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppRouter from './navigation';

import { HashLoader, FadeLoader } from 'react-spinners'
import { ToastContainer } from 'react-toastify';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { css } from "@emotion/react";
import { getUser } from './store/actions';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const App = () => {

  const { mainLoading, pageLoading } = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      {mainLoading && <div className='mainLoading'>
        <HashLoader color={"black"} css={override} loading={true} size={80} />
      </div>}
      {pageLoading && <div className='pageLoading'>
        <FadeLoader color={"#ccc"} css={override} loading={true} size={80} />
      </div>}

      <AppRouter />
    </>
  );
}

export default App;
