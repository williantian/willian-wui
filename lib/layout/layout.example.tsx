import React from 'react';
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Aside from "./aside";

export default () => {
  return (
    <div>
      <div>
        {/*<h1>第一个例子</h1>*/}
        {/*<Layout style={{height: 500}} className={'hi'}>*/}
        {/*  <Header/>*/}
        {/*  <Content/>*/}
        {/*  <Footer/>*/}
        {/*</Layout>*/}
        {/*<h1>第二个例子</h1>*/}
        {/*<Layout style={{height: 500}} className={'hi'}>*/}
        {/*  <Header/>*/}
        {/*  <Layout>*/}
        {/*    <Aside/>*/}
        {/*    <Content/>*/}
        {/*  </Layout>*/}
        {/*  <Footer/>*/}
        {/*</Layout>*/}
        {/*<h1>第三个例子</h1>*/}
        {/*<Layout style={{height: 500}} className={'hi'}>*/}
        {/*  <Header/>*/}
        {/*  <Layout>*/}
        {/*    <Content/>*/}
        {/*    <Aside/>*/}
        {/*  </Layout>*/}
        {/*  <Footer/>*/}
        {/*</Layout>*/}
        <h1>第四个例子</h1>
        <Layout style={{height: 500}} className={'hi'}>
          <Aside/>
          <Layout>
            <Header/>
            <Content/>
            <Footer/>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}