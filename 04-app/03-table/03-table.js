var dataObject = [
  {
    字段:'login_name',
    说明:'登录名',
    数据类型:'C(9)',
    允许为空:'N',
    主键:'Y',
    备注: ''
  },
  {
    字段:'password',
    说明:'密码',
    数据类型:'C(9)',
    允许为空:'N',
    主键:'N',
    备注: ''
  },
  {
    字段:'chinese_name',
    说明:'中文名',
    数据类型:'C(10)',
    允许为空:'N',
    主键:'N',
    备注: ''
  },
  {
    字段:'english_name',
    说明:'性别',
    数据类型:'C(10)',
    允许为空:'Y',
    主键:'N',
    备注: ''
  },
  {
    字段:'address',
    说明:'家庭住址',
    数据类型:'C(9)',
    允许为空:'Y',
    主键:'N',
    备注: ''
  },
  {
    字段:'mobile',
    说明:'联系电话',
    数据类型:'C(9)',
    允许为空:'Y',
    主键:'N',
    备注: ''
  }

]
 
var Element = document.getElementById('main');
var hot = new Handsontable(Element,{
  data:dataObject,
  contextMenu: true,          // 启用右键菜单
    manualRowResize : true,     // 允许行拖动  
    manualColumnResize : true,  // 允许列拖动 
   // stretchH:all,//延伸列的宽度 
    //mergeCells:true，//合并单元格
    rowHeaders: true,
    //colHeaders: true 显示行头列头
    colHeaders: [
      '字段',
      '说明',
      '数据类型',
      '允许为空',
      '主键',
      '备注'
    ]

});
