let handler = async (m, {conn}) => {
  let pp = "./Menu2.jpg";
  try {
  } catch (e) {
  } finally {
    //let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let name = await conn.getName(m.sender);
    let str = `
���� ? ���� ? ������ _?Audios?_ ������ ? ���� ? �����[
�� _Quien es tu sempai botsito 7w7_
�� _Te diagnostico con gay_
�� _A nadie le importa_
�� _Fiesta del admin_
�� _Fiesta del administrador_ 
�� _Vivan los novios_
�� _Feliz cumpleaños_
�� _No digas mamadas Mariyein_
�� _Noche de paz_
�� _Buenos dias_
�� _Cambiate a Movistar 
�� _Bienvenido_
�� _Calla fan de bts_
�� _Las reglas del grupo_
�� _Buenos tardes_
�� _Buenos noches_
�� _Audio hentai_
�� _Chica lgante_
�� _Feliz navidad_
�� _Vete a la vrg_
�� _Pasa pack Bot_
�� _Atencion grupo_
��_Marica quien_
�� _Murio el grupo_
�� _Oh me vengo_
�� _tio que rico_
�� _Viernes_
�� _Baneado_
�� _Sexo_
�� _Hola_
�� _Un pato_
��_Nyanpasu_
�� _Te amo_
�� _Yamete_
�� _Bañate_
�� _Es puto_
�� _La biblia_
�� _Onichan_
�� _Mierda de Bot_
�� _Siuuu_
�� _Epico_
�� _wtf_
�� _Shitpost_
�� _Rawr_
�� _UwU_
�� _:(
�� _a_
�t�� ? ���� ? ���� ? ���� ? ���� ? ������
`.trim();
    conn.sendHydrated(m.chat, str, wm, pp, "https://github.com/Jesus-ofc33", "?", null, null, [["?", "/menu"]], m);
  }
};
handler.help = ["menu2", "help2", "?2", "menuaudios"];
handler.tags = ["main"];
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i;
handler.fail = null;
export default handler;
