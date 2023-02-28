var tabs = [
    {
      title: "シャンプー",
      img: 'assets/images/tokio-ie-platinum-400-700-shampoo.png',
      content: "タウリン（洗浄成分）を用いた低刺激アミノ酸系シャンプー。優れた泡立ちときしみのない質感で、髪と頭皮を優しく洗い上げます。",
      size: "400ml/700ml",
      list1: "洗浄成分：タウリン",
      list2: "補修成分：反応型水鳥由来加水分解ケラチン",
      list3: "保湿成分：ペリセア/フラーレン（保湿剤）",
      list4: "香り：レモングラス",
      list5: null,
      link: "https://ifing-beauty.com/products/list?category_id=15",
      ingredientTitle: "タウリンとは?",
      ingredientDesc: "タウリン系シャンプーは、適度な洗浄力とキメ細かな泡立ちが特徴のシャンプーです。 サッパリした仕上がりで、頭皮のバリア機能を果たす皮脂を落とし過ぎません。 また、人体を構成するアミノ酸に近い成分で作られているため、安全性も高く敏感肌の方でも安心して使えます。"
    },
    {
      title: "トリートメント",
      img: 'assets/images/tokio-ie-platinum-400-700-treatment.png',
      content: "3種類のケラチン（補修剤）によって髪にコシと補修効果を与え、健康な髪が持つ脂質成分によって保湿しながら柔らかくサラサラな髪へと導きます。",
      size: "400g/700g",
      list1: "補修成分：ケラチンアミノ酸・加水分解ケラチン",
      list2: "保湿成分：メドウフォーム-ラクトン/フラーレン/セラミドNG",
      list3: "香り：レモングラス",
      list4: null,
      list5: null,
      link: "https://ifing-beauty.com/products/list?category_id=15",
      ingredientTitle: "メドウフォームとは?",
      ingredientDesc: "メドウフォームは、加熱するとケラチンと結合し、疎水化を促します。髪が疎水化すると、水をはじき、油をなじませることで常に一定の水分量を保たれます。メドウフォームが髪の内外部に吸着して水をはじき、健康な髪へと導いてくれます。"
    },
    {
      title: "オイルトリートメント",
      img: 'assets/images/tokio-ie-platinum-oiltreatment.png',
      content: "3種類のケラチン（補修剤）によって髪にコシと補修効果を与え、健康な髪が持つ脂質成分によって保湿しながら柔らかくサラサラな髪へと導きます。",
      size: "100ml",
      list1: "加水分解シルク",
      list2: "スクワラン",
      list3: "ワサビノキ種子油（毛髪保護成分）",
      list4: "フラーレン（保湿剤）",
      list5: null,
      link: "https://ifing-beauty.com/products/list?category_id=15",
      ingredientTitle: "スクワランとは?",
      ingredientDesc: "優れた保湿力と浸透力をもたらします。人間の皮脂に近い成分なので非常に肌なじみが良く、髪の毛のパサつき、切れ毛の防止に繋がります。"
    },

  ];

  var vue = new Vue({
    el: "#app5",
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
