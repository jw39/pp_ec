export function getDay(str)
{
    let day = "";
    switch(str)
    {
        case 0:
            day = "일요일"
            break;
        case 1:
            day = "월요일"
            break;
        case 2:
            day = "화요일"
            break;
        case 3:
            day = "수요일"
            break;
        case 4:
            day = "목요일"
            break;
        case 5:
            day = "금요일"
            break;            
        case 6:
            day = "토요일"
            break;    
    }
    return day;
}

export const choicRankingCategory = {
    skinCare : [
        "전체", "스킨/토너", "로션/에멀젼", "에센스/세럼", "크림", "미스트", "페이스오일", "멀티밤"
    ],
    facemakeup : ["전체","파운데이션", "피니시파우더" ,"컨실러","베이스/프라이머","BB크림","CC크림","메이크업픽서"],

    ribmakeup : ["전체","립스틱", "립틴트/라커", "립펜슬","립글로스","립베이스","립케어"],
    eyemakeup : ["전체","아이섀도우","아이라이너","아이브로우","마스카라","아이프라이머"],
    contuaring : ["전체","블러셔","쉐딩", "하이라이터" , "컨투어링팔레트", "멀티팔레트"],
    beautitall : ["전체","브러시", "스펀지/퍼프" , "메이크업소품"],
    
    cleanSing : [
        "전체", "페이셜클렌저", "메이크업클렌저", "포인트리무버", "각질케어", "클렌징도구"
    ],
    maskPack : [
        "전체", "시트마스크", "페이스마스크", "부분마스크", "마사지도구"
    ],
    sunCare : [
        "전체", "선크림", "선쿠션", "선스틱", "선에센스/세럼" , "선젤", "선베이스", "선스프레이", "애프터선", "태닝",
    ],
    body : [
        "전체", "바디로션/크림", "바디오일/밤", "바디미스트", "바디슬리밍", "데오드란트", "바디마사지", "핸드케어", "풋케어", "배쓰/샤워", "제모용품", "바디메이크업"
    ],
    hair : [
        "전체", "샴푸", "린스/컨디셔너", "트린트먼트/팩", "헤어토닉", "드라이샴푸", "헤어케어", "헤어스타일링", "헤어메이크업", "헤어소품"
    ],
    nail : [
        "전체", "폴리시", "베이스/탑코트", "네일스티커/팁", "페디스티커/팁", "네일케어", "네일리무버", "네일도구"
    ],
    lifeTax : ["전체","여성용품","릴렉싱", "덴탈케어", "마스크"],
    smalleye: ["전체","컬러렌즈", "투명렌즈", "렌즈용품"],
    preigrens : ["전체", "향수", "방향제"],
    device : ["전체", "뷰티디바이스", "헤어디바이스"],
    innerbeauti : ["전체",  "피부건강", "다이어트", "건강식품"],
    baby : ["전체","스킨케어", "선케어", "바디케어","클렌징"],
    man : ["전체","스킨케어", "메이크업", "클렌징", "쉐이빙", "헤어", "배쓰&바디"]
}

export const titleList = [
    "카테고리 전체", "스킨케어", "페이스메이크업", "립메이크업", "아이메이크업", "컨투어링","뷰티툴", "클렌징", "마스크/팩", "선케어", 
    "배쓰&바디", "헤어", "네일", "생활용품", "렌즈", "프래그런스", "디바이스", "이너뷰티", "베이비", "남성화장품"
]

export const userTypeList = [
    '건성', '지성', '복합성', '민감성', '중성'
]

export const userAgeList = [
    '10대', '20대', '30대', '40대', "50대~"
]

export const isStrCheck = (str) => {
    let isCheck = false;
    if(userTypeList.indexOf(str) !== -1)
    {
        return !isCheck;
    }

    if(userAgeList.indexOf(str) !== -1)
    {
        return !isCheck;
    }
}

