<template>
    <div class="employeeQuery">
        <input type="text" v-model="tempName">
        <select v-model.number="tempSelected">
            <option value="0">部门</option>
            <option  v-for="option in department" :key="option.departmentId" :value="option.departmentId">{{option.department}}</option>
        </select>
        <button @click="query">查询</button>
    </div>
</template>
<script lang="ts">
import {Vue,Component,Prop} from 'vue-property-decorator'
@Component
export default class EmployeeQuery extends Vue{
    @Prop({type:String,default:''})
    name!:string
    
    @Prop({type:Number,default:0})
    selected!:number

    @Prop({
        type:Array,
        default:()=>[]
    })
    department!:{department:string,departmenId:number}[]

    tempName:string=this.name
    tempSelected:number = this.selected

    query(){
        this.$emit('query',{
            name:this.tempName,
            departmentId:this.tempSelected
        })
    }
}
</script>

<style scoped>
.employeeQuery{
color:green;
}
</style>








