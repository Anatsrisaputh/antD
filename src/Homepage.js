import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Layout } from 'antd';


const { Header, Footer, Content } = Layout;

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Layout>

          <Header> <h1> This is Homepage page</h1> </Header>

          <Content>

            <Link to="/facebook"> facebook</Link>
            <Link to="/resume"> Go to resume</Link>
            <Link to="/app"> Go to App</Link>

          </Content>

          <Footer>Footer</Footer>

        </Layout>


      </div>
    )
  }
}
