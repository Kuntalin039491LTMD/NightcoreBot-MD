let handler = async (m, {conn, isOwner}) => {
  let adv = Object.entries(global.db.data.users).filter((user) => user[1].warn);
  let warns = global.db.data.users.warn;

  let caption = `⚠️ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐀𝐃𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐒
*╔═══════════════════·•*
║ *Total : ${adv.length} Usuarios* ${
    adv
      ? "\n" +
        adv
          .map(([jid, user], i) =>
            `
║
║ *${i + 1}.* ${conn.getName(jid) == undefined ? "Sin Usuarios" : conn.getName(jid) + ` *(${user.warn}/4)*`}
║ ${isOwner ? "@" + jid.split`@`[0] : jid}\n║ - - - - - - - - -`.trim()
          )
          .join("\n")
      : ""
  }
*╚═══════════════════·•*`;
await conn.sendMessage(m.chat, { text: caption }, { quoted: m }, { mentions: await conn.parseMention(caption) })}
handler.command = /^(listaadv|listadv|adv|advlist|advlista)$/i;

export default handler;
