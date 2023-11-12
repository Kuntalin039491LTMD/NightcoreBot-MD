let handler = async (m, {conn}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;

  let perfil = await conn.profilePictureUrl(who, "image").catch((_) => "https://telegra.ph/file/b8acfe3c320b12bfb3d7b.jpg");
  let name = conn.getName(who);
  let user = global.db.data.users[who];
  let premium = user.premium;
  const cartera = {
    economia: {
      exp: true,
      limit: true,
      dorracoins: true,
    },
  };
  const recursos = Object.keys(cartera.economia)
    .map((v) => user[v] && `*${global.rpgshop.emoticon(v)} ⇢ ${user[v]}*`)
    .filter((v) => v)
    .join("\n")
    .trim();
  conn.sendMessage(
    m.chat,
    {
      image: {url: perfil},
      caption: `🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? "✅" : "❌"}\n${wm}\n👝 ⇢ ${name}\n` + recursos + `\n\n*PARA VER MÁS RECURSOS VISITE EL INVENTARIO*`,
    },
    {quoted: m}
  );
};
handler.help = ["bal"];
handler.tags = ["xp"];
handler.command = ["bal2", "cartera", "wallet", "cartera2", "balance2"];
export default handler;
