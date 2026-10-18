export const guides = {
  "ja": {
    "manual": "使い方ガイド",
    "headline": "光と動きを、<br>あなたらしく。",
    "intro": "Halo Loom は、光の粒や装飾を組み合わせてハローを作る Unity Editor ツールです。まずはひとつ作って、色・素材・動きを変えてみましょう。",
    "begin": "はじめての設定",
    "booth": "BOOTH 商品ページ",
    "version": "製品版 0.5.1 DEV · 無料版は別エディション",
    "releaseTitle": "0.5.1 DEV — チャージから発射まで、もっと華やかに",
    "releaseItems": [
      "装飾素材のチャージに、内側へ集まる光と、チャージ完了を知らせる穏やかな脈動を追加しました。",
      "散射は扇状に、光束は細く集中し、連射は段階的に発射。それぞれの軌跡に合わせた彩色の噴流と、外へ広がる粒子が続きます。",
      "ハート型リングの拡散と余韻には、色とりどりのハートがきらめきます。",
      "装飾は光だけでなく、選んだモデル本体も飛んで戻ります。内蔵 20 種類を対象に確認しています。"
    ],
    "releaseNote": "この更新は DEV 版です。掲載例は Unity Editor で描画しています。VRChat Client・ヘッドセット・複数人での表示・GPU 負荷は、この更新では再検証していません。実際に使用するアバターと環境で確認してください。",
    "devGalleryTitle": "0.5.1 DEV の光ときらめき",
    "devCaptureNote": "2026-10-18 の Unity Editor 実描画による作例です。画像内の説明は日本語です。画像をクリックして拡大できます。",
    "devEffects": [
      ["光ときらめきの作例", "dev-051-light-and-sparkle-JP.jpg", "円環・ハート・星空と装飾の光を並べた 0.5.1 DEV の Unity 作例"],
      ["多色のハート、きらめく余韻", "dev-051-colorful-hearts-JP.jpg", "ハート型リングから多色のハートが広がる、発射と余韻の Unity 作例"]
    ],
    "devInteraction": [
      ["集光から、チャージ完了、解放へ", "dev-051-charge-and-release-JP.jpg", "装飾の集光チャージ、完了時の脈動、粒子が広がる解放の 3 段階"],
      ["拡散・ビーム・連射", "dev-051-three-release-styles-JP.jpg", "彩色粒子と装飾モデルによる拡散・ビーム・連射の 3 種類の射出"]
    ],
    "skip": "本文へ移動",
    "contents": "このガイドの内容",
    "nav": [
      "はじめての設定",
      "4 つのワークスペース",
      "自作素材と取り付け位置",
      "見た目と動き",
      "持つ・チャージ・発射・戻す",
      "無料版と製品版",
      "困ったときは"
    ],
    "before": "作業前にプロジェクトをバックアップしてください。0.5.1 DEV の開発・確認環境は Unity 2022.3.22f1 / PC / Built-in、VRChat Avatars SDK 3.10.5、Modular Avatar 1.18.7、NDMF 1.14.8 です。SDK・MA・NDMF は別途導入が必要です。最低対応版の保証や Quest / モバイル / URP 対応を示すものではありません。",
    "importNote": "製品版は Editor・Shaders・Audio を含むパッケージ全体をインポートしてください。SDK / MA / NDMF 不足時は VRChat バックエンドがコンパイル対象外となり、作成・適用は使えません。SDK なしのコンパイル確認は完全な機能対応を意味しません。Shader を Editor 内へ移動しないでください。",
    "steps": [
      [
        "インポートして開く",
        "操作前にダウンロードした .unitypackage 全体をインポートします。コンパイル完了後、<code>黒猫Dev &gt; Halo Loom</code> を開きます。"
      ],
      [
        "Avatar と取り付け先を指定",
        "「基本」で Hierarchy の Avatar ルートを Avatar 欄へドラッグします。有効な Humanoid では Head が初期の取り付け先になります。自動設定されない場合は、取り付け先の Transform を直接指定してください。"
      ],
      [
        "位置と大きさを調整",
        "位置・回転・半径で調整します。「シーンビューで直接調整」も利用できます。まず小さめの半径から始め、頭や耳との重なりを確認しましょう。"
      ],
      [
        "見た目を選ぶ",
        "「外観」で基本エフェクト、装飾、または両方を選択。色・数・サイズを調整します。自作素材を使う場合は、下の「自作素材と取り付け位置」を参照してください。"
      ],
      [
        "動きを選ぶ",
        "「モーション」でカテゴリーとモーションを選び、ループ時間などを調整します。星空のみの場合は、星のまたたき・移動・軌跡を設定します。"
      ],
      [
        "作成してプレビュー",
        "「Halo を作成」を押し、「モーションをプレビュー」で確認します。既存の Halo を編集するときは、変更を適用してからプレビューしてください。"
      ],
      [
        "保存して、実際の環境で確認",
        "Unity のシーンを保存します。VRChat 用アバターは SDK の Build & Test でも確認してください。使用中の Halo が参照する Generated 資産は削除しないでください。"
      ]
    ],
    "freeStart": "無料版の場合：開くメニューは 黒猫Dev > Halo Loom Free です。基本の流れは同じですが、使えるエフェクトやモーションが異なります。",
    "workspaceIntro": "「どこに置くか」「どう見せるか」「どう動かすか」を分けて設定できます。",
    "workspaces": [
      [
        "基本",
        "Avatar、取り付け先、位置、回転、半径を設定。現在の Halo を表示するボタンは Hierarchy の対象を選択・強調し、Scene ビューのズームは変えません。",
        "01-basic-JP.png"
      ],
      [
        "外観",
        "基本エフェクト・装飾・混合を選び、色、素材、数、大きさ、透明感や軌跡を調整。使える項目は選択した見た目によって変わります。",
        "02-appearance-JP.png"
      ],
      [
        "モーション",
        "動きの種類と再生時間を設定。モーションの説明を読んで選べます。数の調整は「外観」で行います。",
        "03-motion-JP.png"
      ],
      [
        "詳細設定",
        "乱数シード、モーションの細部、演出時間、マテリアルやベイク品質など。最初は初期値のままで大丈夫です。",
        "04-advanced-JP.png"
      ]
    ],
    "screenshot": "Unity の実際の画面",
    "enlarge": "画像をクリックして拡大",
    "captureNote": "画像は旧 UI（2026-10-01）の操作例です。0.5.0 では表示や配置が異なる場合があります。Avatar は実際の対象を指定してください。",
    "customIntro": "製品版では、星やクリスタルだけでなく、自分で作った小物も素材にできます。きれいな装飾にも、ちょっと楽しい組み合わせにも。",
    "customSteps": [
      "「外観」の表示モードを装飾、または基本エフェクトと装飾の混合にします。",
      "素材の種類をカスタム素材にして、<strong>Project ウィンドウの Prefab</strong> を指定します。Hierarchy 上のオブジェクトは直接使用できません。Prefab の代わりに Mesh と Material を指定することもできます。",
      "装飾数、配置方法、大きさを調整します。半径は軌道の大きさ、装飾のスケールは素材自体の大きさです。",
      "向きを「パスに沿う」「外向き」「中心向き」などから選びます。モデルの正面が合わない場合は素材の回転補正を調整します。",
      "「モーション」で動きを選び、作成または変更を適用します。元の Prefab・Mesh・Material は変更せず、生成した側を使用します。"
    ],
    "placementTitle": "頭以外にも取り付けられます",
    "placement": "「基本」の取り付け先を手首・胸・背中などの Transform、または自分で用意したアンカーへ変更します。その部位に合わせて位置・回転・半径を調整してください。各部位に自動フィットする機能ではありません。",
    "customWarning": "素材を増やすほど、ポリゴン・Renderer・ParticleSystem の負荷も増えます。まず少数から確認してください。コスト表示は目安で、動的な生成や透明の重なりをすべて測定するものではありません。第三者の素材・Runtime Component の VRChat 対応は保証しません。",
    "clipTitle": "素材自身のアニメーションを使うには？",
    "clip": "任意の Generic AnimationClip を「素材自身のアニメーション」に指定できます。素材をルートにした曲線が対象で、Halo の周回とは別に動かせます。Humanoid Clip、Animation Events、合わないバインディングには対応しません。Prefab に既存の Animator Controller / Animation がある場合は追加 Clip を指定せず元の構成を保つか、Controller のない素材を用意してください。第三者 Animator の Editor プレビューは保証対象外です。",
    "effects": [
      [
        "光の軌跡",
        "02-light-trails.png"
      ],
      [
        "エネルギーライン",
        "04-energy-lines.png"
      ],
      [
        "バブル",
        "03-bubbles.png"
      ],
      [
        "星空リング",
        "01-starfield.png"
      ]
    ],
    "effectNote": "実際の Unity 表示による組み合わせ例です。各画像が独立した一括プリセットとして付属するわけではありません。エネルギーラインは線の太さ、バブルは透明感も調整できます。",
    "motionTitle": "装飾と光点に、20 種類の動き",
    "motion": "穏やかな浮遊、螺旋、跳躍、編隊、演出のカテゴリーから選べます。まずは穏やかな動きでサイズを合わせ、その後に環面螺旋やホップ、収束演出を試すのがおすすめです。衝突系は見た目の演出で、物理的な衝突判定ではありません。大きい素材は重なることがあります。",
    "starTitle": "星空は、またたきと小さな移動で",
    "star": "微小な四芒星が、中空の立体的なリングに分布します。外観で密度・星のサイズ・リングの厚みを、モーションでまたたき・短い閃光・移動・軌跡を調整します。星空そのものは独自の星アニメーションを使い、混合した装飾には通常のモーションを設定できます。",
    "randomTitle": "ランダム A / B / C",
    "random": "相性のよい候補を 3 種類以上選ぶと、異なる 3 つの動きを A → B → C の順に繋いで再生します。ループ時間は 3 段全体の長さです。組み合わせは保存され、毎周その場で抽選し直すものではありません。変更したいときは再抽選を使います。",
    "preview": "プレビューは反映済みのアニメーションを再生します。設定を変えたら適用して確認しましょう。既存の Halo を編集する前に、上部の「編集中の Halo」が目的のオブジェクトか確認してください。別案を残すときは複製を作成します。",
    "columns": [
      "内容",
      "無料版",
      "製品版"
    ],
    "rows": [
      [
        "基本エフェクト",
        "光点・中空の五芒星",
        "光点・ライン・バブル・星空"
      ],
      [
        "モーション",
        "穏やかな浮遊 / 波乗り周回",
        "20 種類 + ランダム A/B/C"
      ],
      [
        "軌道",
        "円形",
        "円形 / ハート / 花形"
      ],
      [
        "内蔵装飾・自作素材",
        "なし",
        "20 種類の装飾、Prefab / Mesh + Material"
      ],
      [
        "取り付け位置・色・サイズ",
        "調整可能",
        "調整可能"
      ],
      [
        "ゲーム内インタラクション",
        "含まれません",
        "本人の持ち替え・チャージ・射出・頭上収納／PC 操作。SDK + MA + NDMF が必要"
      ],
      [
        "時間制限・透かし",
        "なし",
        "なし"
      ]
    ],
    "editionNote": "無料版は製品版なしで使用できます。同じプロジェクトで共存できますが、両版は互いの生成物を編集しません。価格・配布条件は BOOTH 商品ページをご確認ください。",
    "faq": [
      [
        "Shader が見つからない / ピンク色になる",
        "パッケージに Editor と Shaders の両方が入っているか確認し、完全なパッケージを再インポートしてください。製品版の場所は Assets/黒猫Dev/HaloMaker、無料版は Assets/黒猫Dev/HaloLoomFree です。Shader は Editor の外に置きます。改善しない場合は Console の Shader エラーと使用環境を添えてご連絡ください。"
      ],
      [
        "既存の Halo が見つからない",
        "Hierarchy で目的の Halo 本体を選択し、ウィンドウ上部の編集対象を確認してください。複数ある場合は個別に選びます。見つからないまま新規作成すると重複するため、先に選択と Avatar の指定を確認しましょう。旧形式が読み取り専用の場合、既存物は残したまま新しい Halo を設定します。"
      ],
      [
        "変更したのにプレビューが変わらない",
        "変更を適用してからプレビューしてください。即時反映をオフにしている場合、欄を変えるだけでは生成物は更新されません。編集中の対象も確認してください。"
      ],
      [
        "手の操作が反応しない",
        "ジェスチャーを解除し、本人の手で光環へ触れた後に握ってください。親指を立てるとチャージ、満充電後に元位置から離れて握ると発射します。元位置で開いて握ると戻ります。変更後は適用・保存し Build & Test で確認してください。通常のアニメーションプレビューは Client の手操作を再現しません。"
      ],
      [
        "重い / 素材が重なりすぎる",
        "まず装飾数・星の密度を下げ、軽い素材で確認します。自作 Prefab 内のパーティクルや複数の Renderer、透明の重なりにも注意してください。負荷警告は FPS の保証や完全な性能診断ではありません。"
      ],
      [
        "更新・削除するときに気をつけることは？",
        "更新前にバックアップしてください。0.5.0 の現行構造から 0.5.1 DEV へは、既存の Halo を読み込み「変更を適用」で再生成できます。既存 Controller の GUID は維持されます。シーンを保存し、SDK の Build & Test で確認してください。これより古い非互換構造は、旧 Halo と確認済み所有データを取り外して再作成します。外部素材と他の Halo は削除しないでください。同じ Editor セッションは Undo/Redo、再起動後の削除復元は元シーンを開いて「削除／復元」から行います。Generated と .HaloLoomArchive は利用・復元に必要な間保持してください。"
      ],
      [
        "どの環境でも同じ見た目になりますか？",
        "画像は Unity Editor / Built-in / DX11 での表示です。ワールドの明るさ、カメラ、透明の重なりなどで見え方は変わります。Quest・モバイル・URP などすべての環境への対応を意味しません。対象アバターと実際の利用環境で確認してください。"
      ]
    ],
    "support": "解決しない場合は、使用版・Unity のバージョン・再現手順・Console のエラーを添えて、商品ページからお問い合わせください。",
    "top": "ページの先頭へ",
    "updated": "更新 2026-10-18 · 製品版 0.5.1 DEV",
    "rights": "画像は使用例です。アバター・第三者の素材は付属しません。",
    "heroAlt": "Unity で描画した、青白いクリスタルが周回する Halo",
    "interactionTitle": "持つ・チャージ・発射・戻す",
    "interactionSteps": [
      "光環へ先に触れ、その手で握ると持ちます。手を開いても同じ手に残ります。本人の接触と手のジェスチャーを使います。",
      "持っている手で親指を立ててチャージ（初期値3秒、2～4秒）。途中で形を変えると中止。満充電の光と音の合図後は開いてもエネルギーを保持します。",
      "頭の元位置から離れて握ると発射。方向は拳の指関節の前方、手首に追従します。設定で拡散／ビーム／連射を選択できます。演出後も持ち続けます。",
      "戻すには同じ手を頭の元位置に戻し、開いてからもう一度握ります。満充電でも収納が優先され、メニューは不要。握ったまま近づけるだけでは戻りません。独自 home はその元位置を使います。",
      "持ち替えは元の手を開き、もう一方で触れて握ります。チャージはやり直します。戻した後も開いてから握ると再び取れます。手のジェスチャーが固定されている場合は解除してください。",
      "PC：Halo Loom → PC → 展開 → チャージON → 満充電後に同じトグルOFFで発射。途中のOFFは中止。中止して戻す／リセットも利用できます。"
    ],
    "update": "更新前にバックアップしてください。0.5.0 の現行構造から 0.5.1 DEV へは、既存の Halo を読み込み「変更を適用」で再生成できます。既存 Controller の GUID は維持されます。シーンを保存し、SDK の Build & Test で確認してください。これより古い非互換構造は、旧 Halo と確認済み所有データを取り外して再作成します。外部素材と他の Halo は削除しないでください。同じ Editor セッションは Undo/Redo、再起動後の削除復元は元シーンを開いて「削除／復元」から行います。Generated と .HaloLoomArchive は利用・復元に必要な間保持してください。",
    "grabFaq": "ジェスチャーを解除し、本人の手で光環へ触れた後に握ってください。親指を立てるとチャージ、満充電後に元位置から離れて握ると発射します。元位置で開いて握ると戻ります。変更後は適用・保存し Build & Test で確認してください。通常のアニメーションプレビューは Client の手操作を再現しません。",
    "row": [
      "ゲーム内インタラクション",
      "含まれません",
      "本人の持ち替え・チャージ・射出・頭上収納／PC 操作。SDK + MA + NDMF が必要"
    ]
  },
  "en": {
    "manual": "User Guide",
    "headline": "Make light and motion<br>your own.",
    "intro": "Halo Loom is a Unity Editor tool for creating halos from glowing effects and ornaments. Start with one halo, then make it yours with color, custom assets and motion.",
    "begin": "Get started",
    "booth": "View on BOOTH",
    "version": "Pro 0.5.1 DEV · Free is a separate edition",
    "releaseTitle": "0.5.1 DEV — a fuller charge and release",
    "releaseItems": [
      "Ornament charging draws light inward, followed by a gentle pulse that makes the ready state easier to recognize.",
      "Scatter opens into a fan, Beam concentrates into narrow paths, and Volley fires in stages. Colorful jets and outward-spreading particles follow each release style.",
      "The heart-shaped ring scatters colorful, twinkling hearts through its release and lingering particles.",
      "The selected ornament models themselves fly out and return with the light. All 20 built-in ornaments are covered by the Unity checks."
    ],
    "releaseNote": "This is a DEV update. Examples are rendered in Unity Editor. VRChat Client, headset use, multiplayer visibility and GPU cost have not been revalidated for this update. Check the avatar and environment you intend to use.",
    "devGalleryTitle": "Light and sparkle in 0.5.1 DEV",
    "devCaptureNote": "Actual Unity Editor examples captured on 2026-10-18. Text within the images is Japanese. Click an image to enlarge it.",
    "devEffects": [
      ["Light and sparkle examples", "dev-051-light-and-sparkle-JP.jpg", "Unity examples of circle, heart, starfield and ornament lighting in 0.5.1 DEV"],
      ["Colorful hearts and lingering sparkle", "dev-051-colorful-hearts-JP.jpg", "Unity examples of colorful hearts spreading from the heart-shaped ring during release and its lingering particles"]
    ],
    "devInteraction": [
      ["Gather light, get ready, release", "dev-051-charge-and-release-JP.jpg", "Three stages of ornament charging: gathering light, the ready pulse and release with spreading particles"],
      ["Scatter, Beam and Volley", "dev-051-three-release-styles-JP.jpg", "The Scatter, Beam and Volley release styles with colorful particles and ornament models"]
    ],
    "skip": "Skip to content",
    "contents": "IN THIS GUIDE",
    "nav": [
      "Get started",
      "Four workspaces",
      "Custom assets & attachment",
      "Effects & motion",
      "Hold, charge, fire and return",
      "Free vs Pro",
      "Troubleshooting"
    ],
    "before": "Back up your project first. The development/check environment for Pro 0.5.1 DEV is Unity 2022.3.22f1 / PC / Built-in, VRChat Avatars SDK 3.10.5, Modular Avatar 1.18.7 and NDMF 1.14.8. Install these dependencies separately. This does not establish minimum-version, Quest, mobile or URP compatibility.",
    "importNote": "Import the whole Pro package, including Editor, Shaders and Audio. Without SDK / MA / NDMF, the VRChat backend is excluded from compilation and Create / Apply is unavailable. A no-SDK compile check does not establish full functionality. Keep shaders outside Editor.",
    "steps": [
      [
        "Import and open",
        "Import the downloaded .unitypackage in full. After compilation, open <code>黒猫Dev &gt; Halo Loom</code>."
      ],
      [
        "Assign your Avatar and attachment",
        "In Basic, drag the scene Avatar root from the Hierarchy into Avatar. A valid Humanoid initially uses Head. If Head cannot be resolved, assign the attachment Transform yourself."
      ],
      [
        "Set position and size",
        "Adjust Position, Rotation and Radius, or enable Adjust in Scene View. Start with a small radius and check for overlap with the head and ears."
      ],
      [
        "Choose the appearance",
        "In Appearance, choose base effects, ornaments, or a mix of both. Adjust color, count and size. For your own models, see Custom assets & attachment below."
      ],
      [
        "Choose the motion",
        "In Motion, select a category and preset, then adjust loop duration. A starfield-only halo instead uses twinkle, movement and trails."
      ],
      [
        "Create and preview",
        "Click Create Halo, then Preview Motion. When editing an existing halo, apply your changes before previewing."
      ],
      [
        "Save and check in use",
        "Save your Unity scene. For VRChat avatars, also check with the SDK’s Build & Test. Keep the Generated assets referenced by any halo still in use."
      ]
    ],
    "freeStart": "Using Free? Open 黒猫Dev > Halo Loom Free instead. The basic workflow is similar, but the available effects and motions differ.",
    "workspaceIntro": "Separate where the halo sits, what it looks like, and how it moves.",
    "workspaces": [
      [
        "Basic",
        "Set Avatar, attachment, position, rotation and radius. Locate Current Halo selects and highlights the object in the Hierarchy without changing the Scene view zoom.",
        "01-basic-JP.png"
      ],
      [
        "Appearance",
        "Choose base effects, ornaments or both. Set materials, color, count, size, transparency and trails. Available controls depend on the current style.",
        "02-appearance-JP.png"
      ],
      [
        "Motion",
        "Choose motion and loop duration. Read the description to see what a preset does. Adjust object count in Appearance.",
        "03-motion-JP.png"
      ],
      [
        "Advanced",
        "Fine-tune seeds, motion details, phase timing, materials and bake quality. Defaults are a good starting point.",
        "04-advanced-JP.png"
      ]
    ],
    "screenshot": "Actual Unity interface",
    "enlarge": "Click the image to enlarge",
    "captureNote": "Screenshots show the earlier UI (2026-10-01). Layout and labels may differ in 0.5.0. Assign your actual Avatar when configuring it.",
    "customIntro": "Pro supports your own small props as well as stars and crystals. Make something elegant, playful, or a little unexpected.",
    "customSteps": [
      "In Appearance, choose Ornaments or a mix of effects and ornaments.",
      "Select Custom as the asset source and assign a <strong>Prefab from the Project window</strong>, not a scene instance from the Hierarchy. You can use Mesh + Material instead.",
      "Set count, placement and scale. Radius changes the orbit; ornament scale changes the asset itself.",
      "Choose Follow Path, Face Outward, Face Center or another orientation. Adjust the rotation offset when the model’s own forward axis does not match.",
      "Choose motion, then create or apply. Generated instances are used; the original Prefab, Mesh and Material assets are not edited."
    ],
    "placementTitle": "Not just above the head",
    "placement": "In Basic, change the attachment to a wrist, chest, back Transform or your own anchor. Adjust local position, rotation and radius to suit the location. This is manual placement, not automatic fitting to each body part.",
    "customWarning": "More copies mean more polygons, renderers and potentially particles. Start with a low count. Cost estimates do not capture every runtime effect or transparent overlap. Halo Loom does not guarantee compatibility for third-party assets or runtime components.",
    "clipTitle": "Can the asset play its own animation?",
    "clip": "An optional Generic AnimationClip can animate the asset independently of the outer halo motion. Bindings must be relative to the asset root. Humanoid clips, Animation Events and mismatched bindings are not supported. If the Prefab already has an Animator Controller or legacy Animation, leave the extra clip empty to preserve that setup, or provide an asset without a controller. Editor preview of third-party Animator setups is not guaranteed.",
    "effects": [
      [
        "Light trails",
        "02-light-trails.png"
      ],
      [
        "Energy lines",
        "04-energy-lines.png"
      ],
      [
        "Bubbles",
        "03-bubbles.png"
      ],
      [
        "Starfield ring",
        "01-starfield.png"
      ]
    ],
    "effectNote": "These are actual Unity examples, not additional bundled one-click presets. Energy lines have adjustable width; bubbles have a transparency control.",
    "motionTitle": "20 motions for ornaments and light bodies",
    "motion": "Choose from gentle, spiral, hopping, formation and performance categories. Fit your assets with a calm motion first, then try a toroidal helix, hops or a collapse sequence. Clash motions are visual choreography, not physics collisions. Large assets may overlap.",
    "starTitle": "A starfield with twinkle and small movements",
    "star": "Tiny four-point stars fill a hollow, three-dimensional ring. Appearance controls density, star size and ring thickness; Motion controls twinkle, flashes, movement and trails. The starfield has its own animation, while ornaments in a mixed style can use regular motion presets.",
    "randomTitle": "Random A / B / C",
    "random": "Select at least three compatible candidates to bake three different motions into an A → B → C loop. Loop duration covers all three sections. The selection is saved, not freshly randomized every cycle at runtime. Use the reshuffle control for a new combination.",
    "preview": "Preview plays applied animation. Apply after changing settings. Before editing, check the current Halo name at the top of the window. Use Create Copy when you want to keep the existing version.",
    "columns": [
      "Feature",
      "Free",
      "Pro"
    ],
    "rows": [
      [
        "Base effects",
        "Glow dots / hollow five-point stars",
        "Particles / lines / bubbles / starfield"
      ],
      [
        "Motion",
        "Calm Float / Wave Rider",
        "20 presets + Random A/B/C"
      ],
      [
        "Paths",
        "Circle",
        "Circle / Heart / Flower"
      ],
      [
        "Ornaments & custom assets",
        "Not included",
        "20 ornaments; Prefab / Mesh + Material"
      ],
      [
        "Attachment, color & size",
        "Adjustable",
        "Adjustable"
      ],
      [
        "In-game interaction",
        "Not included",
        "Owner hold/transfer/charge/fire/head return and PC controls; SDK + MA + NDMF required"
      ],
      [
        "Time limit / watermark",
        "None",
        "None"
      ]
    ],
    "editionNote": "Free works without Pro. Both can coexist in one project, but do not edit each other’s generated halos. Check BOOTH for pricing and distribution terms.",
    "faq": [
      [
        "Shader missing, or everything is pink",
        "Check that both Editor and Shaders were imported, then reimport the complete package. Pro lives in Assets/黒猫Dev/HaloMaker; Free in Assets/黒猫Dev/HaloLoomFree. Shaders must stay outside Editor. If it persists, include the shader error from Console and your environment when contacting support."
      ],
      [
        "An existing halo is not detected",
        "Select the actual Halo object in the Hierarchy and check the editing target at the top. Select halos individually when there is more than one. Avoid creating another halo until you have checked selection and Avatar assignment. A read-only legacy object can be kept while you configure a new halo."
      ],
      [
        "Preview does not reflect my changes",
        "Apply the changes first. If live apply is off, changing a field alone does not update the generated halo. Also check which halo is being edited."
      ],
      [
        "Hand gestures do not respond",
        "Unlock gestures, touch the halo with your own hand, then make a fist. Thumbs-up charges; a fist away from home fires when ready. Open and make a new fist at home to return. Apply and save changes, then check using Build & Test. Normal animation preview does not simulate Client hand input."
      ],
      [
        "The effect is expensive or too crowded",
        "Reduce ornament count or star density and test with a lightweight asset. Check particles, multiple renderers and transparent overlap in custom Prefabs. A cost warning is not a complete performance diagnosis or FPS guarantee."
      ],
      [
        "What should I keep when updating or deleting?",
        "Back up first. When updating the current 0.5.0 structure to 0.5.1 DEV, load the existing Halo and use Apply Changes to regenerate it. Existing Controller GUIDs are preserved. Save the scene yourself and check with the SDK's Build & Test. Earlier incompatible structures need removal of the old Halo and confirmed owned data before recreating. Preserve external source assets and other Halos. Use Undo/Redo in the same Editor session; after restarting, open the original scene for receipt recovery under Remove / Restore. Keep Generated and .HaloLoomArchive while needed for use/recovery."
      ],
      [
        "Will it look the same everywhere?",
        "Images were captured in Unity Editor / Built-in / DX11. World lighting, cameras and transparent overlap can change the result. This does not establish support for every platform, including Quest, mobile or URP. Check your target avatar in its actual environment."
      ]
    ],
    "support": "If you need help, include the edition, Unity version, reproduction steps and Console error when contacting us through the product page.",
    "top": "Back to top",
    "updated": "Updated 2026-10-18 · Pro 0.5.1 DEV",
    "rights": "Images show usage examples. Avatars and third-party assets are not included.",
    "heroAlt": "An actual Unity render of pale blue crystals orbiting in a halo",
    "interactionTitle": "Hold, charge, fire and return",
    "interactionSteps": [
      "Touch the halo first, then make a fist with that hand to pick it up. Opening your hand keeps it attached. Contact and gestures use the owner’s hands.",
      "Use the holding hand’s thumbs-up to charge (default 3 seconds, adjustable 2–4). Changing gesture early cancels charging. After the ready light/audio cue, opening your hand retains energy.",
      "Make a fist away from the original head position to fire forward through your knuckles, following your wrist. Choose Scatter, Beam or Volley in Settings. The halo stays held after firing.",
      "To return, move the same hand to the original head position, open it, then make a new fist. Return takes priority even at full charge and needs no menu. Moving in with an already closed fist does not return it. A custom home uses its original position.",
      "To transfer, open the holding hand, touch with the other hand, then make a fist; charging restarts. After returning, open and make a new fist to pick up again. Unlock gestures if needed.",
      "PC: Halo Loom → PC → Expand → Charge ON → turn the same toggle OFF after the ready cue to fire. Turning it off early cancels. Cancel & return and Reset remain available."
    ],
    "update": "Back up first. When updating the current 0.5.0 structure to 0.5.1 DEV, load the existing Halo and use Apply Changes to regenerate it. Existing Controller GUIDs are preserved. Save the scene yourself and check with the SDK's Build & Test. Earlier incompatible structures need removal of the old Halo and confirmed owned data before recreating. Preserve external source assets and other Halos. Use Undo/Redo in the same Editor session; after restarting, open the original scene for receipt recovery under Remove / Restore. Keep Generated and .HaloLoomArchive while needed for use/recovery.",
    "grabFaq": "Unlock gestures, touch the halo with your own hand, then make a fist. Thumbs-up charges; a fist away from home fires when ready. Open and make a new fist at home to return. Apply and save changes, then check using Build & Test. Normal animation preview does not simulate Client hand input.",
    "row": [
      "In-game interaction",
      "Not included",
      "Owner hold/transfer/charge/fire/head return and PC controls; SDK + MA + NDMF required"
    ]
  },
  "zh-Hant": {
    "manual": "使用說明",
    "headline": "把光與動態，<br>變成自己的風格。",
    "intro": "Halo Loom 是一款 Unity Editor 光環製作工具。從發光效果與裝飾素材開始，搭配顏色、自訂模型與動畫，做出自己的 Halo。",
    "begin": "開始第一次設定",
    "booth": "前往 BOOTH 商品頁",
    "version": "製品版 0.5.1 DEV · 無料版為獨立版本",
    "releaseTitle": "0.5.1 DEV — 更飽滿的蓄力與噴射",
    "releaseItems": [
      "裝飾素材蓄力時，光會逐步向內聚集；蓄滿後以柔和脈動提示可發射。",
      "散射呈扇狀展開，光束集中成窄幅軌跡，連射分批射出。每種射法都有彩色噴流與向外擴散的粒子。",
      "心形環的散開與尾韻改為多彩愛心，保留逐顆閃爍。",
      "發射時，選用的小元素模型本體也會飛出並返回；Unity 檢查涵蓋全部 20 種內建裝飾。"
    ],
    "releaseNote": "本次為 DEV 更新，展示以 Unity Editor 實際渲染。這次尚未重新驗證 VRChat Client、頭盔、多人可見性與 GPU 負載；請在目標 Avatar 與實際使用環境確認。",
    "devGalleryTitle": "0.5.1 DEV 的光與閃爍",
    "devCaptureNote": "2026-10-18 以 Unity Editor 實際渲染的作例，圖片內文為日文；點選圖片可放大。",
    "devEffects": [
      ["光與閃爍作例", "dev-051-light-and-sparkle-JP.jpg", "並列展示圓環、心形、星空與小元素光效的 0.5.1 DEV Unity 作例"],
      ["多彩愛心與閃爍尾韻", "dev-051-colorful-hearts-JP.jpg", "心形環發射後多彩愛心散開與尾韻的 Unity 作例"]
    ],
    "devInteraction": [
      ["聚光、蓄滿、釋放", "dev-051-charge-and-release-JP.jpg", "小元素向內聚光蓄力、蓄滿脈動與粒子散開釋放的三階段"],
      ["散射、光束、連射", "dev-051-three-release-styles-JP.jpg", "彩色粒子與小元素模型呈現散射、光束、連射三種射法"]
    ],
    "skip": "跳到主要內容",
    "contents": "本頁目錄",
    "nav": [
      "第一次使用",
      "四個工作區",
      "自訂素材與掛載位置",
      "外觀與動畫",
      "拿取、蓄力、發射與歸位",
      "無料版與製品版",
      "常見問題"
    ],
    "before": "操作前先備份專案。0.5.1 DEV 開發／確認環境為 Unity 2022.3.22f1／PC／Built-in、VRChat Avatars SDK 3.10.5、Modular Avatar 1.18.7、NDMF 1.14.8。相依套件需另行安裝；不代表最低版本、Quest／行動版或 URP 已驗收。",
    "importNote": "完整匯入製品版的 Editor、Shaders、Audio。缺少 SDK／MA／NDMF 時，VRChat 後端排除編譯，無法建立／套用；無 SDK 編譯檢查不代表完整功能可使用。Shader 請放在 Editor 外。",
    "steps": [
      [
        "匯入並開啟工具",
        "完整匯入下載的 .unitypackage，等待編譯後開啟 <code>黒猫Dev &gt; Halo Loom</code>。"
      ],
      [
        "指定 Avatar 與掛載物件",
        "在「基本」將 Hierarchy 中的 Avatar 根物件拖入 Avatar 欄位。有效 Humanoid 會預設掛載 Head；若無法辨識頭骨，請直接指定掛載 Transform。"
      ],
      [
        "調整位置與大小",
        "設定位置、旋轉、半徑，也可勾選「在 Scene 中直接調整」。建議從較小的半徑開始，確認與頭部、耳朵的重疊。"
      ],
      [
        "選擇外觀",
        "在「外觀」選基礎效果、裝飾素材或混合，再調整顏色、數量與大小。自己的模型請參考下方「自訂素材與掛載位置」。"
      ],
      [
        "選擇動畫",
        "在「動態」選類別與動作，調整循環時間。純星空環則設定星點閃爍、游移與拖尾。"
      ],
      [
        "建立與預覽",
        "按「建立 Halo」，再按「預覽動畫」確認。修改既有 Halo 時，請先套用修改再預覽。"
      ],
      [
        "儲存並在使用環境確認",
        "儲存 Unity 場景。VRChat Avatar 也請用 SDK 的 Build & Test 確認。不要刪除使用中 Halo 所依賴的 Generated 資產。"
      ]
    ],
    "freeStart": "使用無料版？請開啟 黒猫Dev > Halo Loom Free。基本流程相似，但可用的效果與動作不同。",
    "workspaceIntro": "把「放在哪裡」「長什麼樣」「怎麼移動」分開設定，不用一次理解所有參數。",
    "workspaces": [
      [
        "基本",
        "指定 Avatar、掛載、位置、旋轉與半徑。「定位目前 Halo」會在 Hierarchy 選取並高亮物件，不改變 Scene 視窗的縮放。",
        "01-basic-JP.png"
      ],
      [
        "外觀",
        "選基礎效果、裝飾素材或混合，設定素材、顏色、數量、大小、透明感與尾跡。可調項目會依目前樣式改變。",
        "02-appearance-JP.png"
      ],
      [
        "動態",
        "選擇動作與循環時間，並透過說明理解動作效果。主體數量在「外觀」調整。",
        "03-motion-JP.png"
      ],
      [
        "進階",
        "微調亂數種子、動作細節、演出時間、材質與烘焙品質。第一次使用可先保留預設值。",
        "04-advanced-JP.png"
      ]
    ],
    "screenshot": "實際 Unity 介面",
    "enlarge": "點選圖片可放大",
    "captureNote": "截圖為先前介面（2026-10-01）的操作示例；0.5.0 的配置與標示可能不同。實際設定請指定自己的 Avatar。",
    "customIntro": "製品版不只能放星星與水晶，也能用自己製作的小物件。可以漂亮，也可以有一點搞笑。",
    "customSteps": [
      "在「外觀」選擇「裝飾素材」，或基礎效果與裝飾混合。",
      "素材來源選「自訂素材」，指定 <strong>Project 視窗裡的 Prefab</strong>，不是 Hierarchy 中的場景物件。也可以改用 Mesh＋Material。",
      "調整數量、排列方式與縮放。半徑影響軌道大小；裝飾縮放影響素材本身。",
      "選擇沿著路徑、朝外、朝中心等方向。模型正面不一致時，調整素材的旋轉補正。",
      "在「動態」選動作，建立或套用修改。工具使用生成的副本，不修改來源 Prefab、Mesh 或 Material。"
    ],
    "placementTitle": "不只頭頂，也能放到其他部位",
    "placement": "在「基本」把掛載物件改成手腕、胸口、背部的 Transform，或自己建立的定位物件，再依該部位調整位置、旋轉與半徑。這是手動掛載，不是自動貼合各部位。",
    "customWarning": "複製越多，面數、Renderer 與粒子成本也可能越高，請先從少量開始。成本估算無法涵蓋全部執行時生成與透明重疊；工具不保證第三方素材或 Runtime Component 的 VRChat 相容性。",
    "clipTitle": "素材本身也可以播放動畫嗎？",
    "clip": "可以選填 Generic AnimationClip，讓素材自身動畫與外層 Halo 動作分開。曲線需以素材本身為根；不支援 Humanoid Clip、Animation Events 或不相符綁定。若 Prefab 已有 Animator Controller／舊 Animation，請不指定額外 Clip 以保留原構成，或使用沒有 Controller 的素材。第三方 Animator 的 Editor 預覽不保證完整支援。",
    "effects": [
      [
        "粒子弧光",
        "02-light-trails.png"
      ],
      [
        "能量線",
        "04-energy-lines.png"
      ],
      [
        "泡泡",
        "03-bubbles.png"
      ],
      [
        "星空環",
        "01-starfield.png"
      ]
    ],
    "effectNote": "圖片為實際 Unity 的效果組合範例，不是另外附贈的一鍵預設。能量線可以調粗細，泡泡可以調透明感。",
    "motionTitle": "裝飾與光點共用 20 套動作",
    "motion": "從柔和、螺旋、跳躍、編隊、演出五類挑選。建議先用輕柔動作確認素材大小，再試環面螺旋、小跳步或收束演出。衝撞類是視覺編舞，不是物理碰撞；大素材可能互相穿插。",
    "starTitle": "星空以閃爍與微小游移呈現動態",
    "star": "微小四芒星分布在中空的立體環身內。外觀調整密度、星點大小與環身厚度；動態調整背景閃爍、星芒閃光、游移與拖尾。星空本體使用自己的星點動畫，混合的裝飾則可以使用一般動作。",
    "randomTitle": "隨機 A／B／C",
    "random": "選至少三個相容候選後，將三種不同動作烘焙為 A → B → C 循環。循環時間代表完整三段；組合會儲存，不是遊戲裡每圈重新抽選。想換一組時使用重新隨機。",
    "preview": "預覽播放的是已套用動畫。修改後請先套用；編輯前也請確認視窗上方的「目前 Halo」名稱是正確對象。想保留原版本時，使用「建立副本」。",
    "columns": [
      "項目",
      "無料版",
      "製品版"
    ],
    "rows": [
      [
        "基礎效果",
        "柔光圓點／空心五角星",
        "粒子／能量線／泡泡／星空"
      ],
      [
        "動作",
        "輕柔漂浮／波浪巡航",
        "20 套＋隨機 A/B/C"
      ],
      [
        "路徑",
        "圓環",
        "圓環／心形／花瓣"
      ],
      [
        "內建裝飾與自訂素材",
        "不包含",
        "20 種裝飾；Prefab／Mesh＋Material"
      ],
      [
        "掛載、顏色與大小",
        "可調整",
        "可調整"
      ],
      [
        "遊戲內互動",
        "未包含",
        "本人手持／換手／蓄力／發射／頭上歸位及 PC 操作；需 SDK + MA + NDMF"
      ],
      [
        "時間限制／浮水印",
        "無",
        "無"
      ]
    ],
    "editionNote": "無料版不需要製品版，兩版可在同一專案共存，但不互相編輯彼此的生成物。價格與配布條件請查看 BOOTH 商品頁。",
    "faq": [
      [
        "找不到 Shader，或畫面變粉紅色",
        "確認完整匯入 Editor 與 Shaders，必要時重新匯入完整套件。製品版位置是 Assets/黒猫Dev/HaloMaker；無料版是 Assets/黒猫Dev/HaloLoomFree。Shader 必須在 Editor 外。仍有問題請提供 Console 中的 Shader 錯誤與使用環境。"
      ],
      [
        "沒有偵測到已存在的 Halo",
        "請在 Hierarchy 直接選取 Halo 本體，並確認視窗頂部的編輯對象。多個 Halo 請個別選取；先確認選取與 Avatar 指定，避免未辨識時直接重建造成重複。舊格式若顯示唯讀，可保留舊物件，另行設定新 Halo。"
      ],
      [
        "改了設定，預覽卻沒有變",
        "請先套用修改再預覽。關閉即時套用時，只修改欄位不會更新生成物；也請確認目前編輯的是哪個 Halo。"
      ],
      [
        "手部操作沒有反應",
        "解除手勢鎖定，以本人手先接觸再握拳拿取。比讚蓄力，蓄滿後離開原位握拳發射；原位鬆開再握拳歸位。變更後先套用、儲存，再 Build & Test。一般動畫預覽不會模擬 Client 手部輸入。"
      ],
      [
        "太卡，或素材全部擠在一起",
        "先降低装飾數量或星點密度，換輕量素材確認。自訂 Prefab 中的粒子、多個 Renderer 與透明重疊也會增加負載。成本提示不是完整效能診斷或 FPS 保證。"
      ],
      [
        "更新、刪除時要注意什麼？",
        "更新前請先備份。0.5.0 現行結構升級至 0.5.1 DEV 時，載入既有 Halo 後使用「套用修改」重生成，保留既有 Controller GUID；請自行儲存場景，再以 SDK 的 Build & Test 確認。更早的不相容舊結構才需要移除舊 Halo 與確認自有資料後重建。保留外部原素材與其他 Halo。同一 Editor 工作階段用 Undo／Redo；重開後先開原場景，再於刪除／恢復使用收據復原。使用或復原仍需要 Generated 與 .HaloLoomArchive 時請保留。"
      ],
      [
        "所有環境都會長得一樣嗎？",
        "圖片以 Unity Editor／Built-in／DX11 拍攝。世界亮度、相機與透明重疊都可能影響觀感，不代表支援 Quest、手機、URP 等所有環境。請在目標 Avatar 與實際使用環境確認。"
      ]
    ],
    "support": "仍有問題時，請附上使用版本、Unity 版本、重現步驟與 Console 錯誤，透過商品頁聯繫。",
    "top": "回到頁首",
    "updated": "更新 2026-10-18 · 製品版 0.5.1 DEV",
    "rights": "圖片為使用範例；Avatar 與第三方素材不包含在商品內。",
    "heroAlt": "Unity 實際渲染的淡藍色水晶周回光環",
    "interactionTitle": "拿取、蓄力、發射與歸位",
    "interactionSteps": [
      "先接觸光環，再以同一隻手握拳拿取；張手後仍固定在手上。接觸與手勢只接受本人雙手。",
      "持有手比讚蓄力（預設3秒，可調2～4秒）；未蓄滿換手勢只取消蓄力。蓄滿有光效及音效提示，此後張手也保留能量。",
      "離開頭上原位握拳發射，方向沿拳頭前方指節、跟隨手腕。設定可選散射／光束／連射，演出後仍保持手持。",
      "放回：同一隻手移回頭上原位置，鬆開後重新握拳。蓄滿也優先歸位，不需要轉盤。已握拳才進入原位不觸發；自訂 home 使用該原位置。",
      "換手時原手張開，另一手接觸後握拳，蓄力重新開始。放回後也要鬆開再握拳才能重新拿取；必要時解除手勢鎖定。",
      "PC：Halo Loom → PC → 展開 → 開啟蓄力 → 蓄滿後關閉同一 Toggle 發射。未滿關閉只取消；也可使用取消並收回／重置特效。"
    ],
    "update": "更新前請先備份。0.5.0 現行結構升級至 0.5.1 DEV 時，載入既有 Halo 後使用「套用修改」重生成，保留既有 Controller GUID；請自行儲存場景，再以 SDK 的 Build & Test 確認。更早的不相容舊結構才需要移除舊 Halo 與確認自有資料後重建。保留外部原素材與其他 Halo。同一 Editor 工作階段用 Undo／Redo；重開後先開原場景，再於刪除／恢復使用收據復原。使用或復原仍需要 Generated 與 .HaloLoomArchive 時請保留。",
    "grabFaq": "解除手勢鎖定，以本人手先接觸再握拳拿取。比讚蓄力，蓄滿後離開原位握拳發射；原位鬆開再握拳歸位。變更後先套用、儲存，再 Build & Test。一般動畫預覽不會模擬 Client 手部輸入。",
    "row": [
      "遊戲內互動",
      "未包含",
      "本人手持／換手／蓄力／發射／頭上歸位及 PC 操作；需 SDK + MA + NDMF"
    ]
  }
};
