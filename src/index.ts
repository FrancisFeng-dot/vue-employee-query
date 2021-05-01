import Vue from 'vue';
import EmployeeQuery from './components/EmployeeQuery.vue'

new Vue({
    el:'.app',
    components:{EmployeeQuery},
    template:'<EmployeeQuery @query="getParam" :department="department"></EmployeeQuery>',
    data:{
        department:[
            {department:'a部门',departmentId:1},
            {department:'b部门',departmentId:2},
            {department:'c部门',departmentId:3},
            {department:'d部门',departmentId:4},
        ]
    },
    methods:{
        getParam(param:any){
            console.log(param);
        }
    }
})