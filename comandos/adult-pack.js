let handler = async (m, {conn, command}) => {
  if (!db.data.chats[m.chat].modohorny && m.isGroup)
    throw "乂 _Para usar este comando mi creador o un admin tendra que activar el modo horny_ 乂;
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 pack`.trim(), m)
};
handler.help = ["pack"];
handler.tags = ["internet"];
handler.command = /^(pack)$/i;
export default handler;

global.pack = [
  "https://telegra.ph/file/f8bc435732650131192a5.jpg",
  "https://telegra.ph/file/570e7cf369d70aae15990.jpg",
  "https://telegra.ph/file/891da3a1c54cb37ed0756.jpg",
  "https://telegra.ph/file/624815273ed1ae11c4ff0.jpg",
  "https://telegra.ph/file/8e398585865bc94030ce7.jpg",
  "https://telegra.ph/file/11b8efdc9615134725752.jpg",
  "https://telegra.ph/file/29662296bbb1ae7f1a856.jpg",
  "https://telegra.ph/file/f30ee098a6c46e5537653.jpg",
  "https://telegra.ph/file/6933cb35ca62196b9fe17.jpg",
  "https://telegra.ph/file/a779b85b5f0cab14aa147.jpg",
  "https://telegra.ph/file/29047576f7d000286f0ab.jpg",
  "https://telegra.ph/file/0dad2b4ed22cba2a3140e.jpg",
  "https://telegra.ph/file/bf6210e80f3d37f160baf.jpg",
  "https://telegra.ph/file/679e3a1f1fd2617035a35.jpg",
  "https://telegra.ph/file/97d2ae47ea0dbdb1ed764.jpg",
  "https://telegra.ph/file/b71c296f6c210bc39d10b.jpg",
  "https://telegra.ph/file/3d9a5fee6553aafb47858.jpg",
  "https://telegra.ph/file/af13b3d0acd9b180118fa.png",
];

handler.limit = 3;
