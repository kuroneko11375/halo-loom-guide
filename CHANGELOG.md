# Halo Loom guide updates

## 2026-10-21 · 0.6.0 改版

- 全站重新設計：夜空／薰衣草配色、桌機側欄目錄（捲動時高亮）、手機單欄版面，仍為純靜態 HTML、系統字型。
- 新增「v0.6.0 新功能」：介紹影片與 6 張 Unity 實機畫面。
- 依新版工具介面重寫：基礎效果（一般效果／特殊光環）、Halo 樣式、顯示效果；萬聖節僅適用兩種泡泡環。
- 新增發射方向說明（一般 → 拳頭前方、特殊光環 → 正上方、萬聖節幽靈 → 前方）與 VRChat 選單圖解（Halo Loom 子選單、常駐亮粉）。
- 素材出處改為 Pixabay 音效清單（含 ID 連結）；移除 0.5.1 舊圖。
## 2026-10-18 · 0.5.1 正式版說明

- 首頁與README頂部加入醒目重裝提示及安全更新流程。
- 新增三語素材出處與授權；商品說明改導線上指南。
- 現行頁面統一0.5.1；圖片可在頁內放大、關閉後繼續閱讀。
- 文件修改，不變更產品程式、素材或已交付套件。


## 2026-10-18 · 0.5.1 DEV

### 日本語

- 装飾のチャージに、内側への集光と、完了時の穏やかな脈動を追加しました。
- 散射・光束・連射の軌跡とタイミングを調整し、発射に彩色の噴流と拡散粒子を追加しました。
- 装飾モデル本体が飛んで戻る動作を修正し、内蔵 20 種類すべてを Unity 確認の対象にしました。
- ハート型リングの拡散と余韻を、多色のきらめくハートへ変更しました。
- 本文・README を DEV 版向けに更新。0.5.0 の現行構造は、既存 Halo を読み込み「変更を適用」で更新できることを明記しました。古い非互換構造のみ取り外して再作成します。
- 正式 DEV の Unity 実描画から作成した 4 枚の紹介画像を追加。光ときらめき、チャージから解放、3 種類の射出、多色のハートを掲載しています。

### English

- Added inward-gathering charge light and a gentle ready pulse for ornaments.
- Refined Scatter, Beam and Volley paths and timing, with colorful jets and spreading release particles.
- Fixed flight and return of the ornament models themselves; Unity checks cover all 20 built-in types.
- Changed the heart-shaped ring's scatter and lingering particles to colorful, twinkling hearts.
- Updated the guide and README for the DEV edition. The current 0.5.0 structure can be updated by loading the existing Halo and using Apply Changes; only earlier incompatible structures need removal and recreation.
- Added four promotional previews from actual formal DEV Unity renders: light and sparkle, charge and release, the three release styles, and colorful hearts.

### 繁體中文

- 小元素蓄力加入向內聚光與蓄滿柔和脈動。
- 改善散射、光束、連射的軌跡與節奏，新增彩色噴流及向外擴散粒子。
- 修正裝飾模型本體的飛行與返回，Unity 檢查涵蓋全部 20 種內建裝飾。
- 心形環的散開與尾韻改為多彩愛心，保留逐顆閃爍。
- 網站與 README 改用 DEV 版說明；明確區分 0.5.0 現行結構可載入後「套用修改」更新，僅更早的不相容舊結構需要移除重建。
- 加入正式 DEV Unity 實際渲染製作的四張宣傳圖預覽：光與閃爍、蓄力到釋放、三種射法、多彩愛心。

確認範圍：Unity Editor 的生成與實際渲染。本次 DEV 更新尚未重新驗證 VRChat Client、頭盔、多人可見性或 GPU 效能。請在目標 Avatar 和實際使用環境檢查。

## 2026-10-15 · 0.5.0 documentation baseline

本機既有說明更新了手持、換手、蓄力、發射、歸位及 PC 操作，補充 SDK / Modular Avatar / NDMF 需求、移除與復原注意事項、20 種裝飾及自訂素材流程。此次發佈保留這些內容。舊介面截圖日期為 2026-10-01。
