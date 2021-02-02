import Mock from "mockjs";
const data=[
    {
        type: "radio",
        title: "菜单类型",
        code: "menuType",
        defaultValue: "01",
        rule: [{required: true, message: "必填项不能为空！"},],
        iVal: "2",
        show: true,
        // options: ['页面', '目录', '按钮'],
        options: [
            {key:'1',name: '页面'},
            {key:'2',name: '目录'},
            {key:'3',name: '按钮'},
        ],
        disabled:false,
        id:1
    },
    {
        type: "input",
        title: "菜单名称",
        code: "name",
        placeholder: "菜单名称",
        width:230,
        rule: [
            {required: true, message: "必填项不能为空！"},
            {pattern: /^[^\s]*$/, message: "禁止输入空格"},
            {pattern: /^.{2,20}$/, message: "最多输入20位"}
        ],
        iVal: "菜单名称",
        show: true,
        disabled:false,
        id:2
    },
    {
        type: "numbertxt",
        title: "排序",
        code: "sort",
        width:230,
        placeholder: "请输入数字",
        rule: [
            { required: true, message: '必填项不能为空!' },
        ],
        iVal: "8",
        show: true,
        disabled:false,
        id:8
    },
    {
        type: "datepicker",
        title: "日期选择",
        code: "datepicker",
        width:230,
        placeholder: "请选择日期",
        rule: [
            { required: true, message: '必填项不能为空!' },
        ],
        iVal: ["2020-7-7","2020-7-8"],
        picker:'date',           //date | week | mont |quarter  |year |
        show: true,
        bordered:false,
        disabled:false,
        Format:'YYYY/MM/DD',        //日期选择器时间格式
        id:8
    },
    {
        type: "timepicker",
        title: "时间选择",
        code: "timepicker",
        width:230,
        placeholder: "请选择时间",
        rule: [
            { required: true, message: '必填项不能为空!' },
        ],
        iVal: ["12:08"],
        picker:'',           //date | week | mont |quarter  |year |
        show: true,
        bordered:false,
        disabled:false,
        Format:'HH:mm:ss',        //日期选择器时间格式
        id:8
    },
    {
        type: "switch",
        fieldName: "enable",
        title: "是否启用",
        code: "enable",
        defaultChecked: false,
        iVal: false,
        rule: [{required: true, message: "必填项不能为空！"}],
        show: true,
        disabled:false,
        id:9
    },
    {
        type: "slider",
        fieldName: "slider",
        title: "滑动",
        code: "slider",
        iVal: [10,90],
        rule: [{required: true, message: "必填项不能为空！"}],
        show: true,
        min:1,
        width:230,
        max:100,
        vertical:true,
        disabled:false,
        id:9
    },
    {
        type: "rate",
        fieldName: "rate",
        title: "评分",
        code: "rate",
        iVal: "3.5",
        rule: [{required: true, message: "必填项不能为空！"}],
        show: true,

        disabled:false,
        id:9
    },
    {
        type: "select",
        title: "工作餐",
        code: "Workingmeal",
        placeholder: "请选择工作餐",
        rule: [ {required: true, message: "必填项不能为空！"}],

        options :[
            {key:'xcj',name:'乡村基'},
            {key:'mdl',name:'麦当劳'},
            {key:'dks',name:'德克士'},
            {key:'shi',name:'屎'},
            {key:'ldk',name:'来得快'},
        ],
        iVal: "dks",
        width:230,
        show: false,
        disabled:false,
        id:7
    },
    {
        type: "checkbox",
        title: "饮料",
        code: "Drinks",
        placeholder: "",
        rule: [ {required: true, message: "必填项不能为空！"}],
        options :[
            {key:'kl',name:'可乐'},
            {key:'xb',name:'雪碧'},
            {key:'hn',name:'红牛'},
            {key:'xcd',name:'鲜橙多'},
            {key:'kqs',name:'农夫山泉'},
        ],
        iVal: ['kl', 'xcd'],
        width:230,
        show: false,
        disabled:false,
        id:7
    },
    {
        type: "text",
        long: "long",
        title: "描述",
        code: "menuDescr",
        placeholder: "请输入描述",
        width:230,
        rule: [
            {required: true, message: "必填项不能为空！"},
            {pattern: /^[^\s]*$/, message: "禁止输入空格"},
            {pattern: /^.{1,10}$/, message: "最少输入位，最多输入200位"}
        ],
        iVal: "",
        disabled:false,
        id:13
    },
    
    {
        type: "button",
        long: "long"
    }
];


Mock.mock(RegExp("/datalist"), "get", () => {
    return data;
});
