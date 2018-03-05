<template>
  <div>
    <section>
      <div class="bgimg-1">
        <div class="bg-title-1 text-xs-center">
            <h1 class="white--text mb-3 text-xs-center display-2 hidden-xs-only"><b>羅博特科技雲端服務平台</b></h1>
            <h1 class="white--text mb-5 text-xs-center display-2 hidden-sm-and-up">
                <div class="display-1">羅博特科技</div>
                <div class="display-1">雲端服務平台</div>
            </h1>

            <h1 class="white--text mb-3 text-xs-center headline">邁向工業4.0的好幫手</h1>
          <v-btn
                  class="blue lighten-2 mt-5"
                  dark
                  large
                  href=""
          >
            聯絡我們
          </v-btn>
        </div>
      </div>
    </section>

    <section>
      <v-layout
              column
              wrap
              class="my-5"
              align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline grey--text text--darken-3"><b>雲端資料收集的最佳解決方案</b></h2>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">cloud</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center grey--text text--darken-3"><strong>雲端資料收集</strong></div>
                  </v-card-title>
                  <v-card-text class="grey--text text--darken-2">
                      <b>資料即時上傳雲端，並儲存至雲端資料庫，方便做大數據管理及分析，本系統是建立在亞馬遜雲端服務系統，資料安全可靠又有保障</b>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">notifications</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline grey--text text--darken-3"><strong>警報即時通知</strong></div>
                  </v-card-title>
                  <v-card-text class="grey--text text--darken-2">
                      <b>遠端監控，出現異常訊號會立即上傳雲端，平台提供異常訊號列表，方便日後做查詢與分析，系統也有提供異常排除的建議方式</b>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline grey--text text--darken-3 text-xs-center"><strong>遠端維修服務</strong></div>
                  </v-card-title>
                  <v-card-text class="grey--text text--darken-2">
                    <b>雲端監控，任何的資料訊號皆可在本地端使用瀏覽器做確認，工程師不須每次都要到現場才可以做故障排除，大大省下時間及出差成本</b>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4 class="mt-3">
                <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">equalizer</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                        <div class="headline grey--text text--darken-3 text-xs-center"><strong>產能產量分析</strong></div>
                    </v-card-title>
                    <v-card-text class="grey--text text--darken-2">
                        <b>機台運轉過程中，可以即時統計產品產量，資料會在雲端做儲存，可以透過本平台做產能分析，方便日後估算出貨時間及交期</b>
                    </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4 class="mt-3">
                <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">trending_up</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                        <div class="headline grey--text text--darken-3 text-xs-center"><strong>運轉量稼動率</strong></div>
                    </v-card-title>
                    <v-card-text class="grey--text text--darken-2">
                        <b>每日固定時間做機台的運轉量計算，控管機台，減少待機時間，提升運轉稼動率，使機台可以做到最有效率地輸出</b>
                    </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4 class="mt-3">
                <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">access_time</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                        <div class="headline grey--text text--darken-3 text-xs-center"><strong>定期保養通知</strong></div>
                    </v-card-title>
                    <v-card-text class="grey--text text--darken-2">
                        <b>在雲端平台建立保養時程表，系統會自動提醒機台保養時間，避免人為疏忽造成機台損壞，增加日後的維修成本</b>
                    </v-card-text>
                </v-card>
              </v-flex>

            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <div class="bgimg-2">
        <div class="bg-title-2 text-xs-center hidden-xs-only" style="margin-top:15%;">
          <h1 class="white--text mb-3 text-xs-center display-1"><b>自動化的領導品牌</b></h1>
          <h1 class="white--text mb-3 text-xs-center headline">機械聯網 跟上時代</h1>
        </div>

        <div class="bg-title-2 text-xs-center hidden-sm-and-up" style="margin-top:50%;">
          <h1 class="white--text mb-3 text-xs-center display-1"><b>自動化的領導品牌</b></h1>
          <h1 class="white--text mb-3 text-xs-center headline">機械聯網 跟上時代</h1>
        </div>
      </div>
    </section>

    <section class="hidden-sm-and-down">
      <v-container grid-list-xl>
        <v-layout row wrap class="my-5">
          <v-flex xs12 sm12 md7>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout grey--text text--darken-3 pl-5">
                  <div class="headline"><strong>公司簡介</strong></div>
              </v-card-title>
              <v-card-text class="grey--text text--darken-3 pl-5 pr-5">
                  羅博特科技為日本．東芝機械（TOSHIBA MACHINE）機械手臂（水平／垂直多關節機械手臂）－台灣總代理、日本．IAI直交式機械手臂專業代理；以完整的產品陣容（視覺系統Data Logic、軟體授權管理OptiLIC...etc），滿足客戶對自動化的一次性需求，提供系統規劃與整合的服務，更可對產業的縱深與輪廓能更清楚的掌握，產業自動化為未來必定的趨勢產業，越早加入越快上手，在變動如此快速的競爭環境中，可以確定的是，投身產業自動化領域，絕對會是最佳的個人投資，歡迎業界老鳥新兵踴躍加入，共創下一輪產業的驕傲。
                  <div class="ml-4 mt-2">
                      <ul>
                          <li>代理銷售自動化相關產品</li>
                          <li>日本 TOSHIBA MACHINE 東芝機械 水平／垂直多關節機械手臂</li>
                          <li>日本 IAI 清水機電 直交式機械手臂</li>
                          <li>軟體授權管理OptiLIC</li>
                      </ul>
                  </div>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm12 md5>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout grey--text text--darken-3">
                <div class="headline"><strong>介紹影片</strong></div>
              </v-card-title>
              <v-card-text>
                  <iframe width="100%;" height="272" src="https://www.youtube.com/embed/qneAwpwy0Nw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

      <section class="hidden-md-and-up">
          <v-layout row wrap class="my-5">
              <v-flex xs12 sm12 md7>
                  <v-card class="elevation-0 transparent">
                      <v-card-title primary-title class="layout justify-center grey--text text--darken-3">
                          <div class="headline"><strong>公司簡介</strong></div>
                      </v-card-title>
                      <v-card-text class="grey--text text--darken-3 pl-5 pr-5">
                          羅博特科技為日本．東芝機械（TOSHIBA MACHINE）機械手臂（水平／垂直多關節機械手臂）－台灣總代理、日本．IAI直交式機械手臂專業代理；以完整的產品陣容（視覺系統Data Logic、軟體授權管理OptiLIC...etc），滿足客戶對自動化的一次性需求，提供系統規劃與整合的服務，更可對產業的縱深與輪廓能更清楚的掌握，產業自動化為未來必定的趨勢產業，越早加入越快上手，在變動如此快速的競爭環境中，可以確定的是，投身產業自動化領域，絕對會是最佳的個人投資，歡迎業界老鳥新兵踴躍加入，共創下一輪產業的驕傲。
                          <div class="ml-4 mt-2">
                              <ul>
                                  <li>代理銷售自動化相關產品</li>
                                  <li>日本 TOSHIBA MACHINE 東芝機械 水平／垂直多關節機械手臂</li>
                                  <li>日本 IAI 清水機電 直交式機械手臂</li>
                                  <li>軟體授權管理OptiLIC</li>
                              </ul>
                          </div>
                      </v-card-text>
                  </v-card>
              </v-flex>
              <v-flex xs12 sm12 md5>
                  <v-card class="elevation-0 transparent">
                      <v-card-title primary-title class="layout grey--text text--darken-3">
                          <div class="headline"><strong>介紹影片</strong></div>
                      </v-card-title>
                      <v-card-text>
                          <iframe width="100%;" height="272" src="https://www.youtube.com/embed/qneAwpwy0Nw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                      </v-card-text>
                  </v-card>
              </v-flex>
          </v-layout>
      </section>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bgimg-1:before {
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  background-color: rgba(0,0,0,.25);
  height: 100vh;
}

.bgimg-1 {
  opacity: 1;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://s3-ap-northeast-1.amazonaws.com/iot-robot-front-pics/web_pics/iot.jpg');
  min-height: 100vh;
}

.bg-title-1 {
  width: 100%;
  position: absolute;
  top: 20em;
}

.bgimg-2:before {
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  background-color: rgba(0,0,0,.25);
  height: 70vh;
}

.bgimg-2 {
  opacity: 1;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://s3-ap-northeast-1.amazonaws.com/iot-robot-front-pics/web_pics/THL.png');
  min-height: 70vh;
}

.bg-title-2 {
  width: 100%;
  position: absolute;
}
</style>
