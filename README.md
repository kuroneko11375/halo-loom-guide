# Halo Loom 0.5.1 — オンラインガイド

黒猫Dev Halo Loom · Japanese / English / 繁體中文

> [!IMPORTANT]
> **旧版から更新する場合は、先に削除して入れ直してください。**
> プロジェクトをバックアップ → 旧版ツールで現在の Halo を削除 → 旧 HaloMaker のツール本体のみ削除 → 新版をインポート → Halo を作り直す。Avatar・他のHalo・外部素材・所有不明のGenerated・復元用アーカイブは保持してください。[更新手順](https://kuroneko11375.github.io/halo-loom-guide/#reinstall)
>
> **Updating? Remove the old installation before reinstalling.**
> Back up the project → remove the current Halo using the old tool → remove only the old HaloMaker tool files → import the new version → create the Halo again. Keep avatars, other Halos, external sources, unknown Generated assets and recovery archives. [Update steps](https://kuroneko11375.github.io/halo-loom-guide/en.html#reinstall)
>
> **舊版更新請先移除，再重新安裝。**
> 備份專案 → 用舊版工具刪除目前 Halo → 只移除舊 HaloMaker 工具本體 → 匯入新版 → 重新建立 Halo。保留Avatar、其他Halo、外部素材、未知Generated與復原歸檔。[詳細步驟](https://kuroneko11375.github.io/halo-loom-guide/zh.html#reinstall)

## ガイド / Guide / 說明

- [日本語](https://kuroneko11375.github.io/halo-loom-guide/)
- [English](https://kuroneko11375.github.io/halo-loom-guide/en.html)
- [繁體中文](https://kuroneko11375.github.io/halo-loom-guide/zh.html)
- [出典・ライセンス / Sources and licenses / 素材出處與授權](https://kuroneko11375.github.io/halo-loom-guide/#credits)
- [BOOTH](https://kuronekodev.booth.pm/items/8914197)

配布内容は Halo Loom の `.unitypackage` 本体です。操作・更新・既知の制限・素材の出典はオンラインガイドをご覧ください。
The product download contains the `.unitypackage`. Instructions, updates, known limitations and asset sources are online.
下載內容為產品本體；操作、更新、已知限制及素材出處統一放在線上指南。

## 0.5.1

- 装飾素材のチャージに、内側へ集まる光と、チャージ完了を知らせる穏やかな脈動を追加しました。
- 散射は扇状に、光束は細く集中し、連射は段階的に発射。それぞれの軌跡に合わせた彩色の噴流と、外へ広がる粒子が続きます。
- ハート型リングの拡散と余韻には、色とりどりのハートがきらめきます。
- 装飾は光だけでなく、選んだモデル本体も飛んで戻ります。内蔵 20 種類を対象に確認しています。

星空・バブルなどの大型リングはスタイルに応じた演出です。装飾の3射法をすべてのリングに適用する説明ではありません。同じ側の手首では発射より収納が優先されます。詳細はガイドをご確認ください。

掲載例はUnity Editorの実画面です。Client・ヘッドセット・複数人・GPU性能の再検証を意味しません。

| 光ときらめき | ハートの余韻 |
| --- | --- |
| ![Light and sparkle](assets/dev-051-light-and-sparkle-JP.jpg) | ![Colorful hearts](assets/dev-051-colorful-hearts-JP.jpg) |

## 維護

編輯 `content.mjs`、`site.css`、`gallery.js`，執行 `node build.mjs`，三語HTML一起提交。GitHub Pages使用main分支根目錄。
主要說明以靜態HTML呈現；圖片放大視窗使用原生JavaScript，沒有追蹤器或外部字型。操作截圖保留較早介面，頁內已註明差異。
本儲存庫僅包含公開說明與認可的宣傳圖，不包含產品程式、unitypackage、Avatar或第三方付費素材。圖片與工具的使用條款依BOOTH既有規約；外部素材個別授權另列於線上出典章節。
