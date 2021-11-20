var num = 1;
var q = {
    1: { "title": "내일모레 먹을 소고기 버섯전골에<br>들어갈 채소를 사야할 때 나는", "type": "EI", "A": "오랜만에 바람도 쐴 겸 마트에 간다.", "B": "“나가기 귀찮아..”인터넷으로 주문한다." },
    2: { "title": "친구와 만나 밥을<br>먹기로 했을때<br>무엇을 먹을지 나는", "type": "JP", "A": "약속을 잡을 때 부터 생각해본다.", "B": "일단 만나고 생각한다." },
    3: { "title": "친구에게 밥을 해줬을 때<br>더 듣고싶은 말은 ?", "type": "TF", "A": "“맛있다~ 담에 또 해줘~”", "B": "“만들어줘서 고마워”" },
    4: { "title": "“친구가 안먹는 채소”를<br>무슨 맛에 먹냐고 물어본다면 나는", "type": "SN", "A": "맛 표현을 자세하게 해준다.", "B": "그냥 맛있다고 한다." },
    5: { "title": "텃밭에서 채소를 기르는데<br>너무 많을 때 나는", "type": "EI", "A": "“이것좀 드셔보세요~”<br>이웃에게 나누어주거나 무료나눔한다.", "B": "“좀 먹을래 ?”<br>친구에게 나눠준다." },
    6: { "title": "친구가 체했다고 했을 때 먼저 나는", "type": "TF", "A": "“뭐먹고 체했어?”", "B": "“괜찮아? 소화제 사올까?”" },
    7: { "title": "간식을 살 때 나는", "type": "SN", "A": "“내일도 먹고싶으면 또 사러오면되지~”<br>오늘 먹을것만 산다.", "B": "“내일도 먹고싶을거니까~”<br>가능한 한 많이산다." },
    8: { "title": "처음 보는 과자를 발견한 나는", "type": "SN", "A": "“무슨 맛일까 ?”<br>새로운 과자를 먹어본다.", "B": "“먹던거 먹자~”<br>주로 먹던 과자를 먹는다." },
    9: { "title": "친구와 밥을 먹기로 했는데<br>모르는 친구를 데려온다 하면 나는", "type": "EI", "A": "그런가보다~", "B": "불편한데.." },
    10: { "title": "식탁위에 내가 좋아하는<br>과자가 있을 때 나는", "type": "JP", "A": "“맛있겠다!!”<br>그냥 먹는다.", "B": "“누구꺼지..”<br>먹어도 되는지 물어본다." },
    11: { "title": "친구가 슬퍼서 하루종일<br>밥을 안먹었다하면 나는", "type": "TF", "A": "밥 먼저 먹자 !", "B": "무슨 일 있어?" },
    12: { "title": "음식을 만들었는데 맛이 없다면 나는", "type": "JP", "A": "맛없으면 꽝이지..", "B": "맛없으면 어때 다음에 잘 만들면 되지." }
}
var result = {
    "ISTJ": { "subtitle": "나처럼만 살아 !", "vegetable": "당근", "img": "carrot.png", "color": "", "width": "300px", "fit-img": "corn.png", "fit-title": "옥수수", "fit-location": "corn.html", "unfit-img": "pepper.png", "unfit-title": "고추", "unfit-location": "pepper.html", "my-url": "carrot.html" },
    "ISFJ": { "subtitle": "나는 바보", "vegetable": "감자", "img": "potato.png", "color": "", "width": "300px", "fit-img": "bean.png", "fit-title": "콩", "fit-location": "bean.html", "unfit-img": "mushroom.png", "unfit-title": "버섯", "unfit-location": "mushroom.html", "my-url": "potato.html" },
    "INFJ": { "subtitle": "나는 소심쟁이", "vegetable": "파프리카", "img": "paprika.png", "width": "300px", "fit-img": "onion.png", "fit-title": "양파", "fit-location": "onion.html", "unfit-img": "oi.png", "unfit-title": "오이", "unfit-location": "oi.html", "my-url": "paprika.html" },
    "INTJ": { "subtitle": "나는 집순이·집돌이", "vegetable": "브로콜리", "img": "bro.png", "color": "", "width": "300px", "fit-img": "ma.png", "fit-title": "마늘", "fit-location": "ma.html", "unfit-img": "sang.png", "unfit-title": "상추", "unfit-location": "sang.html", "my-url": "bro.html" },
    "ISTP": { "subtitle": "나는 부끄럼쟁이", "vegetable": "배추", "img": "bae.png", "color": "", "width": "300px", "fit-img": "pepper.png", "fit-title": "고추", "fit-location": "pepper.html", "unfit-img": "corn.png", "unfit-title": "옥수수", "unfit-location": "corn.html", "my-url": "bae.html" },
    "ISFP": { "subtitle": "나는 흑우", "vegetable": "고구마", "img": "sweetpotato.png", "color": "", "fit-img": "mushroom.png", "fit-title": "버섯", "fit-location": "mushroom.html", "unfit-img": "bean.png", "unfit-title": "콩", "unfit-location": "bean.html", "my-url": "sweetpotato.html" },
    "INFP": { "subtitle": "나는 완벽쟁이 !", "vegetable": "토마토", "img": "tomato.png", "color": "#dc3545", "width": "320px", "fit-img": "oi.png", "fit-title": "오이", "fit-location": "oi.html", "unfit-img": "onion.png", "unfit-title": "양파", "unfit-location": "onion.html", "my-url": "tomato.html" },
    "INTP": { "subtitle": "나는 외로운게 좋아", "vegetable": "무", "img": "moo.png", "color": "#20c997", "width": "300px", "fit-img": "sang.png", "fit-title": "상추", "fit-location": "sang.html", "unfit-img": "ma.png", "unfit-title": "마늘", "unfit-location": "ma.html", "my-url": "moo.html" },
    "ESTP": { "subtitle": "나는 다 잘해 !", "vegetable": "양파", "img": "onion.png", "color": "#dc3545", "width": "300px", "fit-img": "paprika.png", "fit-title": "파프리카", "fit-location": "paprika.html", "unfit-img": "tomato.png", "unfit-title": "토마토", "unfit-location": "tomato.html", "my-url": "onion.html" },
    "ESFP": { "subtitle": "나는 친화력 짱 !", "vegetable": "마늘", "img": "ma.png", "color": "", "width": "320px", "fit-img": "bro.png", "fit-title": "브로콜리", "fit-location": "bro.html", "unfit-img": "moo.png", "unfit-title": "무", "unfit-location": "moo.html", "my-url": "ma.html" },
    "ENFP": { "subtitle": "나는 포기를 모른다 !", "vegetable": "옥수수", "img": "corn.png", "color": "", "width": "320px", "fit-img": "carrot.png", "fit-title": "당근", "fit-location": "carrot.html", "unfit-img": "bae.png", "unfit-title": "배추", "unfit-location": "bae.html", "my-url": "corn.html" },
    "ENTP": { "subtitle": "나는 지기 싫다 !", "vegetable": "콩", "img": "bean.png", "color": "", "width": "300px", "fit-img": "potato.png", "fit-title": "감자", "fit-location": "potato.html", "unfit-img": "sweetpotato.png", "unfit-title": "고구마", "unfit-location": "sweetpotato.html", "my-url": "bean.html" },
    "ESTJ": { "subtitle": "나는 울보..", "vegetable": "오이", "img": "oi.png", "color": "", "width": "300px", "fit-img": "tomato.png", "fit-title": "토마토", "fit-location": "tomato.html", "unfit-img": "paprika.png", "unfit-title": "파프리카", "unfit-location": "paprika.html", "my-url": "oi.html" },
    "ESFJ": { "subtitle": "나는 착해..", "vegetable": "상추", "img": "sang.png", "color": "#fd7e14", "width": "300px", "fit-img": "moo.png", "fit-title": "무", "fit-location": "moo.html", "unfit-img": "bro.png", "unfit-title": "브로콜리", "unfit-location": "bro.html", "my-url": "sang.html" },
    "ENFJ": { "subtitle": "나는 리더 !", "vegetable": "고추", "img": "pepper.png", "color": "#dc3545", "width": "300px", "fit-img": "bae.png", "fit-title": "배추", "fit-location": "bae.html", "unfit-img": "carrot.png", "unfit-title": "당근", "unfit-location": "carrot.html", "my-url": "pepper.html" },
    "ENTJ": { "subtitle": "나는 다 귀찮아..", "vegetable": "버섯", "img": "mushroom.png", "width": "300px", "fit-img": "sweetpotato.png", "fit-title": "고구마", "fit-location": "sweetpotato.html", "unfit-img": "potato.png", "unfit-title": "감자", "unfit-location": "potato.html", "my-url": "mushroom.html" }
}
var explainList = {
    "ISTJ": { "first": "원리원칙적이고 호불호가 뚜렷해요.", "second": "친구가 약속에 늦으면 불같이 화를 내요.", "third": "협동하는 것을 싫어하고 혼자 하는 것을 좋아해요.", "forth": "사람들 많은 곳에 가면 기 빨려요.", "fifth": "이야기조차 딴길로 새는 것을 싫어해요.", "sixth": "내 얘기 하는 것도 싫고 남 얘기 들어주는 것도 힘들어해요." },
    "ISFJ": { "first": "원칙주의자, 게으른 완벽주의자", "second": "친한 친구라도 연락하는 게 귀찮을 때가 많아요. 항상 핸드폰을 붙잡고 있는 사람들이 오히려 신기하다고 생각해요.", "third": "외로움은 많이 타는데 많은 사람들이랑 있는 건 싫어해요.", "forth": "스트레스받는 게 너무너무 싫어요. 그래서 튀지 않으려 하고 대체로 조용조용해요", "fifth": "조용하고 진지해 보이지만 생각이 많고 상상력이 풍부해요.", "sixth": "어떨 땐 내향적이고 어떨 땐 외향적이라서 자신도 자신의 성격을 잘 몰라요." },
    "INFJ": { "first": "아무리 친해지고 싶은 사람이 있더라도 먼저 말을 걸지 않아요. 먼저 다가와 주길 바래요.", "second": "남을 잘 안 믿고 관심이 없어요.", "third": "친하고 마음 맞는 애랑 단 둘이 노는것을 좋아해요.", "forth": "시간에 쫓기는 것을 싫어해요. 그래서 할 일이 있다면 바로바로 하는 성격이에요.", "fifth": "돈개념이 없고 쓸 때마다 자기 합리화를 해요.", "sixth": "감수성이 풍부하고 망상이 잦아요." },
    "INTJ": { "first": "하루하루 세세하게 계획짜놓고 지내는 것을 좋아해요.", "second": "남에게 관심이 없고 친구가 고민을 말 할때도 공감하지 못해요.", "third": "사람 얼굴과 이름을 잘 기억하지 못해요.", "forth": "관종끼가 있지만 내성적이라 표출하지 않아요.", "fifth": "호불호가 확실하고 자기 주관이 뚜렷해요.", "sixth": "굉장한 개인주의자며 이기적이에요." },
    "ISTP": { "first": "낯을 가리지만 친해지면 말도 많고 장난도 잘 쳐요.", "second": "남에게 관심이 없고 내 얘기도 잘 하지 않아요.", "third": "쓸데없는 소비를 엄청나게 많이해요. 그래서 항상 돈이 없어요..", "forth": "주류에 속하기 싫어해요. 그래서 자신만의 문화생활을 즐겨요.", "fifth": "여러 분야에 호기심이 많지만 노력을 많이하는 성격은 아니에요.", "sixth": "미루고 미루다 끝에 가서야 겨우 시작해요." },
    "ISFP": { "first": "공감능력이 뛰어나 누군가 우는걸 보면 같이 울어요.", "second": "약속이 잡혔는데 취소되면 속으로 좋아해요. 하지만 막상 만나면 잘 놀아요.", "third": "갈등과 불화를 싫어해요. 그래서 갈등을 해결하기 위해 자신을 희생하기도 해요.", "forth": "하기 싫은건 안하고 하고싶은 것만 해요.", "fifth": "남에게 속마음 얘기를 잘 안해요.", "sixth": "거절과 결정을 잘 못하고 양보를 잘해요." },
    "INFP": { "first": "완벽하게 하지 못할 거면 아예 시작하지 않아요.", "second": "해야 될 일을 생각만 하고 실제로는 발만 담그고 안 해요.", "third": "낯을 엄청 가려요.", "forth": "좋아하는 것은 미친 듯이 파고 집중하지만 열정이 초기에만 불타고 빨리 식어요.", "fifth": "너무 게을러서 벼락치기를 자주 해요.", "sixth": "개인적인 얘기를 남에게 하는 것을 싫어해요." },
    "INTP": { "first": "무뚝뚝한 편이고 잡담같은것을 잘 못하고 싫어해요.", "second": "책을 좋아하지만 읽기 귀찮아서 리스트에만 적어놓아요.", "third": "감수성이 풍부해요.", "forth": "웬만한 일에 상처받지 않고 감정기복이 거의 없어요.", "fifth": "사람많은 곳, 시끄러운 곳을 싫어해요.", "sixth": "완벽하게 못할거면 시작하지 않아요." },
    "ESTP": { "first": "외로움을 많이타요.", "second": "손재주가 좋아서 취미가 베이킹, 뜨개질, 인형만들기 등이에요.", "third": "“얘들아~ 모여봐~” 자기도 모르는 사이에 리더가 되어있어요.", "forth": "관종끼가 있어요.", "fifth": "표현을 아끼지않아요.", "sixth": "“뭐. 어쩌라고.” 남에게 관심이 없고 눈치를 잘 안봐요." },
    "ESFP": { "first": "성격은 급하지만 게을러요.", "second": "오지랖은 우주 최강이에요.", "third": "아무리 걱정되는 일이 있어도 조금만 있으면 생각하지 않아요.", "forth": "하고 싶은 것은 다 해야 하고 하기 싫은것은 끝까지 미뤄요.", "fifth": "고집이 세고 자존감이 높아요.", "sixth": "사람의 단점보단 장점을 보려 하고 싸움보단 평화를 좋아해요." },
    "ENFP": { "first": "흥미있고 관심있는 것에는 열정적이지만 관심없는 것에는 무심해요.(호불호 분명)", "second": "낯을 좀 가리지만 풀리면 금방 친해지고 말도 많아져요.", "third": "하나를 제대로 완성 시킨적이 손에 꼽아요. 완성하면 죽을 때 까지 행복해해요..", "forth": "무언가에 쉽게 몰두했다가 쉽게 그만둬요.", "fifth": "리액션을 잘 해줘서 고민상담 하는 애들이 많아요.", "sixth": "거짓말을 잘 못해서 입에 발린 말을 잘 못해요." },
    "ENTP": { "first": "겉으로는 인싸지만 속모습은 아싸에요.", "second": "내 의견과 상대방의 의견이 다르면 설득하려는 스타일이에요.", "third": "자신한테 잘해주면 두배로 잘해주고 자신에게 못되게굴면 두배로 못되게굴어요.", "forth": "중간가는 것을 굉장히 싫어해요.", "fifth": "좋아하는 사람과 싫어하는 사람이 명확히 구분되요.", "sixth": "끈기와 의지가 부족하여 시작을 하여도 마무리를 못지어요." },
    "ESTJ": { "first": "고집이 세고 직설적이며 호불호가 확실해요.", "second": "사람 많은 것을 싫어해요.", "third": "리더 맡는 것을 싫어하지만 막상 하면 잘해요.", "forth": "외로움을 별로 안 타요.", "fifth": "싸우는 것은 싫어하지만 싸울 일이 있다면 지지 않아요.", "sixth": "사람들이 아는 내 성격과 혼자 있을 때의 성격이 달라요." },
    "ESFJ": { "first": "혼자 계획을 세우고 그 계획이 틀어지는 것을 싫어해요.", "second": "새로운 사람과의 술자리를 좋아해요.", "third": "남 눈치를 많이보고 남에게 맞춰줘요.", "forth": "책읽고 영화보는것을 좋아해요.", "fifth": "상담, 고민 들어주는것을 잘해요.", "sixth": "인간관계에서 상처받아도 먼저 말하지 못해요." },
    "ENFJ": { "first": "사람들을 이끄는 것에 타고난 기질이 있고 좋아하기도해요.", "second": "상대방이 본인을 신뢰한다는 느낌을 받으면 살아있음을 느껴요.", "third": "계획짜는것을 좋아하며 계획이 틀어지는것을 굉장히 싫어해요.", "forth": "센스있고 눈치가 빠른데 없는 척 해요.", "fifth": "새로 친구 사귀는것을 좋아해요.", "sixth": "객관적이며 직관적이에요." },
    "ENTJ": { "first": "활동적이며 자기애가 강해요.", "second": "피해 주거나 받는 것을 싫어하고 남의 일에 무관심해요.", "third": "남이 무언가를 못한다면 답답해하고 이해를 못해요.", "forth": "새로운 사람을 만나는것은 좋아하지만 깊은 관계를 맺는것을 좋아하진 않아요.", "fifth": "감정적 공감능력이 떨어져요.", "sixth": "굉장히 현실적이며 논리적이지만 혼자 있을 땐 상상력이 많아져요." }
}


function loading() {
    $(".loading").show();
    setTimeout(() => {
        $(".loading").hide();
        $(".result-container").show();
    }, 3200);
}

function start() {
    $(".start-container").hide();
    $("html").css("background-image", "none");
    $("html").css("background-color", "#FFDAB9");
    $(".question-container").show();
    next();
}
$("#A").click(function() {
    var type = $("#type").val();
    var preValue = $("#" + type).val();
    $("#" + type).val(parseInt(preValue) + 1);
    next();
});
$("#B").click(function() {
    next();
});

function next() {
    if (num == 13) {
        $(".question-container").hide();
        loading();
        var mbti = "";
        ($("#EI").val() < 2) ? mbti += "I": mbti += "E";
        ($("#SN").val() < 2) ? mbti += "N": mbti += "S";
        ($("#TF").val() < 2) ? mbti += "F": mbti += "T";
        ($("#JP").val() < 2) ? mbti += "P": mbti += "J";
        $("#img").attr("src", result[mbti]["img"]);
        $(".subtitle").html(result[mbti]["subtitle"]);
        $("#vegetable").html(result[mbti]["vegetable"]);
        $("#vegetable").css("color", result[mbti]["color"]);
        $(".first").html(explainList[mbti]["first"]);
        $(".second").html(explainList[mbti]["second"]);
        $(".third").html(explainList[mbti]["third"]);
        $(".forth").html(explainList[mbti]["forth"]);
        $(".fifth").html(explainList[mbti]["fifth"]);
        $(".sixth").html(explainList[mbti]["sixth"]);
        $("#img").css("width", result[mbti]["widt"]);
        $(".fit-image").attr("src", result[mbti]["fit-img"]);
        $(".fit-content").html(result[mbti]["fit-title"]);
        $(".unfit-image").attr("src", result[mbti]["unfit-img"]);
        $(".unfit-content").html(result[mbti]["unfit-title"]);
        var a = result[mbti]["fit-location"];
        var b = result[mbti]["unfit-location"];
        $(".fit-button").attr("href", result[mbti]["fit-location"]);
        $(".unfit-button").attr("href", result[mbti]["unfit-location"]);
        $(".share-btn").attr("href", result[mbti]["my-url"]);
        $(".share-area").attr('value', "https://vegetabletest.netlify.app/" + result[mbti]["my-url"]);
    } else {
        $(".progress-bar").attr('style', 'width: calc(100/12*' + num + '%)');
        $(".progress-bar").html(parseInt((100 / 12) * num) + "%");
        $(".question").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++;
    }
}
$('#restart-btn').click(function() {
    location.reload();
});
$(".link-copy").click(function() {
    $(".link-area").attr("type", "text");
    $(".link-area").select();
    var success = document.execCommand("copy");
    $(".link-area").attr("type", "hidden");
    if (success) {
        alert("클립보드에 복사되었습니다.");
    }
});
$(".vegetable-btn").click(function() {
    alert("채소 : 신선한 상태로 반찬 또는 간식에 이용되며 대부분이 수분이 많고 지방과 칼로리가 적으며 많은 섬유질을 함유하고있어 체중 감량, 혈당 조절, 피부 건강 향상에 도움을 준다.");
});

$(".share-result").click(function() {
    $(".share-area").attr("type", "text");
    $(".share-area").select();
    var success = document.execCommand("copy");
    $(".share-area").attr("type", "hidden");
    if (success) {
        alert("클립보드에 복사되었습니다.");
    }
});