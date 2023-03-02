
// 下のナビゲーション
var vm = new Vue({
  el: "#app",
  data: {
    links: [
      {
        text: "オンラインストア",
        fontAwesome: '<i class="fa-sharp fa-solid fa-bag-shopping"></i>',
        url: "https://ifing-beauty.com/",
      },
      {
        text: "よくあるご質問",
        fontAwesome: '<i class="fa-regular fa-comment"></i>',
        url: "https://ifing-beauty.com/",
      },
      {
        text: "商品解説はこちら",
        fontAwesome: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
        url: "https://ifing-beauty.com/",
      },
    ],
  },
});

var vm = new Vue({
  el: "#subItem",
  data: {
    items: [
      {
        itemName: "シャンプー・トリートメント",
        itemNameType: "プラチナム",
        size: "定期400サイズセット",
        regularPrice: 9020,
        withTaxPrice: 8569,
        link: "https://ifing-beauty.com/products/detail/60",
        img: "assets/images/tokioinkarami400.png",
      },
      {
        itemName: "シャンプー・トリートメント",
        itemNameType: "プラチナム",
        size: "定期700サイズセット",
        regularPrice: 13420,
        withTaxPrice: 12749,
        link: "https://ifing-beauty.com/products/detail/61",
        img: "assets/images/tokioinkarami700.png",
      },
    ],
  },
});

var vm = new Vue({
  el: "#tokioIngredients1",
  data: {
    Ingredients1: [
      {
        tokioNum: 1,
        ingredient: '羽毛ケラチン',
        details: '水鳥の羽毛が原料のケラチン。<br class="br_on576">髪を軽くて柔らかい仕上がりに導きます。'
      },
      {
        tokioNum: 2,
        ingredient: 'ケラチンアミノ酸',
        details: '超低分子のケラチン。<br class="br_on576">最も高い補修効果を保持しています。'
      },
      {
        tokioNum: 3,
        ingredient: '羊毛ケラチン',
        details: '内部補修、ハリ、強さをもたらします。<br class="br_on576">TOKIO IEの補修効果を完結させます。'
      },
      {
        tokioNum: 4,
        ingredient: 'セラミド',
        details: '保湿力をサポートし、紫外線や細菌、<br class="br_on576">埃などの外部刺激から皮膚を守ります。'
      },
    ]
  }
})

var vm = new Vue({
  el: "#promotions",
  data: {
    promotions: [
      {
        text: "TOKIO STARS - カミカリスマ美容師の支持率No.1",
        image: "assets/images/promotions-tokiostars.png",
        linkUrl: 'https://tokio.tokyo/ja/tokio-stars/'
      },
      {
        text: "TOKIO インカラミが誇る所属・サポートアスリート",
        image: "assets/images/promotions-athletes.jpg",
        linkUrl: 'https://www.ifing.com/ja/promotion/'
      },
      {
        text: "東京・ 銀座 / GINZA SIXから世界へ発信・展開",
        image: "assets/images/promotions-ginzasix.jpg",
        linkUrl: 'https://www.ifing.com/ja/company/'
      },
    ],
  },
});

var vm = new Vue({
  el: "#bannerImage",
  data: {
    banners: [
      {
        product: "TOKIO IE プラチナム",
        image: "assets/images/banner-image-tokio-ie-platinum.jpg",
        url: "https://ifing-beauty.com/products/list?category_id=15",
      },
      {
        product: "TOKIO IE プレミアム",
        image: "assets/images/banner-image-tokio-ie-premium.jpg",
        url: "https://ifing-beauty.com/products/list?category_id=16",
      },
      {
        product: "TOKIO IE ヘッドスパ",
        image: "assets/images/banner-image-tokio-ie-headspa.jpg",
        url: "https://ifing-beauty.com/products/list?category_id=17",
      },
    ],
  },
});

var vm = new Vue({
  el: "#purchase-products",
  data: {
    products: [
      {
        name: "プラチナム 400セット",
        url: "https://ifing-beauty.com/products/detail/60",
        img: "assets/images/products-400-pl.png",
        price: "7790",
      },
      {
        name: "プラチナム 700セット",
        url: "https://ifing-beauty.com/products/detail/61",
        img: "assets/images/products-700-pl.png",
        price: "11590",
      },
      {
        name: "プレミアム 400セット",
        url: "https://ifing-beauty.com/products/detail/77",
        img: "assets/images/products-400-pr.png",
        price: "8930",
      },
      {
        name: "プレミアム 700セット",
        url: "https://ifing-beauty.com/products/detail/78",
        img: "assets/images/products-700-pr.png",
        price: "13110",
      },
      {
        name: "ヘッドスパ 400セット",
        url: "https://ifing-beauty.com/products/detail/137",
        img: "assets/images/products-400-hs.png",
        price: "8550",
      },
      {
        name: "ヘッドスパ 700セット",
        url: "https://ifing-beauty.com/products/detail/136",
        img: "assets/images/products-700-hs.png",
        price: "12540",
      },
    ],
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
        url: "http://www.tokio.tokyo/",
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
        reasonHeader: "サロンでインカラミ",
        reasonText: "カリスマ美容師支持率NO.1の<br class='br_on576'>サロントリートメント<br class=“br_on”>TOKIOインカラミトリートメント",
      },
      {
        reasonNo: "選ばれる理由２",
        reasonHeader: "イエでインカラミ",
        reasonText:
          "ご自宅でTOKIOインカラミを再現<br class='br_on576'>TOKIO IE インカラミシャンプー・トリートメント",
      },
      {
        reasonNo: "選ばれる理由３",
        reasonHeader: "成分へのこだわり",
        reasonText:
          "こだわり抜いた洗浄成分とケア成分<br>今までにない仕上がりを体感",
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
        alias: "A様",
        img: "assets/images/user-voice001.png",
        voice: `硬い・多い・ごわつき、うねりが気になる髪質が、段々と改善されていきます。`,
      },
      {
        id: 2,
        alias: "B様",
        img: "assets/images/user-voice002.png",
        voice: `サロン帰りのような髪の柔らかさに仕上がるので、重宝しています！!`,
      },
      {
        id: 3,
        alias: "C様",
        img: "assets/images/user-voice003.png",
        voice: `ドラッグストアなどで販売されているシャンプーとは段違いで髪の毛に天使の輪っかが誕生します。`,
      }
    ],
  },
});

var vm = new Vue({
  el: "#product-list",
  data: {
    tokioProducts: [
      {
        name: "TOKIO INKARAMI LIMITED",
        img: "assets/images/tokio-limited.jpg",
        url: "https://tokio.tokyo/tokio-ie-inkarami-limited/"
      },
      {
        name: "TOKIO HYPER INKARAMI",
        img: "assets/images/hyper-limited.jpg",
        url: "https://tokio.tokyo/tokio-ie-hyper-inkarami/"
      },
    ],
  },
});

var vm = new Vue({
  el: "#footer-links",
  data: {
    footerLinks: [
      { id: 1, text: "特定商取引法に基づく表示", url: "https://ifing-beauty.com/help/tradelaw" },
      { id: 2, text: "プライバシーポリシー", url: "https://ifing-beauty.com/help/privacy" },
      { id: 3, text: "利用規約", url: "https://ifing-beauty.com/help/agreement" },
      { id: 4, text: "会社概要", url: "https://www.ifing.com/" },
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
      },
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
      },
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

var vm = new Vue({
  el: "#ingredients",
  data: {
    products: [
      {
        tokioNumber: "1",
        keratinType: "羽毛ケラチン",
        description: `水鳥の羽毛が原料のケラチン。<br>
        髪を軽くて柔らかい仕上がりに導きます。`,
      },
      {
        tokioNumber: "2",
        keratinType: "ケラチンアミノ酸",
        description: `水鳥の羽毛が原料のケラチン。<br>
        髪を軽くて柔らかい仕上がりに導きます。`,
      },
      {
        tokioNumber: "3",
        keratinType: "羊毛ケラチン",
        description: `内部補修、ハリ、強さをもたらします。<br>
        TOKIO IEの補修効果を完結させます。`,
      },
    ],
  },
});
