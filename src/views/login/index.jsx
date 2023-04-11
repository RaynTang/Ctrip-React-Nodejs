import React, { Fragment } from 'react'
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input,Space, Table, Tag } from 'antd';
import LoginForm from '@/components/LoginForm'

export default function index() {
  return (
    <Fragment>
        <LoginForm/>
    </Fragment>
    )
}
