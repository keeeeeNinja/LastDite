// <vault>/scripts/updateTitle.js
module.exports = async function (tp) {
  tp = tp || globalThis?.tp;
  if (!tp) return;

  // デフォルトは空文字（ブランク）
  let ans = await tp.system.prompt("ノートのタイトル", "");
  if (ans === null) return;              // Esc/キャンセル → 何もしない

  ans = ans.trim();
  // 空は不可：入力されるまで聞き直す（キャンセルなら抜ける）
  while (!ans) {
    ans = await tp.system.prompt("※タイトルは必須です。入力してください", "");
    if (ans === null) return;
    ans = ans.trim();
  }

  // ファイル名に使えない文字を置換
  const name = ans.replace(/[\\/:*?"<>|]/g, "-");

  // 同名チェックは意図的にしない（同名なら Obsidian 側でエラー）
  await tp.file.rename(name);
  return name;
};
