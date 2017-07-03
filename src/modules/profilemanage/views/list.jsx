import * as React from 'react';
import '../style/index'
import Tabbar from '../../../components/tabbar/index'
import * as Select from 'antd/lib/select'
import 'antd/lib/select/style'
const Option = Select.Option;
import * as Input from 'antd/lib/input'
import 'antd/lib/input/style'
import * as Button from 'antd/lib/button'
import 'antd/lib/button/style'
import PfilemImpList from '../../../components/profilem-list/index'

class List extends React.Component {
    doImport() {

    }

    tabClickHandler(key) {
        if(key=='import') {
            global.hashHistory.push(`/profilemanage/list`)
        } else {
            global.hashHistory.push(`/profilemanage/${key}/list`)
        }  
    }

    handleChange(value) {
        console.log(`selected ${value}`);
    }

    render() {
        let tab_data = [
            {
                name: '批量导入',
                active: true,
                key: 'import'
            },
            {
                name: '批量注销',
                active: false,
                key: 'export'
            },{
                name: '日志查询',
                active: false,
                key: 'seek'
            }
        ]
        return (
            <div className="page profilemanage">
                <div className="page-content">
                    <div className='module-wapper' style={{ minHeight: `${window.innerHeight - 200}` }}>
                        <div className='module-wapper-inner edit-wapper-inner'>
                            <section>
                                <Tabbar tabClick={this.tabClickHandler.bind(this)} data={tab_data} />
                                <div className="filter">
                                    归属省：
                                    <Select defaultValue="北京" style={{ width: 200 }} onChange={this.handleChange.bind(this)}>
                                        <Option value="北京">北京</Option>
                                        <Option value="河北">河北</Option>
                                        <Option value="天津">天津</Option>
                                    </Select>
                                    请选择批量生成profile的导入文件:
                                    <Input placeholder="file path" style={{ width: 150 }}/>
                                    <Button>选择文件</Button>
                                    <span>文件记录数：<e>20</e></span>
                                    <span>成功导入数：<e>20</e></span>
                                    <span>失败数：<e>20</e></span>
                                </div>
                            </section>
                            <section>
                                <PfilemImpList />
                            </section>
                            <section className=''>
                                <Button onClick={this.doImport.bind(this)}>结果导出</Button>
                            </section>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default List;
