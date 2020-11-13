var side_bar_menu = ['홈', '전자결재', '전자 문서함', '보고', 'Works', 'ToDO+', '캘린더',
'주소록', '문서관리', '게시판', '예약', '설문', '근태관리', 'Link+']



function printClock() {
  var currentDate = new Date();                                     // 현재시간
  var week = ['일', '월', '화', '수', '목', '금', '토']
  var year = currentDate.getFullYear(); // 년도
  var month = currentDate.getMonth() + 1;  // 월
  var date = currentDate.getDate();  // 날짜
  var day = currentDate.getDay();
  var hours = currentDate.getHours(); // 시
  var minutes = currentDate.getMinutes();  // 분
  var seconds = currentDate.getSeconds();  // 초
  var milliseconds = currentDate.getMilliseconds();
  var clock = document.getElementById("clock");            // 출력할 장소 선택

  var calendar = currentDate.getFullYear() + "-" + (currentDate.getMonth()+1) + "-" + currentDate.getDate() // 현재 날짜
  var amPm = 'AM'; // 초기값 AM
  var currentHours = addZeros(currentDate.getHours(),2);
  var currentMinute = addZeros(currentDate.getMinutes() ,2);
  var currentSeconds =  addZeros(currentDate.getSeconds(),2);

  if(currentHours >= 12){ // 시간이 12보다 클 때 PM으로 세팅, 12를 빼줌
  	amPm = 'PM';
  	currentHours = addZeros(currentHours - 12,2);
  }

  if(currentSeconds >= 50){// 50초 이상일 때 색을 변환해 준다.
     currentSeconds = '<span style="color:#de1951;">'+currentSeconds+'</span>'
  }
  clock.innerHTML = year+"년 "+month+"월 "+date+"일 "+"("+week[day]+") "+ currentHours+":"+currentMinute+":"+currentSeconds +" <span style='font-size:10px;'>"+ amPm+"</span>"; //날짜를 출력해 줌

  setTimeout("printClock()",1000);         // 1초마다 printClock() 함수 호출
}

function addZeros(num, digit) { // 자릿수 맞춰주기
  var zero = '';
  num = num.toString();
  if (num.length < digit) {
    for (i = 0; i < digit - num.length; i++) {
      zero += '0';
    }
  }
  return zero + num;
}
