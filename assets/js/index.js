var vm = new Vue({
  el: "#app",
  data: {
    links: [
      {
        text: 'オンラインストア', 
        fontAwesome: '<i class="fa-sharp fa-solid fa-bag-shopping"></i>',
        url: 'https://ifing-beauty.com/',
      },
      {
        text: 'よくあるご質問', 
        fontAwesome: '<i class="fa-regular fa-comment"></i>',
        url: 'https://ifing-beauty.com/',
      },
      {
        text: '商品解説はこちら', 
        fontAwesome: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
        url: 'https://ifing-beauty.com/',
      },
    ]
  },
});


var vm = new Vue({
  el: "#bannerImage",
  data: {
    banners: [
      {product: 'TOKIO IE プラチナム', image: 'assets/images/tokio-ie-platinum.jpg', url: 'https://ifing-beauty.com/products/list?category_id=15'},
      {product: 'TOKIO IE プレミアム', image: 'assets/images/tokio-ie-premium.jpg', url: 'https://ifing-beauty.com/products/list?category_id=16'},
      {product: 'TOKIO IE ヘッドスパ', image: 'assets/images/tokio-ie-headspa.jpg', url: 'https://ifing-beauty.com/products/list?category_id=17'}
    ]
  },
});


var vm = new Vue({
  el: "#purchase-products",
  data: {
    products: [
      {name: 'プラチナム 400セット', url: 'https://ifing-beauty.com/products/detail/137', img: 'assets/images/tokioinkarami.png', price: '8000', taxPrice: '8800'},
      {name: 'プラチナム 700セット', url: 'https://ifing-beauty.com/products/detail/137', img: 'assets/images/700-pl.png', price: '8000', taxPrice: '8800'},
      {name: 'プレミアム 400セット', url: 'https://ifing-beauty.com/products/detail/137', img: 'assets/images/400-pr.png', price: '8000', taxPrice: '8800'},
      {name: 'プレミアム 700セット', url: 'https://ifing-beauty.com/products/detail/137', img: 'assets/images/700-pr.png', price: '8000', taxPrice: '8800'},
      {name: 'ヘッドスパ 400セット', url: 'https://ifing-beauty.com/products/detail/137', img: 'assets/images/400-shtr.png', price: '8000', taxPrice: '8800'},
      {name: 'ヘッドスパ 700セット', url: 'https://ifing-beauty.com/products/detail/137', img: 'assets/images/400-shtr.png', price: '8000', taxPrice: '8800'},
    ]
  },
});



var vm = new Vue({
  el: "#subnavbar",
  data: {
    subnav: [
      {
        nav: "オンラインストア",
        img: "assets/images/img-top001.png",
        url: "https://ifing-beauty.com",
      },
      {
        nav: "よくあるご質問",
        img: "assets/images/img-top002.png",
        url: "https://ifing-beauty.com",
      },
      {
        nav: "商品解説はこちら",
        img: "assets/images/img-top003.png",
        url: "http://www.tokio.tokyo",
      },
    ],
  },
});



var vm = new Vue({
  el: "#concern",
  data: {
    concerns: [
      { id: 1, text: "最近、髪が痩せてきた" },
      { id: 2, text: "ボリュームがない／なくなってきた" },
      { id: 3, text: "髪が硬い／硬くなってきた" },
      { id: 4, text: "毛先がプチプチ切れる" },
      { id: 5, text: "絡まってクシが通らない" },
      { id: 6, text: "まとまらない" },
      { id: 7, text: "ゴワつき、パサつきが気になる" },
      { id: 8, text: "ヘアカラーの色もちが悪い" },
      { id: 9, text: "スタイリングが持続しない" },
      { id: 10, text: "毎日アイロン・コテを使っている" },
    ],
  },
});

var vm = new Vue({
  el: "#subscription-message",
  data: {
    messages: [
      {
        reasonNo: "選ばれる理由１",
        reasonHeader: "全国の美容室からの支持率No1",
        reasonText: "東京を中心に国内で多くの美容室から高い価値を得ています",
      },
      {
        reasonNo: "選ばれる理由２",
        reasonHeader: "カリスマ美容師支持率No1",
        reasonText:
          "東京を中心に、国内外で多くのトップスタイリストの方々から高い評価を得ています",
      },
      {
        reasonNo: "選ばれる理由３",
        reasonHeader: "圧倒的なケア力No1",
        reasonText:
          "TOKIOインカラミが持つ「特許技術インカラミ」によって、毛髪強度回復・ダメージ補修に高い評価を得ています",
      },
    ],
  },
});

var vm = new Vue({
  el: "#salon-voices",
  data: {
    salonVoices: [
      {
        id: 1,
        alias: "SALON A",
        img: "assets/images/ai-model1.png",
        voice: `安心してお客様が求める再現性を提供できるようになりました`,
      },
      {
        id: 2,
        alias: "SALON B",
        img: "assets/images/ai-model1.png",
        voice: `誰でも持っている小さい悩みでも解消できる、良い商品だなって思います`,
      },
      {
        id: 3,
        alias: "SALON C",
        img: "assets/images/ai-model1.png",
        voice: `TOKIOでお客様がHAPPYになるというのは絶対あると思います`,
      },
      {
        id: 4,
        alias: "SALON D",
        img: "assets/images/ai-model1.png",
        voice: `軽さとなめらかさ、あと艶感も気に入ってリピートが絶えません`,
      },
    ],
  },
});

var vm = new Vue({
  el: "#user-voices",
  data: {
    userVoices: [
      {
        id: 1,
        alias: "User A",
        img: "assets/images/user-voice001.png",
        voice: `ドラッグストアなどで販売されているシャンプーとは段違いで髪の毛に天使の輪っかが誕生します。`,
      },
      {
        id: 2,
        alias: "User B",
        img: "assets/images/user-voice002.png",
        voice: `サッラサラの手触りツヤツヤです。泡立ちも全く問題なしで、トリートメント時は数分置いてから流してます。`,
      },
      {
        id: 3,
        alias: "User C",
        img: "assets/images/user-voice003.png",
        voice: `サロン帰りのような髪の柔らかさに仕上がるので、重宝しています！!`,
      },
      {
        id: 4,
        alias: "User D",
        img: "assets/images/ai-model4.png",
        voice: `ミディアムボブから少し思い切ってベリーショート風にしたのですが会う人皆に「似合ってる！いいね！」と言ってもらえてhappyです。`,
      },
    ],
  },
});

var vm = new Vue({
  el: "#product-list",
  data: {
    tokioProducts: [
      {
        id: 1,
        name: "TOKIO INKARAMI LIMITED",
        description:
          "毛髪強度140%回復とキューティクルのケア効果を両立した限定ブランド",
        img: "assets/images/tokio-inkarami-limited.png",
      },
      {
        id: 2,
        name: "TOKIO HYPER INKARAMI",
        description: "インカラミ効果を増大させた特別限定ブランド",
        img: "assets/images/tokio-hyper-inkarami.png",
      },
    ],
  },
});

var vm = new Vue({
  el: "#footer-links",
  data: {
    footerLinks: [
      { id: 1, text: "特定商取引法に基づく表示", url: "" },
      { id: 2, text: "プライバシーポリシー", url: "" },
      { id: 3, text: "利用規約", url: "" },
      { id: 4, text: "会社概要", url: "" },
    ],
  },
});

var slider = new Vue({
  el: "#slider",
  data: {
    current: 0,
    direction: 1,
    transitionName: "fade",
    show: false,
    slides: [
      { className: "blue" },
      { className: "red" },
      { className: "yellow" },
    ],
  },
  methods: {
    slide(dir) {
      this.direction = dir;
      dir === 1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");
      var len = this.slides.length;
      this.current = (this.current + (dir % len) + len) % len;
    },
  },
  mounted() {
    this.show = true;
  },
});

var vm = new Vue({
  el: "#productInformation",
  data: {
    products: [
      {
        brand: "TOKIO IEインカラミ",
        name: "プラチナム シャンプー",
        description: `
           タウリン（洗浄成分）を用いた低刺激アミノ酸系シャンプー。優れた泡立ちときしみのない質感で、髪と頭皮を優しく洗い上げます。
           `,
        img: "assets/images/tokioinkarami.png",
        point1: "洗浄成分：タウリン",
        point2: "補修成分：反応型水鳥由来加水分解ケラチン",
        point3: "保湿成分：ペリセア/フラーレン（保湿剤）",
        point4: "香り：レモングラス",
        point5: null,
        info: "シャンプー<br>POINT成分",
        about: "タウリンとは?",
        details: `
          タウリン系シャンプーは、適度な洗浄力とキメ細かな泡立ちが特徴のシャンプーです。
          サッパリした仕上がりで、頭皮のバリア機能を果たす皮脂を落とし過ぎません。
          また、人体を構成するアミノ酸に近い成分で作られているため、安全性も高く敏感肌の方でも安心して使えます。`,
      }  
    ],
  },
});

var vm = new Vue({
  el: "#productInformation2",
  data: {
    products: [
      {
        brand: "TOKIO IEインカラミ",
        name: "プラチナム トリートメント",
        description: `
          3種類のケラチン（補修剤）によって髪にコシと補修効果を与え、健康な髪が持つ脂質成分によって保湿しながら柔らかくサラサラな髪へと導きます。
           `,
        img: "assets/images/tokioinkarami.png",
        point1: "補修成分：ケラチンアミノ酸・加水分解ケラチン",
        point2: "保湿成分：メドウフォーム-ラクトン/フラーレン/セラミドNG ",
        point3: "香り：レモングラス ",
        point4: null,
        point5: null,
        info: "トリートメント<br>POINT成分",
        about: "メドウフォームとは?",
        details: `
        メドウフォームは、加熱するとケラチンと結合し、疎水化を促します。髪が疎水化すると、水をはじき、油をなじませることで常に一定の水分量を保たれます。メドウフォームが髪の内外部に吸着して水をはじき、健康な髪へと導いてくれます。  
        `,
      }
    ],
  },
});

var vm = new Vue({
  el: "#productInformation3",
  data: {
    products: [
      {
        brand: "TOKIO IEインカラミ",
        name: "プラチナム トリートメント",
        description: `
          3種類のケラチン（補修剤）によって髪にコシと補修効果を与え、健康な髪が持つ脂質成分によって保湿しながら柔らかくサラサラな髪へと導きます。
           `,
        img: "assets/images/tokioinkarami.png",
        point1: "加水分解シルク",
        point2: "スクワラン",
        point3: "ワサビノキ種子油（毛髪保護成分）",
        point4: "フラーレン（保湿剤）",
        point5: "リラックス効果のあるレモングラスの香り",
        info: "オイル<br>POINT成分",
        about: "スクワランとは?",
        details: `
        優れた保湿力と浸透力をもたらします。人間の皮脂に近い成分なので非常に肌なじみが良く、髪の毛のパサつき、切れ毛の防止に繋がります。 
        `,
      },
      
    ],
  },
});
