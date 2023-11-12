
import {googleIt} from '@bochilteam/scraper'; 
 import google from 'google-it'; 
 import axios from 'axios'; 
 var handler = async (m, { conn, command, args, usedPrefix }) => { 
   const fetch = (await import('node-fetch')).default; 
   const text = args.join` `; 
   if (!text) return conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗]  ᩭ✎𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝚃𝙴𝚇𝚃𝙾 𝙾 𝚃𝙴𝙼𝙰 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙴 𝙱𝚄𝚂𝙲𝙰𝚁*', m); 
 const url = 'https://google.com/search?q=' + encodeURIComponent(text); 
 google({'query': text}).then(res => { 
 let teks = `_. ᩭ✎Resultados de_ : _${text}_\n\n${url}\n\n` 
 for (let g of res) { 
 teks += `_*${g.title}*_\n_${g.link}_\n_${g.snippet}_\n\n` 
 }  
 const ss = `https://image.thum.io/get/fullpage/${url}` 
 conn.sendFile(m.chat, ss, 'error.png', teks, m) 
 //m.reply(teks) 
 }) 
 }  
 handler.help = ['google', 'googlef'].map((v) => v + ' <pencarian>'); 
 handler.tags = ['internet']; 
 handler.command = /^googlef?$/i; 
 export default handler;





/*import {googleIt} from "@bochilteam/scraper";
let handler = async (m, {conn, command, args}) => {
  const fetch = (await import("node-fetch")).default;
  let full = /f$/i.test(command);
  let text = args.join` `;
  if (!text) return conn.reply(m.chat, "*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝚃𝙴𝚇𝚃𝙾 𝙾 𝚃𝙴𝙼𝙰 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙴 𝙱𝚄𝚂𝙲𝙰𝚁*", m);
  let url = "https://google.com/search?q=" + encodeURIComponent(text);
  let search = await googleIt(text);
  let msg = search.articles
    .map(
      ({
        // header,
        title,
        url,
        description,
      }) => {
        return `*${title}*\n_${url}_\n_${description}_`;
      }
    )
    .join("\n\n");
  try {
    let ss = await (await fetch(global.API("nrtm", "/api/ssweb", {delay: 1000, url, full}))).arrayBuffer();
    if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw "";
    await conn.sendFile(m.chat, ss, "error.png", url + "\n\n" + msg, m);
  } catch (e) {
    m.reply(msg);
  }
};
handler.help = ["google", "googlef"].map((v) => v + " <pencarian>");
handler.tags = ["search"];
handler.command = /^googlef?$/i;
export default handler;*/
