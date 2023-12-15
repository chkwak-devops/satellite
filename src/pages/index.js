import Head from 'next/head'
import Link from "next/link";
import Image from 'next/image'
import { useRouter } from "next/router";

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Segment, Grid, Header, Message, Icon, Divider, Button, Form, } from "semantic-ui-react";

const inter = Inter({ subsets: ['latin'] })

export default function Index() {


  const router = useRouter();

  const login = async () => {
    let user_id = document.getElementById("user_id").value;
    let passwd = document.getElementById("passwd").value;

    // user_id = commonUtil.removeStrSpace(user_id);
    // passwd = commonUtil.removeStrSpace(passwd);

    if (!user_id) {
      alert("user ID를 입력해 주세요");

      document.getElementById("user_id").value = "";
      document.getElementById("user_id").focus();
      return;
    }

    if (!passwd) {
      alert("password를 입력해 주세요 ");
      document.getElementById("passwd").value = "";
      document.getElementById("passwd").focus();
      return;
    }

    try {

      console.log(user_id, passwd)

      if ((user_id === "admin") && (passwd === "1111")) {
        sessionStorage.setItem("USER_ID", user_id);
        sessionStorage.setItem("USER_NAME", user_id);

        router.push("/main");
      } else {

        alert("로그인 실패하였습니다 ")

        document.getElementById("user_id").value = "";
        document.getElementById("passwd").value = "";
        document.getElementById("user_id").focus();
        router.push("/login");
      }
    } catch (e) {
      console.error(e);
      document.getElementById("user_id").value = "";
      document.getElementById("passwd").value = "";
      document.getElementById("user_id").focus();

      alert("로그인 실패하였습니다.");
    }
  };








  return (
    <>
      <div style={{
        fontSize: "120px",
        height: "200px",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "400px",
        // border: "5px dashed grey",
      }}>
        <font color="#fab601">S</font>atellite <font color="#fab601">AI</font>
      </div>
      <div style={{
        fontSize: "50px",
        // marginTop: "100px",
        textAlign: "center",
        // border: "5px dashed grey",
      }}>

        <Grid textAlign='center' style={{ height: '10vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large'>
              <Segment stacked>
                <Form.Input
                  id='user_id'
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address' />
                <Form.Input
                  id='passwd'
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />
                <Button color='teal' fluid size='large' onClick={login}>
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    </>
  )
}

Index.getInitialProps = async (ctx) => {
  const pathname = ctx.pathname;

  return { pathname };
};
