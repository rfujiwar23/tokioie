
  new Vue({
	el: '#top-intro',
	data: {
        mainTitle: '世界が認めた「TOKIO」',
        mainBody: `
        日本を代表する、トリートメントの代名詞となった<strong>「TOKIO インカラミ」</strong>。<br> 
        美容室で行う毛髪内部補修型の4ステップトリートメントのブランドです。 
        世界中で"Made in Japan"が伝わる名前、<em>東京=TOKIO</em>。<br>
        毛髪の中に<em>“イン” </em>して、 補修成分を<em>”カラミ”</em>合わせるから<strong>「インカラミ」</strong>。
        この二つの言葉 が組み合わさり、ブランド名<strong>「TOKIO インカラミ」</strong>が誕生しました。<br>
        髪の主成分であるケラチンを補給し、髪を徹底的に補修します。<br>
        そんな本格的サロンメニューをご自宅で味わえるホームケア・シャンプー&トリートメントが<strong>TOKIO IE(トキオアイイー)</strong>です。 
        `,
        hiddenTitle: '【TOKIOインカラミの想い】',
		hiddenBody: `
        日本国内にとどまらず、欧米・アジアをはじめ世界でも、日本から来た <strong>「世界一のトリートメント」</strong>と評されています。<br>
          世界中の美容師の方々から愛される、ハイレベルなサロンケアメニューとして日々進化していますが、
           その秘訣はやはり、<strong>「インカラミ」</strong>という特許技術にあります。<br>
           インカラミによって、毛髪内部に浸透した補修成分が化学反応を起こし定着します。 
          髪の内部からしっかりケアする納得の補修力、そして持続力、軽くて柔らかい独特の質感。
           TOKIOにしか出せないと言われるこの効果をぜひ美容室だけでなく、ご自宅でも毎日実感していただきたい。
           それが髪の根本的な悩み解決にもつながることを信じて・・・<br>こうした想いを持って開発したのが、<strong>TOKIO IE ホームケアシリーズ</strong>です。
        `,
        youTubeVideoLinkID: 'G_6CIRy4b4Q'
	},
	methods: {
        getHiddenTitle: function() {
            return this.hiddenTitle;
        },
		getHiddenText: function() {
			return this.hiddenBody;
		},
        getTopTitle: function() {
            return this.mainTitle;
        },
        getTopText: function() {
			return this.mainBody;
		}
	}
});
