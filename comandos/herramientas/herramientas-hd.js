import FormData from "form-data";
import Jimp from "jimp";

var handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || q.mediaType || "";
  if (!mime)
    throw `*[❗] 𝙴𝙽𝚅𝙸𝙴 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${
      usedPrefix + command
    }*`;
  if (!/image\/(jpe?g|png)/.test(mime))
    throw `*[❗] 𝙴𝙻 𝙵𝙾𝚁𝙼𝙰𝚃𝙾 𝙳𝙴𝙻 𝙰𝚁𝙲𝙷𝙸𝚅𝙾 (${mime}) 𝙽𝙾 𝙴𝚂 𝙲𝙾𝙼𝙿𝙰𝚁𝚃𝙸𝙱𝙻𝙴, 𝙴𝙽𝚅𝙸𝙰 𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽𝙰 𝙵𝙾𝚃𝙾*`;
  m.reply(
    "*[❗] 𝙿𝚁𝙾𝙲𝙴𝚂𝙰𝙽𝙳𝙾 𝙸𝙼𝙰𝙶𝙴𝙽, 𝙴𝚂𝚃𝙾 𝙿𝚄𝙴𝙳𝙴 𝙳𝙴𝙼𝙾𝚁𝙰𝚁 𝚄𝙽𝙾𝚂 𝙼𝙸𝙽𝚄𝚃𝙾𝚂.. 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝙴𝙰 𝙿𝙰𝙲𝙸𝙴𝙽𝚃𝙴*",
  );
  let img = await q.download?.();
  let pr = await remini(img, "enhance");
  conn.sendMessage(m.chat, { image: pr }, { quoted: m });
  try {
  } catch {
    m.reply("*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙴 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*");
  } finally {
    delete conn.unblur_high[m.sender];
  }
};
handler.help = ["remini", "hd", "enhance"];
handler.tags = ["ai", "tools"];
handler.command = ["remini", "hd", "enhance"];
handler.register = true;
export default handler;

async function remini(imageData, operation) {
  return new Promise(async (resolve, reject) => {
    const availableOperations = ["enhance", "recolor", "dehaze"];
    if (availableOperations.includes(operation)) {
      operation = operation;
    } else {
      operation = availableOperations[0];
    }
    const baseUrl = "https://inferenceengine.vyro.ai/" + operation + ".vyro";
    const formData = new FormData();
    formData.append("image", Buffer.from(imageData), {
      filename: "enhance_image_body.jpg",
      contentType: "image/jpeg",
    });

    formData.append("model_version", 1, {
      "Content-Transfer-Encoding": "binary",
      contentType: "multipart/form-data; charset=utf-8",
    });

    formData.submit(
      {
        url: baseUrl,
        host: "inferenceengine.vyro.ai",
        path: "/" + operation,
        protocol: "https:",
        headers: {
          "User-Agent": "okhttp/4.9.3",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
        },
      },
      function (err, res) {
        if (err) reject(err);
        const chunks = [];
        res.on("data", function (chunk) {
          chunks.push(chunk);
        });
        res.on("end", function () {
          resolve(Buffer.concat(chunks));
        });
        res.on("error", function (err) {
          reject(err);
        });
      },
    );
  });
  }


