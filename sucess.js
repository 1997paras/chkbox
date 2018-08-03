$(document).ready(function(){
    $('.chkbox').click(function(){
        var text = "";
        $('.chkbox:checked').each(function()
        {
            text+=$(this).val()+ ',';
        });
        text=text.substring(0,text.length-1);
        $("#selected").val(text);
    
        $('#count').val($("[type='checkbox']:checked").length);
    });
});