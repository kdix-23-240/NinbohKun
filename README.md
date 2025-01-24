# にんぼうくん
- **企画名:** 高齢化による認知症を予防するにんぼうくんの開発。
  - **作品名:** にんぼうくん
  - **班番号:** RWC24-group25
  - **チーム名:** 株式会社morimoto
  - **チームメンバー:**
    - 2312110115：森本一稀
    - 2312110240：三上晃英
    - 2312110288：佐藤晃登
    - 2312110309：須々木温大

# 1. プロジェクト概要
近年日本では少子高齢化が進んでいます。認知症になることで介護の必要性が高まり、医療現場にも負担をかけてしまう。私たちはこの高齢化によって増加している認知症を対策、予防をするアプリを制作する。予防するためには脳の活性化、適度な運動を習慣化できる機能、自らの健康の管理に心掛ける機能が必要だ。

## エビデンス
![認知症増加推移データ](https://github.com/KDIX-RWCProjects/RWC24-group25/assets/166379330/ee342f72-6978-4256-ba69-c14b6930d8f3)
![認知症年齢別データ](https://github.com/KDIX-RWCProjects/RWC24-group25/assets/166379330/bdacf9f2-c50f-4213-8d1f-1539fe6663ce)

上記の図はそれぞれ認知症増加推移をグラフ化したものと認知症にかかっている方の年齢別グラフです。
- **認知症増加推移データ[^1]**
  - 2012年では認知症疾患者数は約460万人。
  - 2025年には5人に1人が認知症になる可能性がある。
  - 認知症疾患者数が減少することはないと予想されている。
  
- **認知症年齢別データ[^2]**
  - 65歳から認知症の症状が現れている。
  - 85歳以上になると2人に1人は認知症になっている。

## 提供内容
  - **環境チェック:** M5Stackを利用して温度、湿度、気圧を確認します。例を図1に示す
<img width="316" alt="スクリーンショット 2025-01-15 17 44 50" src="https://github.com/user-attachments/assets/208c65dc-0108-4338-9ce4-9639be02978f" />

   図1

  - **タスク管理:** 時間ごとにタスクを設定する。時間内に忘れずに達成してください。これを毎日行うことで記憶力向上、怠惰な生活からの脱却、日常生活への定着が期待できます。また達成度を計算しウェブサイトで可視化する。
    - 例 <br>
      ・認知症を予防、改善したい方
  <img width="455" alt="M5Stack環境情報" src="https://github.com/user-attachments/assets/cf59d20c-5011-47ef-9c6b-6dd6fdab55dd">
      図2 <br>
      図２の画面上段は時間帯と達成度を表している。<br>
      図２の画面中段はタスクを表している。<br>
      図２の画面下段は実行の有無を表している。<br>
      図２のPostボタンはスプレッドシートに送信。Checkボタンは実行の有無をする。<br>
      
  - **カレンダー:** ウェブサイトにて過去の環境情報、達成度チェックすることができる。
  - **時計:**　M5Stackで時間を確認することができる。

## 背景と課題 
高齢化により、認知症の増加が顕著に現れている。認知症を予防をする、自らの健康を管理するシステムが必要である。このシステムを開発し高齢化社会を打破するために開始された。

## 目的
認知症を予防・改善し、自身で健康を管理することで、認知症を避け、克服できるようにする。

## 対象ユーザと提供する価値  
- **認知症疾患者また予防をしたい方**
  - 脳の活性化が重要です。日常的に脳を使う活動を習慣化することが必要だ。
  - 毎日の日課を設定する。決められた時間タスクを達成し、完了ボタンを押す。物忘れ防止のための習慣ぐせをつける機能と達成感を提供する。
- **健康改善をしたい方**
  - 運動する習慣をつける環境が必要だ。
  - ダイエットしたい方だと散歩する時間を設定したり、筋肉トレーニングする時間と回数を設定して時間内に達成をする。健康を改善できる機能と達成感を提供する。またその日の環境情報を取得し適切な服装で外出できる。
 
## 関連するサービス

- 脳を活性化させ、コミュニケーションが発生するゲーム
  - パズルゲーム
  - カードゲーム　具体例：ナンジャモンジャ
  - リズムゲーム
これらのユーザー層は子供から高年齢層まで幅広い。ですが認知症に特化したサービスではない。  <br>


- 認知症ケアパス [^3]
認知症ケアパスとは、地域ごとに、発症予防から人生の最終段階まで、生活機能障害の進行状況に合わせ、いつ、どこで、どのような医療・介護サービスを受ければよいのか、これらの流れをあらかじめ標準的に示したものです。
地域ごとに「認知症ケアパス」を確立し、認知症の人やその家族、医療・介護関係者等の間で共有され、サービスが切れ目なく提供されるようにその活用を推進しています。
お住まいの市町村の「認知症ケアパス」については、高齢者福祉担当部局、地域包括支援センター等にお問い合わせください。（未作成の市町村がありますので、お問い合わせの際にはご留意ください。）
<br>

- 認知症カフェ
認知症の人やその家族が、地域の人や専門家と相互に情報を共有しお互いを理解し合う「認知症カフェ」等の設置を推進しています。地域の状況に応じて、様々な共有主体により実施されています。



# 2. プロジェクトの成果物
## システムの概要
- システム名: にんぼうくん
- システムの目的: 高齢化により、認知症の増加が顕著に現れている。認知症を予防をするために私たちは健康記録日記を制作する。設定したタスクを時間内に達成し記録をつける機能があり、これは習慣ぐせをつけることを目的とし、物忘れを防ぐ。さらに環境情報を取得することが可能であり、自らの健康を管理する。これらをすることで自分の健康を管理することが可能であり、生活を見直すことで認知症を予防することが可能である。また認知症の治療にもつながると考える。M5Stackで環境情報を取得、サーバーでデータを管理、蓄積しWebサイト上で可視化する。

## 完成したシステム
M5Stackで環境情報を取得し、Webサイトにて日付を指定して確認可能。
M5Stackでタスクの管理ができる。タスクを時間内に達成し完了ボタンを押す。タスクの達成度を計算しWebサイトにて日付を指定して確認可能。
Webサイトを閲覧するためにはログインが必要。新規登録で新しくIDとパスワードを発行する。ログイン画面で発行したID、パスワードを入力しログインする。

## 完成した主要な機能
- 環境情報取得機能：リアルタイムで気圧、温度、湿度をM5Stackで取得する。
  - テスト結果：M5Stackでそれぞれのデータを可視化できているので問題なし。
- 環境情報管理機能：環境情報をサーバーに送信しデータを管理する。
  - テスト結果：スプレッドシートに送信できていたので問題なし。
- タスク管理機能：タスクをM5Stackで表示する。
  - テスト結果：M5Stackで表示されているので問題はないが、タスクの変更はユーザーはできないので課題は残った。
- 時計機能：M5Stackで現在の時間を表示する。
  - テスト結果：表示されていたので問題はない。
- ユーザー管理機能:ログイン
  - テスト結果：新規登録時にスプレッドシート上にIDとパスワードが登録される。そして登録したIDとパスワードでログインが可能であるため問題なし。

# 3. プロジェクトの進行
<img width="977" alt="Fがんと" src="https://github.com/user-attachments/assets/4572ec7c-effe-4996-8e5b-2b91800d34db" />図3

**#1**は未完成に終わった。原因は実装する時間が足りない。個別化の仕組みが不明だった。**#2**は時間通り完成した。M5Stackからサーバーへの送信が可能になり、環境情報、タスクの達成度が送信可能になった。**#3**はM5Stackの不具合が生じたため開始日が1ヶ月遅れになり終了日も1ヶ月遅れになってしまったが完成した。**#4**は予定通り完成。**#8**は予定通り完成したが **#9**は環境情報のみ送信可能である。当初の予定ではM5Stack2つを使用し、時計機能とタスク管理機能で1つ。環境情報と心拍センサで1つとしていたが、センサが一つしか取り付けれないためである。そのため心拍センサの機能をトラッシュした。だが時計機能とタスク管理機能の両立が不可能であるという問題に直面した。これが#3の不具合である。理由は時計を表示しながらWi-Fiに接続することができないためである。<br>
以上より当初の予定より機能は減少してしまったが、環境情報を取ることが可能でありこの情報を見て服装を決めタスクに取り組んでもらうことのできるにんぼうくん[図4]を完成できた。


<img width="194" alt="にんぼうくん" src="https://github.com/user-attachments/assets/acea5c9f-7dea-4f67-85e1-6b013a6acc88" /> 図4


# 4. 担当と貢献
**説明:**  プロジェクトのそれぞれのメンバーについて、前期と後期でどのような役割を担当し、内容としては何を達成したか述べてください。
また、このようなプロジェクトを体験した結果何が学べたかについて記載してください。

**森本一稀**  
- **前期**　プロジェクトの役割分担、プロジェクト全体の進行管理、ガントチャート作成、進捗確認を行なった。具体的には、チーム全体が計画通りに進むようガントチャートを作成し、各タスクが遅延なく進行するよう管理した。また、チームメンバーの進捗状況を定期的に確認し、進捗を全体に共有、必要に応じて調整やサポートを行い、プロジェクトの円滑な運営を支えた。これにより、プロジェクト全体の流れが可視化され、タスクの優先順位が明確になり、各メンバーが効果的に動ける環境を整えることができた。さらに前期における中間、最終レポートを作成した。
- **後期**　引き続き、プロジェクトの進行管理と進捗確認を行うとともに、具体的な技術的貢献としてM5StackとGASを連携させるプログラムの実装さらにM5Stackから送られるデータをサーバーで保管できるプログラムを担当した。これによりセンサーで得られる情報、利用者のタスクの達成度をスプレッドシートに送信することができWebサイトにて確認可能になった。また遅延しているタスクが発生したので原因を探り適切な処置を施した。
- **学べたこと**　このプロジェクトを通じて、前期はガントチャートの作成とプロジェクトの進行、進行具合の管理に手間をかけた。この後の進行のタスクを全て挙げてデザインから全て制作した。しかしガントチャートによってこの後何をすればいいのかが簡単に理解することができ進行に支障をきたさずに進めれた。進行管理能力を養えました。後期ではM5Stackからスプレッドシートへの送信を解決し、データ送信の困難さを実感した。今回一番大事だと思ったのはコミュニケーションである。プロジェクトの企画、進行の管理をまとめる上でコミュニケーションをしっかりしないとすれ違いが起きたり勘違いして実装に支障をきたしてしまうと感じたからである。
  
**三上晃英**  
- **前期**　今回のプロジェクトの企画、M5Stackのプログラミングを担当した。具体的には、にんぼうくんのタスク管理システムを実装した。
- **後期**　Webアプリのプログラミングを担当した。主に、前期で制作したWEBページの改良とカレンダー機能、グラフ機能に取り組んだ。グラフ機能の実装は繋ぎ合わせは上手く行かず諦めることとなったが、スプレッドシートのデータの読み取りとそれをカレンダーに反映させる機能を十分に実現できた。
- **学べたこと**　チームメンバーが全員とても優秀で、企画の決定・開発開始日がとても早く、開発に多くの時間を費やすことができ、最初から最後までとても順調に開発を進めることができた。チーム全体の主体性や協調性、行動力はチームの雰囲気や進捗に大きく影響することを理解した。また。チーム内で役割分担ができていたので、各々の進捗に他のメンバーが影響を受けることがなく、とても快適に開発ができた。これはタスクの細分化や割り当てがうまくできた結果であり、それらはチーム開発においてとても重要な役割を果たしていると実感した。

**佐藤晃登**  
- **前期**　M5Stackのプログラミングを担当した。具体的には、環境センサーにより得られる情報をM5Stackに表示する。固定データをサーバーに送信するプログラムを完成させた。他にも時計や心拍センサーを用いたプログラムを作成したが、M5Stackの物理的な制約などにより完成版に組み込むには至らなかった。また、サブリーダーを担当し、リーダーが不在の時プロジェクトの進行を支えた。
- **後期**　引き続きM5Stackのプログラミングを担当した。具体的には、前期で作成したプログラムに環境センサーで得られた情報をサーバーに送信する機能を追加した。タスク管理のM5Stackのプログラミングを引き継ぎ、これも同じく達成度をサーバーに送信する機能を追加した。また、後期は不具合の修正に力を入れた。
- **学べたこと**　このプロジェクトを通じて、BlocklyやPythonでのプログラミングを学ぶとともに、チームメンバーとの連携の大切さを学んだ。システム開発の面では、不具合に対するデバッグ等どう対処するべきかの経験を得られた。また、メンバーから引き継いだプログラムにコメントがしっかり書かれていたことですぐに理解でき、コメントの大切さを学んだ。

**須々木温大**  
- **前期**　サーバーのプログラミングとwebアプリのプログラミングを担当した。簡単なwebページのデザイン、ログイン機能、それに伴うサーバー側での処理を実装した。webアプリからスプレッドシートへのユーザー名とパスワードの記入、スプレッドシートに記入されたデータを参照しログインを可能にした。基準となるwebアプリの枠組みを作成することで後期からの本格的な開発を円滑に進めることが出来るようにした。
- **後期**　同じくサーバーでのプログラミングとwebアプリのプログラミングを担当した。前期ではできなかったM5Stackとの通信やターゲットユーザに合うようなwebデザイン、今回のプロジェクトに必要な機能を実装した。ターゲットユーザーは高齢者なので色使いやUIなどをシンプルなものにし、わかりやすくした。
- **学べたこと**　役割分担をし、チームで開発することの重要さと大変さを学べた。チームでの開発をすることで人それぞれのアイディアや強みを活かしながら開発ができるので、一人で行うよりもより質の高いシステムや商品ができるんだと感じた。また、チームの連携がとても大切で、誰か一人でもサボると管理が大変でプロジェクトの失敗・成功に関わる思った。他にも、サーバーやwebを作成するための基礎的なスキルや、わからないことがあった時の調べる能力も学ぶことができた。


# 5. 問題点 
## 概要
認知症疾患者は次のようなシステムを利用する。M5Stackで現在の気温などを取得し把握する。気温に合わせた服装にする。次に設定しているタスクをこなす。こなした場合はボタンを押しhad doneにする。時間帯（morning、daytime、night）が切り替われば送信ボタンを押す。これで記録をつける。ただしユーザはタスクの変更は不可能である。これはサーバーからM5Stackへの通信ができないためである。

## 一覧
- **M5Stack**
  - M5Stackの設計上、１つのM5Stackに1つのセンサーしか使うことができない。
  - 時計を表示しながらWi-Fiに接続することができない。
  - M5Stackの画面に日本語を表示できない。
  - 7×7を超えるドットの絵を表示できない。
  - ユーザーはタスクの変更は不可能である。
- **サーバー**
  - 個別のページにアクセスは不可。ホームページは共有状態である。

 
# 6. 完成図
<img width="613" alt="ログイン画面" src="https://github.com/user-attachments/assets/2256f26c-2edc-46c2-8956-b1ea270046fb" />図5
<img width="1411" alt="メニュー表" src="https://github.com/user-attachments/assets/7611f959-a338-4bfa-90f9-88843acfce36" />図6
<img width="1468" alt="カレンダー" src="https://github.com/user-attachments/assets/2b47b047-ecde-44a6-96b7-a7fd8ada8787" />図7

# 7. プレゼンテーション資料

https://docs.google.com/presentation/d/19C8ol2zvXBm1mJZEqRiLjlfP4Y7FHqDzTCzwbKBtBQY/edit?usp=sharing

# 8. 参考リスト
**例**  
[^1]: 資料:「日本における認知症の高齢化人口の将来推計に関する研究」（平成26年度厚生労働科学研究費補助金特別研究事業　九州大学二宮教授）より内閣府作成．https://www8.cao.go.jp/kourei/whitepaper/w-2017/html/gaiyou/index.html.
[^2]: 「日本における認知症の高齢化人口の将来推計に関する研究」（平成26年度厚生労働科学研究費補助金特別研究事業）より算出 ，https://www.tr.mufg.jp/shisan/mamori/dementia/02.html．
[^3]: 厚生労働省ホーム > 政策について > 分野別の政策一覧 > 福祉・介護 > 介護・高齢者福祉 > 認知症施策 > 主な認知症施策https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000076236_00006.html#%E7%96%BE%E6%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC<br>
