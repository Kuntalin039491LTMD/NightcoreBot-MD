let handler = async (m, {conn}) => {
  let user = global.db.data.users[m.sender];
  conn.reply(m.chat, `_. ᩭ✎Exito, ahora tiene todo ilimitado_`, m);
  global.db.data.users[m.sender].dolares = Infinity;
  global.db.data.users[m.sender].limit = Infinity;
  global.db.data.users[m.sender].level = Infinity;
};
handler.help = ["cheat"];
handler.tags = ["owner"];
handler.command = /^(ilimitado|infiniy)$/i;
handler.rowner = true;
handler.mods = false;
handler.premium = false;
handler.group = false;
handler.private = false;

handler.admin = false;
handler.botAdmin = false;

handler.fail = null;
//handler.money = 0

export default handler;
