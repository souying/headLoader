  $(function(){
    $("#page").find("h5").html("欢迎您使用headLoader<span style='font-size:0.75rem; float:right;'>(页面js已正常加载)</span>").find("span").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).animate({"opacity":0.3},2000);
  });