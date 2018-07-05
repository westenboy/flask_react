import React from 'react';
import axios from "axios";
import qs from "qs";



class Home extends React.Component {
    static displayName = 'Index';
    constructor(props) {
        super(props);
        this.state = {redis_list: []};
        this.onBtnSubmit = this.onBtnSubmit.bind(this);
    }

    componentDidMount() {
        console.log("挂载组件");
        let arr = [];
        // this.loadRedisList()
        axios.get('/api/redis_list').then(res => {
                let len = res.data.data.length;

                for(let i=0;i<len;i++){
                    arr[i] = [];
                    arr[i]["md5"]=res.data.data[i].md5;
                    arr[i]["host"]=res.data.data[i].host;
                    arr[i]["port"]=res.data.data[i].port;
                    arr[i]["password"]=res.data.data[i].password;
                    arr[i]["add_time"]=res.data.data[i].add_time;

            }

            }
        );
        this.setState({redis_list: arr});
  }

    onBtnSubmit() {
        let host = this.refs.new_host.value;
        let port = this.refs.new_port.value;
        let password = this.refs.new_password.value;
        let params = { "host": host,"port":port,"password":password};
        let data = qs.stringify(params);

        axios.post('/api/add',
            data,
            {
                headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
            },
            }).then(response => {
                // this.loadRedisList();
                response.data;
            })
  .then(err => {
    console.log(err);
  });
    }


    onBtnExample(){};
    // onBtnExample() {
    //     this.refs.new_host.value = '127.0.0.1';
    //     this.refs.new_password.value = '';
    //     // submit
    //     this.onBtnSubmit();
    // }

    // onDelRedis(md5) {
    //     this.post('/api/del', {md5: md5}, function (r) {
    //         r = r.json();
    //         if (r.success) {
    //             this.loadRedisList();
    //         }
    //         else this.showError(r.data);
    //     }.bind(this));
    // }
    // loadRedisList() {
    //
    // }

    // render(){
    //     return (
    //         <div>
    //             <h1>Redis Instance List - Redis Monitor Informations </h1>
    //
    //             <form ref='form'>
    //                 Host: <input type="text" placeholder="Redis host / ip" ref="new_host"/>&nbsp;&nbsp;
    //                 Port: <input type="text" placeholder="6379" ref="new_port"/>&nbsp;&nbsp;
    //                 Password: <input type="text" placeholder="password" ref="new_password"/>&nbsp;&nbsp;
    //                 <input type="button" onClick={this.onBtnSubmit} defaultValue="Add / Update"/>&nbsp;
    //                 <input type="button" onClick={this.onBtnExample} defaultValue="Example"/>
    //             </form>
    //
    //             <table width="100%" border="0" cellPadding="10" cellSpacing="1" style={{margin: '1em 0'}}>
    //                 <tbody>
    //                 <tr>
    //                     <th width="40%" bgcolor="#DDEEFF">Redis Information</th>
    //                     <th width="40%" bgcolor="#DDEEFF">Add Datetime</th>
    //                     <th width="20%" bgcolor="#DDEEFF">Operation</th>
    //                 </tr>
    //                 {
    //                     this.state.redis_list.map(function (redis, i) {
    //                         return (
    //                             <tr key={i}>
    //                                 <td><Link to={redis.md5}>{redis.host}:{redis.port}</Link></td>
    //                                 <td>
    //                                     {redis.add_time} [
    //                                     <div datetime={redis.add_time || new Date()}/>
    //                                     ]
    //                                 </td>
    //                                 <td><input type="button" onClick={this.onDelRedis.bind(this, redis.md5)}
    //                                            defaultValue="Delete"/></td>
    //                             </tr>
    //                         )
    //                     }.bind(this))
    //                 }
    //                 </tbody>
    //             </table>
    //         </div>
    //     );
    // }
        render(){
            return <div>{ this.state.redis_list[0].host}</div>
        }
}

export default Home

