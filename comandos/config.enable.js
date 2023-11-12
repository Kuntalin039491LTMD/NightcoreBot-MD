var handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
  var optionsFull = `*Opción:* ✨ | WELCOME
*Comando:* ${usedPrefix + command} welcome
*Descripción:* Activa o desactiva la bienvenida en el grupo.

═══════════════════════════

*Opción:* 🌎 | MODO PUBLICO
*Comando:* ${usedPrefix + command} public
*Descripción:* El Bot se vuelve de uso publico y/o privado.
*Nota:* Este comando solo podrá ser usado por owners del Bot.

═══════════════════════════

*Opción:* 🥵 | MODO HORNY
*Comando:* ${usedPrefix + command} modohorny
*Descripción:* Activa o desactiva los comandos +18 en el grupo.

═══════════════════════════

*Opción:* 🔗 | ANTILINK
*Comando:* ${usedPrefix + command} antilink
*Descripción:* Activa o desactiva el anti-enlaces de WhatsApp.
*Nota:* Se necesita tener activo el restrict.

═══════════════════════════

*Opción:* 🔗 | ANTILINK 2
*Comando:* ${usedPrefix + command} antilink2
*Descripción:* Activa o desactiva el anti-enlaces que inician en HTTPS.
*Nota:* Se necesita tener activo el restrict.

═══════════════════════════

*Opción:* 🔎 | DETECT
*Comando:* ${usedPrefix + command} detect
*Descripción:* Activa o desacriva las notificaciones de cambios en el grupo.

═══════════════════════════

*Opción:* 🔎 | DETECT 2
*Comando:* ${usedPrefix + command} detect2
*Descripción:* Detecta modificaciones en el grupo y mantiene una mejor gestion.

═══════════════════════════

*Opción:* ❗ | RESTRICT
*Comando:* ${usedPrefix + command} restrict
*Descripción:* Activa o desactiva las restricciones del Bot, como la de sacar o agregar personas a un grupo.
*Nota:* Este comando solo podrá ser usado por owners del Bot.

═══════════════════════════

*Opción:* ☑️ | AUTOREAD
*Comando:* ${usedPrefix + command} autoread
*Descripción:* Marca como leido los mensajes y los estados automáticamente.
*Nota:* Este comando solo podrá ser usado por owners del Bot.

═══════════════════════════

*Opción:* 🔊 | AUDIOS
*Comando:* ${usedPrefix + command} audios
*Descripción:* Activa o desactiva los comandos de audios sin prefijos, en el grupo.

═══════════════════════════

*Opción:* 👾 | AUTOSTICKER
*Comando:* ${usedPrefix + command} autosticker 
*Descripción:* Todas las imagenes o videos enviados en el grupo se convierten en stickers. 

═══════════════════════════

*Opción:* 💬 | PCONLY
*Comando:* ${usedPrefix + command} pconly
*Descripción:* El Bot solo responderá a los comandos si es un chat privado.
*Nota:* Este comando solo podrá ser usado por owners del Bot.

═══════════════════════════

*Opción:* 🏢 | GCONLY
*Comando:* ${usedPrefix + command} gconly
*Descripción:* El Bot solo respondera a los comandos si es un grupo. 
*Nota:* Este comando solo podrá ser usado por owners del Bot.

═══════════════════════════

*Opción:* ❌ | ANTIVIEWONCE 
*Comando:* ${usedPrefix + command} antiviewonce
*Descripción:* Las imagenes enviadas para ver solo una vez, son reenviadas normal por el Bot. 

═══════════════════════════

*Opción:* 📵 | ANTILLAMADAS
*Comando:* ${usedPrefix + command} anticall
*Descripción:* El Bot bloquerá a las personas que llamen al Bot. 
*Nota:* Este comando solo podra ser usado por owners del Bot.

═══════════════════════════

*Opción:* 💬 | ANTIPRIVADO
*Comando:* ${usedPrefix + command} antiprivado
*Descripción:* El Bot bloquerá a las personas que escriban al privado del Bot. 
*Nota:* Este comando solo podrá ser usado por owners del Bot.

═══════════════════════════

*Opción:* 🤬 | ANTITOXIC
*Comando:* ${usedPrefix + command} antitoxic
*Descripción:* Detecta la malas palabras y advierte al participante del grupo, antes de ser eliminado.
*Nota:* Se necesita tener activo el restrict.

═══════════════════════════

*Opción:* 🕸️ | ANTITRABAS
*Comando:* ${usedPrefix + command} antitraba
*Descripción:* El Bot detecta textos largos que podrian ser virus y causar lag en el chat y elimina al usuario.
*Nota:* Se necesita tener activo el restrict.

═══════════════════════════

*Opción:* 👎 | ANTIARABES
*Comando:* ${usedPrefix + command} antiarabes
*Descripción:* Si un numero árabe se uné al grupo, el Bot lo elimina automaticamente.
*Nota:* Se necesita tener activo el welcome y el restrict.

═══════════════════════════

*Opción:* 👎 | ANTIARABES 2
*Comando:* ${usedPrefix + command} antiarabes2
*Descripción:* Si un numero árabe escribe en el grupo, el Bot lo elimina automaticamente.
*Nota:* Se necesita tener activo el restrict.

═══════════════════════════

*Opción:* 🤖 | MODEJADIBOT
*Comando:* ${usedPrefix + command} modejadibot
*Descripción:* Activa o desactiva el uso del comando para sub bots (${usedPrefix}serbot / ${usedPrefix}jadibot). 
*Nota:* Este comando solo podrá ser usado por owners del Bot.

═══════════════════════════

*Opción:* 👑 | MODOADMIN
*Comando:* ${usedPrefix + command} modoadmin
*Descripción:* El Bot solo responderá a los admins del grupo.

═══════════════════════════

*Opción:* 😃 | SIMSIMI
*Comando:* ${usedPrefix + command} simsimi
*Descripción:* El Bot empezará a responder a los mensajes usando la IA de SimSimi.

═══════════════════════════

*Opcion*: ⛔ | 𝙱𝙾𝚃 𝚃𝙴𝙼𝙿𝙾𝚁𝙰𝙻
comando: ${usedPrefix + command} bottemporal
Descripción: Activa o desactiva que el bot se una temporalmente a grupos`.trim();
    //let name = await conn.getName(m.sender)
  /*const listMessage = {
    text: "𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐎𝐏𝐂𝐈𝐎𝐍𝐄𝐒",
    footer: `______________________
|❀ ❍ _${usedPrefix}enable *welcome*_
|❀ ❍ _${usedPrefix}disable *welcome*_
|❀ ❍ _${usedPrefix}enable *public*_
|❀ ❍ _${usedPrefix}disable *public*_
|❀ ❍ _${usedPrefix}enable *modohorny*_
|❀ ❍ _${usedPrefix}disable *modohorny*_
|❀ ❍ _${usedPrefix}enable *antilink*_
|❀ ❍ _${usedPrefix}disable *antilink*_
|❀ ❍ _${usedPrefix}enable *antilink2*_
|❀ ❍ _${usedPrefix}disable *antilink2*_
|❀ ❍ _${usedPrefix}enable *detect*_
|❀ ❍ _${usedPrefix}disable *detect*_
|❀ ❍ _${usedPrefix}enable *restrict*_
|❀ ❍ _${usedPrefix}disable *restrict*_
|❀ ❍ _${usedPrefix}enable *pconly*_
|❀ ❍ _${usedPrefix}disable *pconly*_
|❀ ❍ _${usedPrefix}enable *gconly*_
|❀ ❍ _${usedPrefix}disable *gconly*_
|❀ ❍ _${usedPrefix}enable *autoread*_
|❀ ❍ _${usedPrefix}disable *autoread*_
|❀ ❍ _${usedPrefix}enable *temporal*_
|❀ ❍ _${usedPrefix}disable *temporal*
|❀ ❍ _${usedPrefix}enable *simi*_
|❀ ❍ _${usedPrefix}disable *Simi*_
|❀ ❍ _${usedPrefix}enable *audios*_
|❀ ❍ _${usedPrefix}disable *audios*_
|❀ ❍ _${usedPrefix}enable *antiviewonce*_
|❀ ❍ _${usedPrefix}disable *antiviewonce*_
|❀ ❍ _${usedPrefix}enable *autosticker*_
|❀ ❍ _${usedPrefix}disable *autosticker*_
|❀ ❍ _${usedPrefix}enable *anticall*_
|❀ ❍ _${usedPrefix}disable *anticall*_
|❀ ❍ _${usedPrefix}enable *antiprivado*_
|❀ ❍ _${usedPrefix}disable *antiprivado*_
|❀ ❍ _${usedPrefix}enable *antitoxic*_
|❀ ❍ _${usedPrefix}disable *antitoxic*_
|❀ ❍ _${usedPrefix}enable *antitraba*_
|❀ ❍ _${usedPrefix}disable *antitraba*_
|❀ ❍ _${usedPrefix}enable *antiarabes*_
|❀ ❍ _${usedPrefix}disable *antiarabes*_
|❀ ❍ _${usedPrefix}enable *modejadibot*_
|❀ ❍ _${usedPrefix}disable *modejadibot*_
|❀ ❍ _${usedPrefix}enable *modoadmin*_
|❀ ❍ _${usedPrefix}disable *modoadmin*_
|______________________`,
    title: null,
    buttonText: "𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐄 𝐀𝐐𝐔𝐢",
    sections,
  };*/

  let isEnable = /true|enable|(turn)?on|1/i.test(command);
  let chat = global.db.data.chats[m.chat];
  let user = global.db.data.users[m.sender];
  let bot = global.db.data.settings[conn.user.jid] || {};
  let type = (args[0] || "").toLowerCase();
  let isAll = false,
    isUser = false;
  switch (type) {
    case "welcome":
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail("group", m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail("admin", m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case "detect":
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail("group", m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail("admin", m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case "delete":
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail("admin", m, conn);
          throw false;
        }
      }
      chat.delete = isEnable;
      break;
    case "antidelete":
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail("admin", m, conn);
          throw false;
        }
      }
      chat.delete = !isEnable;
      break;
    case "public":
      isAll = true;
      if (!isROwner) {
        global.dfail("rowner", m, conn);
        throw false;
      }
      global.opts["self"] = !isEnable;
      break;
    case "antilink":
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail("admin", m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;
    case "antilink2":
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail("admin", m, conn);
          throw false;
        }
      }
      chat.antiLink2 = isEnable;
      break;
    case "antiviewonce":
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail("admin", m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;
    case "modohorny":
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail("admin", m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
      break;
    case "modoadmin":
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail("admin", m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case "autosticker":
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail("admin", m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case "audios":
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail("admin", m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case "restrict":
      isAll = true;
      if (!isOwner) {
        global.dfail("owner", m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case "nyimak":
      isAll = true;
      if (!isROwner) {
        global.dfail("rowner", m, conn);
        throw false;
      }
      global.opts["nyimak"] = isEnable;
      break;
    case "autoread":
      isAll = true;
      if (!isROwner) {
        global.dfail("rowner", m, conn);
        throw false;
      }
      global.opts["autoread"] = isEnable;
      break;
    case "pconly":
    case "privateonly":
      isAll = true;
      if (!isROwner) {
        global.dfail("rowner", m, conn);
        throw false;
      }
      global.opts["pconly"] = isEnable;
      break;
    case "gconly":
    case "grouponly":
      isAll = true;
      if (!isROwner) {
        global.dfail("rowner", m, conn);
        throw false;
      }
      global.opts["gconly"] = isEnable;
      break;
    case "swonly":
    case "statusonly":
      isAll = true;
      if (!isROwner) {
        global.dfail("rowner", m, conn);
        throw false;
      }
      global.opts["swonly"] = isEnable;
      break;
    case "anticall":
      isAll = true;
      if (!isROwner) {
        global.dfail("rowner", m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case "antiprivado":
      isAll = true;
      if (!isROwner) {
        global.dfail("rowner", m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
    case "modejadibot":
      isAll = true;
      if (!isROwner) {
        global.dfail("rowner", m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case "antitoxic":
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail("admin", m, conn);
          throw false;
        }
      }
    case "simi":
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail("admin", m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;

    case "temporal":
      isAll = true;
      if (!isOwner) {
        global.dfail("owner", m, conn);
        throw false;
      }
      bot.temporal = isEnable;
      break;
      chat.antiToxic = isEnable;
      break;
    case "antitraba":
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail("admin", m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;
    case "antiarabes":
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail("admin", m, conn);
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: m});
          
      throw false;
  }

  m.reply(`*✅ OPCION: ${type}: ${isEnable ? "𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾" : "𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾"}*\n*PARA*: ${isAll ? "𝙴𝚂𝚃𝙴 𝙱𝙾𝚃" : isUser ? "" : "𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃"}`);
};
handler.help = ["en", "dis"].map((v) => v + "able <option>");
handler.tags = ["group", "owner"];
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i;
export default handler;
