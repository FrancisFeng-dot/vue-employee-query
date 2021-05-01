"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(require("vue"));
var EmployeeQuery_vue_1 = __importDefault(require("./components/EmployeeQuery.vue"));
new vue_1.default({
    el: '.app',
    components: { EmployeeQuery: EmployeeQuery_vue_1.default },
    template: '<EmployeeQuery @query="getParam" :department="department"></EmployeeQuery>',
    data: {
        department: [
            { department: 'a部门', departmentId: 1 },
            { department: 'b部门', departmentId: 2 },
            { department: 'c部门', departmentId: 3 },
            { department: 'd部门', departmentId: 4 },
        ]
    },
    methods: {
        getParam: function (param) {
            console.log(param);
        }
    }
});
