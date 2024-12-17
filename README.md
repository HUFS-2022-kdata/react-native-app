# 구음장애인을 위한 음성인식 서비스
## Introduction
발음이 정확하지 않은 구음장애인의 데이터를 학습하여 구음장애인도 음성인식을 원활하게 활용할 수 있는 서비스를 제공합니다.  
언어모델 학습에는 deepspeech2 모델을 활용하였으며, 데이터 출처는 AI 허브의 구음장애 데이터셋입니다.  
구음장애 데이터 원본 및 피치를 조절한 데이터를 학습에 사용하였습니다.  
(dataset source: https://aihub.or.kr/aihubdata/data/view.do?currMenu=115&topMenu=100&aihubDataSe=realm&dataSetSn=608)

## Project Overview
구음장애란 말을 할 때 사용하는 근육의 경직, 불균형, 마비 따위로 인하여 나타나는 말을 구사하는 능력의 장애를 의미합니다.  
이러한 발화 장애를 가진 사람의 경우, 기존의 음성인식 서비스를 활용하기 어려운 문제점을 가지고 있습니다.  
국가통계포털 참조 결과, 구음 장애의 위험성을 지닌 인구는 약 104만명 입니다.  
다양한 곳에 활용되고 있는 음성인식 기술의 배리어프리를 실현하기 위해 본 프로젝트를 제안하였습니다.

## Preview
![image](https://github.com/user-attachments/assets/faad9b73-3dfe-400d-a8dd-20d4f195b41e)

[시연 동영상]  
https://youtube.com/shorts/iKKSGWPGtTE

# Getting Started

```
npm install -g expo-cli
expo install expo-av
npm start
```

```
시작할 때 npm i 하고 시작하기.
```

```
2022-08-15(월)
screen에 Coverpage.js, Main.js 추가
asset에 CherryBomb 폰트 추가
```

```
2022-08-16(화)
expo go에서 정상적으로 동작하지 않음을 확인
-> 디자인 수정

Coverpage에서 버튼 및 디자인 추가

screen에 Resultpage.js 추가

MainAudioRecord.js 추가 및 마이크 버튼 클릭 시 음성 녹음 가능
```

```
2022-08-17(수)
Coverpage.js에 버튼 및 텍스트에 효과, 폰트 추가

MainAudioRecord.js에서 recording option 수정

Resultpage에서 tts 기능 추가
```

```
2022-08-22(월)
MainAudioRecord.js에 flask 서버로 audio 파일 전송기능 포함
```

```
2022-08-23(화)
MainAudioRecord.js에서 Resultpage.js로 서버에 audio 파일 전송변경
모바일 환경에서의 음성파일 전송 포함 및 로컬 환경에서의 음성파일 전송
최종 완성
```

```
2022-08-24(수)
Resultpage.js에 서버 읽어올 때 ip 주소 자동 동기화 추가
```

## References
Kospeech: https://github.com/sooftware/kospeech  
Deepspeech2: https://arxiv.org/abs/1512.02595
![image](https://github.com/user-attachments/assets/71a6fdc1-3492-48ab-ad6b-778beb540062)

