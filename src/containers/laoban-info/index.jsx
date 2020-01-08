import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import { NavBar, InputItem, TextareaItem, Button, Toast } from "antd-mobile";
import AvatarSelector from "../../components/avatar-selector";
import { updateAsync } from "../../redux/action-creators";

function LaobanInfo({ history, updateAsync }) {
  const [header, setHeader] = useState("");
  const [post, setPost] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [info, setInfo] = useState("");

  //更改头像的方法 要传给AvatarSelector组件
  const changeHeader = useCallback(head => setHeader(head), []);

  const save = useCallback(async () => {
    if (header === "") {
      Toast.fail("请先选择头像", 2);
    } else {
      // 获取结果
      const result = await updateAsync({ header, post, company, salary, info });
      // 判断结果
      if (result) {
        Toast.fail(result, 2);
        history.replace('/login')
      }else {
        history.replace('/laoban')
      }
    }
  // eslint-disable-next-line
  }, [header, post, company, salary, info]);

  return (
    <div>
      <NavBar> 完善老板信息 </NavBar>
      <AvatarSelector changeHeader={changeHeader} />
      <InputItem placeholder="请输入招聘职位" onChange={val => setPost(val)}>
        招聘职位:
      </InputItem>
      <InputItem placeholder="请输入公司名称" onChange={val => setCompany(val)}>
        公司名称:
      </InputItem>
      <InputItem placeholder="请输入职位薪资" onChange={val => setSalary(val)}>
        职位薪资:
      </InputItem>
      <TextareaItem title="职位要求:" onChange={val => setInfo(val)} rows={3} />
      <Button type="primary" onClick={save}>
        保存完整信息
      </Button>
    </div>
  );
}

export default connect(null, { updateAsync })(LaobanInfo);
