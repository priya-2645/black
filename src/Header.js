import React from 'react';
import gr from './../src/image/gr.png'
import { Input, Space  } from 'antd'
const { Search } = Input;
const onSearch = value => console.log(value);
function Header(props) {
    return(
        <header className="row block center">
            <div className="Appstyle" >
                <img src={gr} alt={gr}></img>
                      <Space direction="vertical">
    <Search placeholder="search for products,brand and More "size="large"onSearch={onSearch} enterButton style={{width: '80%'}} />
  </Space>
                </div>
            </header>
    )
}
export default Header;