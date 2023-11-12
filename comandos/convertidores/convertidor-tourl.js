/*import uploadFile from "../lib/uploadFile.js";
import uploadImage from "../lib/uploadImage.js";*/
let handler = async (m) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (!mime) throw "*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙾 𝚅𝙸𝙳𝙴𝙾 𝙴𝙻 𝙲𝚄𝙰𝙻 𝚂𝙴𝚁𝙰 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝙳𝙾 𝙰 𝙴𝙽𝙻𝙰𝙲𝙴*";
  let media = await q.download();
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  let link = await (isTele ? uploadImage : uploadFile)(media);
  m.reply(`_. ᩭ✎Link Creado exitosamente :  ${link} 🍁_`);
};
handler.help = ["tourl <reply image>"];
handler.tags = ["sticker"];
handler.command = /^(upload|tourl)$/i;
export default handler;
