  var editor = new Behave({
    textarea: $('.main textarea'),//将行为应用于Textarea元素
    replaceTab: true,
    //如果设置为true，replaceTab会执行三个不同的操作：
    //按Tab键将插入一个选项卡，而不是循环输入焦点。
    //如果你按住Shift键，并且光标前面有一个完整的标签（不管你的标签是什么），它将会是unindent。
    //如果您选择了一个范围，上述两个规则将适用于所选的所有行（多行缩进/非缩进）
    softTabs: true,//如果设置为true，则将使用空格而不是制表符
    tabSize: 2,//如果softTabs设置为true，则此处定义使用的空间数量。如果设置为false，则CSS属性标签大小将用于定义硬标签大小。
    autoOpen: true,//如果您在同一个字符之前直接键入结束字符，它将覆盖它而不是添加它
    overwrite: true,
    autoStrip: true,//如果设置为true，并且您的光标位于两个配对字符之间，按退格键将删除这两个字符而不是第一个
    autoIndent: true,//如果设置为true，则会尝试自动缩进代码。最好使用autoOpen设置为true
    fence: false
  });

  $('input[type="button"]').click(function() {
    var $code = $('<div><pre class="javascript"></pre></div>');
    var $txt = $('.main textarea');

    if($txt.val() !== '') {
      $code.find('pre').html($txt.val());
      hljs.highlightBlock($code.find('pre'));//高亮
      $('.main').append($code);
    }
  });
