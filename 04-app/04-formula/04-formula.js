 var MQ = MathQuill.getInterface(2);
  var formulaSpan = $('#formula').get(0);
  var formula = '';

  var formulaField = MQ.MathField(formulaSpan, {
    handlers: {
      edit: function() {
        var enteredMath = formulaField.latex();     
        formula = enteredMath;
      }
    }
  });

  $('input[type="button"]').click(function() {
    var $formula = $('<p><span class="formula"></span></p>');
    var $mathlist = $('.math');

    if($mathlist.val() !== '') {
      $formula.find('.formula').html($mathlist.val());

      MQ.StaticMath($formula.find('.formula'));
      $('.main').append($formula);
    }
  });