var tabs = [
  {
    title: "羽毛ケラチン",
    subtitle1: "ダウンケラチン",
    content1: "水鳥の胸から取れるケラチン。<br>柔らかく水に強い髪に導きます。 ",
    subtitle2: "フェザーケラチン",
    content2: "水鳥の羽根から取れるケラチン。<br>軽くて強い髪に導きます。",
    img: "assets/images/tokio1.png"
  },
  {
    title: "ケラチンアミノ酸",
    content1: "最も補修力が高くサイズの小さ いケラチンです。毛髪内部に入り込み、特許技術インカラミ反応を起こします。 ",
    img: "assets/images/tokio2.png"
  },
  {
    title: "羊毛ケラチン",
    content1: "毛髪にハリコシをもたらします。特許技術インカラミ反応が完結し、強くて軽くて柔らかい髪質に導きます。",
    img: "assets/images/tokio3.png"

  },
  {
    title: "セラミド/18MEA",
    content1: "保湿力をサポートし、紫外線や細菌、誇りなどの外部刺激から皮膚を守ります。",
    img: "assets/images/tokio4.png"
  },
  
];

var vue = new Vue({
  el: "#tokio1-4",
  data: {
    show: 0,
    tabs
  },
  methods:{
    navigate: function(e){
      if (e.target.dataset.show) {
        e.preventDefault();
        this.show = e.target.dataset.show;
      }
    },
    alerts: function(e){
      if (e.target.dataset.alert) {
        e.preventDefault();
        alert(e.target.dataset.alert);
      }
    }
  }
});