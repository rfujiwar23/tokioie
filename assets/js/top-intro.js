
  new Vue({
	el: '#top-intro',
	data: {
        mainTitle: '世界が認めた「TOKIO」',
        mainBody: `
        <em>日本を代表する、トリートメントの代名詞となった「TOKIO インカラミ」。</em><br>
        美容室で行う毛髪内部補修型の4ステップトリートメントのブランドです。 <br>
        世界中で"Made in Japan"が伝わる名前、東京=TOKIO。<br>
        毛髪の中に“イン”して、補修成分を”カラミ”合わせるから「インカラミ」。
        この二つの言葉が組み合わさり、ブランド名「TOKIO インカラミ」が誕生しました。
        髪の主成分であるケラチンを補給し、髪を徹底的に補修します。
        そんな本格的サロンメニューをご自宅で味わえるホームケア・シャンプー&トリートメントがTOKIO IE(トキオアイイー)です。
        `,
        hiddenTitle: '【TOKIOインカラミの想い】',
		hiddenBody: `
        日本国内にとどまらず、欧米・アジアをはじめ世界でも、日本から来た 「世界一のトリートメント」と評されています。
          世界中の美容師の方々から愛される、ハイレベルなサロンケアメニューとして日々進化していますが、
           その秘訣はやはり、「インカラミ」という特許技術にあります。<br>
           インカラミによって、毛髪内部に浸透した補修成分が化学反応を起こし定着します。 
          髪の内部からしっかりケアする納得の補修力そして持続力、軽くて柔らかい独特の質感。
           TOKIOにしか出せないと言われるこの効果をぜひ美容室だけでなく、ご自宅でも毎日実感していただきたい。
           それが髪の根本的な悩み解決にもつながることを信じて・・・<br>こうした想いを持って開発したのが、<br class="br_on576"><strong>TOKIO IE ホームケアシリーズです。
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
