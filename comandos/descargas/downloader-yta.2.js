
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper' 
 import fetch from 'node-fetch' 
 let handler = async (m, { conn, args }) => { 
 if (!args[0]) throw '*[✳️] INGRESE EL COMANDO MAS UN ENLACE DE YOUTUBE.*' 
 await m.reply(`*_⏳Sᴇ ᴇsᴛᴀ ᴘʀᴏᴄᴇsᴀɴᴅᴏ Sᴜ ᴀᴜᴅɪᴏ...⏳_*\n\n*◉ Sɪ Sᴜ ᴀᴜᴅɪᴏ ɴᴏ ᴇs ᴇɴᴠɪᴀᴅᴏ, ᴘʀᴜᴇʙᴇ ᴄᴏɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ #playdoc ᴏ #play.2 ᴏ #ytmp4doc ◉*`) 
 try { 
 let q = '128kbps' 
 let v = args[0] 
 const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)) 
 const dl_url = await yt.audio[q].download() 
 const ttl = await yt.title 
 const size = await yt.audio[q].fileSizeH 
 let cap = `*◉—⌈📥 YOUTUBE DL 📥⌋—◉*\n🔍 *TITULO:* ${ttl}\n📦 *PESO:* ${size}`.trim() 
 await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: cap, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, { quoted: m }) 
 } catch { 
 try { 
 let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`)    
 let lolh = await lolhuman.json() 
 let n = lolh.result.title || 'error' 
 let n2 = lolh.result.link 
 let n3 = lolh.result.size 
 let cap2 = `*◉—⌈📥 YOUTUBE DL 📥⌋—◉*\n🔍 *TITULO:* ${n}\n📦 *PESO:* ${n3}`.trim() 
 await conn.sendMessage(m.chat, { document: { url: n2 }, caption: cap2, mimetype: 'audio/mpeg', fileName: `${n}.mp3`}, {quoted: m}) 
 } catch { 
 await conn.reply(m.chat, '*[⚠️] ERROR NO SE PUDO DESCARGAR*', m)} 
 }} 
 handler.command = /^ytmp3doc|ytadoc|ytmp3.2|yta.2$/i 
 export default handler
