var english = document.getElementById("en"),
    japanese = document.getElementById("jp"),
    chinese = document.getElementById("cn"),
    change_text = document.getElementById("translate");

english.addEventListener("click",function(){
    change(english,japanese,chinese);
}, false);

japanese.addEventListener("click",function(){
    change(japanese,english,chinese);
}, false);

chinese.addEventListener("click",function(){
    change(chinese,english,japanese);
}, false);

function change(lang_on,lang_off1,lang_off2){
    if(!lang_on.classList.contains("current_lang")){
        lang_on.classList.add("current_lang");
        lang_off1.classList.remove("current_lang");
        lang_off2.classList.remove("current_lang");
    }

    if(lang_on.innerHTML == "EN"){
        change_text.classList.add("english");
        change_text.classList.remove("chinese");
        change_text.classList.remove("japanese");
        change_text.innerHTML = "The text here will change";
    }

    else if (lang_on.innerHTML == "中文"){
        change_text.classList.add("chinese");
        change_text.classList.remove("english");
        change_text.classList.remove("japanese");
        change_text.innerHTML = "这里的文字会改变";
    }

    else if (lang_on.innerHTML == "日本語"){
        change_text.classList.add("japanese");
        change_text.classList.remove("english");
        change_text.classList.remove("chinese");
        change_text.innerHTML = "ここの文字は変わります";
    }
}