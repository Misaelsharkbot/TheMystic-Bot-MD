/* 

Codigo abierto - Dejar creditos
Created by https://github.com/BrunoSobrino 

ðð» EMPEIZA A MODIFICAR DESDE AQUÃ ðð» */


import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender   
    
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])    
    
let imagen1 = fs.readFileSync('./Menu2.jpg')
let imagen2 = fs.readFileSync('./src/nuevobot.jpg') 
let imagen3 = fs.readFileSync('./src/porhub.png')
let texto1 = `â­ââââââââââââââ®
â     ðð·ð´ ð¼ðððð¸ð² - ð±ð¾ð - ð¼ð³
ââ°âââââââââââââ¯
â â®
â- ð·ð¾ð»ð° @${m.sender.split("@")[0]}
â- ðµð´ð²ð·ð° ${week}, ${date}*
â- ðð¸ð´ð¼ð¿ð¾ ð°ð²ðð¸ðð¾: ${uptime}
â¿- ðððð°ðð¸ð¾ð: ${rtotalreg}
â â¯               
â ââââ â¢ â â¢ âââââ®
â    *ï¼£ï¼¯ï¼­ï¼¡ï¼®ï¼¤ï¼¯ï¼³*
â ââââ â¢ â â¢ âââââ¯
â
â°â®
â  <ðâð½ðâðð¸âððâ ð»ð¼ð ð¹ðð/>
â
âÂ° à¶¬ â ð _${usedPrefix}grupos_
âÂ° à¶¬ â ð _${usedPrefix}estado_
âÂ° à¶¬ â ð _${usedPrefix}infobot_
âÂ° à¶¬ â ð _${usedPrefix}donar_
âÂ° à¶¬ â ð _${usedPrefix}grouplist_
âÂ° à¶¬ â ð _${usedPrefix}owner_
âÂ° à¶¬ â ð _${usedPrefix}script_
âÂ° à¶¬ â ð _Bot_ (ð¢ð ð ð ðð ððððððð)
â
â  <ðâð¼ ðâ ð¹ðð ð¸ ðð ð¾âðâð/>
â
âÂ° à¶¬âð½ _${usedPrefix}join *<enlace / link / url>*_
â   <ððð¼ð¾ðð/>
âÂ° à¶¬âðï¸ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
âÂ° à¶¬âðï¸ _${usedPrefix}ppt *<papel / tijera /piedra>*_
âÂ° à¶¬âðï¸ _${usedPrefix}prostituto *<nombre / @tag>*_
âÂ° à¶¬âðï¸ _${usedPrefix}prostituta *<nombre / @tag>*_
âÂ° à¶¬âðï¸ _${usedPrefix}gay2 *<nombre / @tag>*_
âÂ° à¶¬âðï¸ _${usedPrefix}lesbiana *<nombre / @tag>*_
âÂ° à¶¬âðï¸ _${usedPrefix}pajero *<nombre / @tag>*_
âÂ° à¶¬âðï¸ _${usedPrefix}pajera *<nombre / @tag>*_
âÂ° à¶¬âðï¸ _${usedPrefix}puto *<nombre / @tag>*_
âÂ° à¶¬âðï¸ _${usedPrefix}puta *<nombre / @tag>*_
âÂ° à¶¬âðï¸ _${usedPrefix}manco *<nombre / @tag>*_
âÂ° à¶¬âðï¸ _${usedPrefix}manca *<nombre / @tag>*_
âÂ° à¶¬âðï¸ _${usedPrefix}rata *<nombre / @tag>*_
âÂ° à¶¬âðï¸ _${usedPrefix}love *<nombre / @tag>*_
âÂ° à¶¬âðï¸ _${usedPrefix}doxear *<nombre / @tag>*_
âÂ° à¶¬âðï¸ _${usedPrefix}pregunta *<texto>*_
âÂ° à¶¬âðï¸ _${usedPrefix}slot *<apuesta>*_
âÂ° à¶¬âðï¸ _${usedPrefix}pvp *<@tag>*_
âÂ° à¶¬âðï¸ _${usedPrefix}simi *<texto>*_
âÂ° à¶¬âðï¸ _${usedPrefix}topgays_
âÂ° à¶¬âðï¸ _${usedPrefix}topotakus_
âÂ° à¶¬âðï¸ _${usedPrefix}formarpareja_
âÂ° à¶¬âðï¸ _${usedPrefix}verdad_
âÂ° à¶¬âðï¸ _${usedPrefix}reto_
â
â  <ð¸âðððð¸â ð ð»ð¼ðð¸âðððð¸â/>
â
âÂ° à¶¬ââï¸ _${usedPrefix}enable *welcome*_
âÂ° à¶¬ââï¸ _${usedPrefix}disable *welcome*_
âÂ° à¶¬ââï¸ _${usedPrefix}enable *modohorny*_
âÂ° à¶¬ââï¸ _${usedPrefix}disable *modohorny*_
âÂ° à¶¬ââï¸ _${usedPrefix}enable *antilink*_
âÂ° à¶¬ââï¸ _${usedPrefix}disable *antilink*_
âÂ° à¶¬ââï¸ _${usedPrefix}enable *antilink2*_
âÂ° à¶¬ââï¸ _${usedPrefix}disable *antilink2*_
âÂ° à¶¬ââï¸ _${usedPrefix}enable *detect*_
âÂ° à¶¬ââï¸ _${usedPrefix}disable *detect*_
âÂ° à¶¬ââï¸ _${usedPrefix}enable *audios*_
âÂ° à¶¬ââï¸ _${usedPrefix}disable *audios*_
âÂ° à¶¬ââï¸ _${usedPrefix}enable *autosticker*_
âÂ° à¶¬ââï¸ _${usedPrefix}disable *autosticker*_
â
â  <âð¼âðâðð¼ð ð»ð¼ ð½ð¸ðððð/>
â
âÂ° à¶¬âð° _${usedPrefix}reporte *<texto>*_
â
â  <ð»ð¼ðâð¸âð¾ð¸ð/>
â
âÂ° à¶¬âð¥ _${usedPrefix}facebook *<enlace / link / url>*_
âÂ° à¶¬âð¥ _${usedPrefix}instagram *<enlace / link / url>*_
âÂ° à¶¬âð¥ _${usedPrefix}mediafire *<enlace / link / url>*_
âÂ° à¶¬âð¥ _${usedPrefix}instagram *<enlace / link / url>*_
âÂ° à¶¬âð¥ _${usedPrefix}gitclone *<enlace / link / url>*_
âÂ° à¶¬âð¥ _${usedPrefix}gdrive *<enlace / link / url>*_
âÂ° à¶¬âð¥ _${usedPrefix}tiktok *<enlace / link / url>*_
âÂ° à¶¬âð¥ _${usedPrefix}ytmp3 *<enlace / link / url>*_
âÂ° à¶¬âð¥ _${usedPrefix}ytmp4 *<enlace / link / url>*_
âÂ° à¶¬âð¥ _${usedPrefix}ytmp3doc *<enlace / link / url>*_
âÂ° à¶¬âð¥ _${usedPrefix}ytmp4doc *<enlace / link / url>*_
âÂ° à¶¬âð¥ _${usedPrefix}play.1 *<texto / enlace / link / url>*_
âÂ° à¶¬âð¥ _${usedPrefix}play.2 *<texto / enlace / link / url>*_
âÂ° à¶¬âð¥ _${usedPrefix}play *<texto>*_
âÂ° à¶¬âð¥ _${usedPrefix}playdoc *<texto>*_
âÂ° à¶¬âð¥ _${usedPrefix}spotify *<texto>*_
âÂ° à¶¬âð¥ _${usedPrefix}imagen *<texto>*_
âÂ° à¶¬âð¥ _${usedPrefix}pinteret *<texto>*_
âÂ° à¶¬âð¥ _${usedPrefix}wallpaper *<texto>*_
âÂ° à¶¬âð¥ _${usedPrefix}wallpaper2 *<texto>*_
âÂ° à¶¬âð¥ _${usedPrefix}pptiktok *<nombre de usuario>*_
âÂ° à¶¬âð¥ _${usedPrefix}igstalk *<nombre de usuario>*_
âÂ° à¶¬âð¥ _${usedPrefix}igstory *<nombre de usuario>*_
âÂ° à¶¬âð¥ _${usedPrefix}tiktokstalk *<nombre de usuario>*_
â
â  <ð¾âðâðð/>
â
âÂ° à¶¬âð _${usedPrefix}add *<numero>*_
âÂ° à¶¬âð _${usedPrefix}kick *<@tag>*_
âÂ° à¶¬âð _${usedPrefix}grupo *<abrir / cerrar>*_
âÂ° à¶¬âð _${usedPrefix}promote *<@tag>*_
âÂ° à¶¬âð _${usedPrefix}demote *<@tag>*_
âÂ° à¶¬âð _admins *<texto>*_ (ð¢ð ð ð ðð ððððððð)
âÂ° à¶¬âð _${usedPrefix}demote *<@tag>*_
âÂ° à¶¬âð _${usedPrefix}infogroup_
âÂ° à¶¬âð _${usedPrefix}link_
âÂ° à¶¬âð _${usedPrefix}setname *<texto>*_
âÂ° à¶¬âð _${usedPrefix}setdesc *<texto>*_
âÂ° à¶¬âð _${usedPrefix}invocar *<texto>*_
âÂ° à¶¬âð _${usedPrefix}setwelcome *<texto>*_
âÂ° à¶¬âð _${usedPrefix}setbye *<texto>*_
âÂ° à¶¬âð _${usedPrefix}hidetag *<texto>*_
â
â  <âðâðð¼âððð»ðâð¼ð/>
â
âÂ° à¶¬âð§§ _${usedPrefix}toimg *<responde a un sticker>*_
âÂ° à¶¬âð§§ _${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
âÂ° à¶¬âð§§ _${usedPrefix}toptt *<responde a un video / audio>*_
âÂ° à¶¬âð§§ _${usedPrefix}tovideo *<responde a un audio>*_
âÂ° à¶¬âð§§ _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
âÂ° à¶¬âð§§ _${usedPrefix}tts es *<texto>*_
â
â  <ð¼ð½ð¼âððð ð ððð¾ðð/>
â
âÂ° à¶¬âðï¸ _${usedPrefix}logos *<efecto> <texto>*_
âÂ° à¶¬âðï¸ _${usedPrefix}simpcard *<@tag>*_
âÂ° à¶¬âðï¸ _${usedPrefix}hornycard *<@tag>*_
âÂ° à¶¬âðï¸ _${usedPrefix}lolice *<@tag>*_
âÂ° à¶¬âðï¸ _${usedPrefix}ytcomment *<texto>*_
âÂ° à¶¬âðï¸ _${usedPrefix}itssostupid_
âÂ° à¶¬âðï¸ _${usedPrefix}pixelar_
âÂ° à¶¬âðï¸ _${usedPrefix}blur_
â
â  <âð¸âð»ðð/>
â
âÂ° à¶¬âð¾ _${usedPrefix}cristianoronaldo_
âÂ° à¶¬âð¾ _${usedPrefix}messi_
âÂ° à¶¬âð¾ _${usedPrefix}meme_
âÂ° à¶¬âð¾ _${usedPrefix}itzy_
âÂ° à¶¬âð¾ _${usedPrefix}blackpink_
âÂ° à¶¬âð¾ _${usedPrefix}kpop *<blackpink / exo / bts>*_
âÂ° à¶¬âð¾ _${usedPrefix}lolivid_
âÂ° à¶¬âð¾ _${usedPrefix}loli_
âÂ° à¶¬âð¾ _${usedPrefix}navidad_
âÂ° à¶¬âð¾ _${usedPrefix}ppcouple_
âÂ° à¶¬âð¾ _${usedPrefix}neko_
âÂ° à¶¬âð¾ _${usedPrefix}waifu_
âÂ° à¶¬âð¾ _${usedPrefix}akira_
âÂ° à¶¬âð¾ _${usedPrefix}akiyama_
âÂ° à¶¬âð¾ _${usedPrefix}anna_
âÂ° à¶¬âð¾ _${usedPrefix}asuna_
âÂ° à¶¬âð¾ _${usedPrefix}ayuzawa_
âÂ° à¶¬âð¾ _${usedPrefix}boruto_
âÂ° à¶¬âð¾ _${usedPrefix}chiho_
âÂ° à¶¬âð¾ _${usedPrefix}chitoge_
âÂ° à¶¬âð¾ _${usedPrefix}deidara_
âÂ° à¶¬âð¾ _${usedPrefix}erza_
âÂ° à¶¬âð¾ _${usedPrefix}elaina_
âÂ° à¶¬âð¾ _${usedPrefix}eba_
âÂ° à¶¬âð¾ _${usedPrefix}emilia_
âÂ° à¶¬âð¾ _${usedPrefix}hestia_
âÂ° à¶¬âð¾ _${usedPrefix}hinata_
âÂ° à¶¬âð¾ _${usedPrefix}inori_
âÂ° à¶¬âð¾ _${usedPrefix}isuzu_
âÂ° à¶¬âð¾ _${usedPrefix}itachi_
âÂ° à¶¬âð¾ _${usedPrefix}itori_
âÂ° à¶¬âð¾ _${usedPrefix}kaga_
âÂ° à¶¬âð¾ _${usedPrefix}kagura_
âÂ° à¶¬âð¾ _${usedPrefix}kaori_
âÂ° à¶¬âð¾ _${usedPrefix}keneki_
âÂ° à¶¬âð¾ _${usedPrefix}kotori_
âÂ° à¶¬âð¾ _${usedPrefix}kurumi_
âÂ° à¶¬âð¾ _${usedPrefix}madara_
âÂ° à¶¬âð¾ _${usedPrefix}mikasa_
âÂ° à¶¬âð¾ _${usedPrefix}miku_
âÂ° à¶¬âð¾ _${usedPrefix}minato_
âÂ° à¶¬âð¾ _${usedPrefix}naruto_
âÂ° à¶¬âð¾ _${usedPrefix}nezuko_
âÂ° à¶¬âð¾ _${usedPrefix}sagiri_
âÂ° à¶¬âð¾ _${usedPrefix}sasuke_
âÂ° à¶¬âð¾ _${usedPrefix}sakura_
âÂ° à¶¬âð¾ _${usedPrefix}cosplay_
â
â  <âððð¸âð»ðð +ðð />
â
âÂ° à¶¬âð _${usedPrefix}pack_
âÂ° à¶¬âð _${usedPrefix}pack2_
âÂ° à¶¬âð _${usedPrefix}pack3_
âÂ° à¶¬âð _${usedPrefix}videoxxx_
âÂ° à¶¬âð _${usedPrefix}tetas_
âÂ° à¶¬âð _${usedPrefix}booty_
âÂ° à¶¬âð _${usedPrefix}ecchi_
âÂ° à¶¬âð _${usedPrefix}furro_
âÂ° à¶¬âð _${usedPrefix}imagenlesbians_
âÂ° à¶¬âð _${usedPrefix}panties_
âÂ° à¶¬âð _${usedPrefix}pene_
âÂ° à¶¬âð _${usedPrefix}porno_
âÂ° à¶¬âð _${usedPrefix}porno2_
âÂ° à¶¬âð _${usedPrefix}randomxxx_
âÂ° à¶¬âð _${usedPrefix}pechos_
âÂ° à¶¬âð _${usedPrefix}yaoi_
âÂ° à¶¬âð _${usedPrefix}yaoi2_
âÂ° à¶¬âð _${usedPrefix}yuri_
âÂ° à¶¬âð _${usedPrefix}yuri2_
âÂ° à¶¬âð _${usedPrefix}trapito_
âÂ° à¶¬âð _${usedPrefix}hentai_
âÂ° à¶¬âð _${usedPrefix}pies_
âÂ° à¶¬âð _${usedPrefix}nsfwloli_
âÂ° à¶¬âð _${usedPrefix}nsfworgy_
âÂ° à¶¬âð _${usedPrefix}nsfwfoot_
âÂ° à¶¬âð _${usedPrefix}nsfwass_
âÂ° à¶¬âð _${usedPrefix}nsfwbdsm_
âÂ° à¶¬âð _${usedPrefix}nsfwcum_
âÂ° à¶¬âð _${usedPrefix}nsfwero_
âÂ° à¶¬âð _${usedPrefix}nsfwfemdom_
âÂ° à¶¬âð _${usedPrefix}nsfwglass_
â
â  <ð¼ð½ð¼âððð ð»ð¼ ð¸ðð»ððð/>
â
â*- ðð´ðð¿ð¾ð½ð³ð´ ð° ðð½ ð°ðð³ð¸ð¾ ð¾ ð½ð¾ðð° ð³ð´ ðð¾ð*
âÂ° à¶¬âð¤ _${usedPrefix}bass_
âÂ° à¶¬âð¤ _${usedPrefix}blown_
âÂ° à¶¬âð¤ _${usedPrefix}deep_
âÂ° à¶¬âð¤ _${usedPrefix}earrape_
âÂ° à¶¬âð¤ _${usedPrefix}fast_
âÂ° à¶¬âð¤ _${usedPrefix}fat_
âÂ° à¶¬âð¤ _${usedPrefix}nightcore_
âÂ° à¶¬âð¤ _${usedPrefix}reverse_
âÂ° à¶¬âð¤ _${usedPrefix}robot_
âÂ° à¶¬âð¤ _${usedPrefix}slow_
âÂ° à¶¬âð¤ _${usedPrefix}smooth_
âÂ° à¶¬âð¤ _${usedPrefix}tupai_
â
â  <ââð¸ð ð¸âðâððð/>
â
âÂ° à¶¬âð³ _${usedPrefix}start_
âÂ° à¶¬âð³ _${usedPrefix}next_
âÂ° à¶¬âð³ _${usedPrefix}leave_
â
â  <ð¹ððâð¸ð»ðâð¼ð/>
â
âÂ° à¶¬âð _${usedPrefix}animeinfo *<texto>*_
âÂ° à¶¬âð _${usedPrefix}google *<texto>*_
âÂ° à¶¬âð _${usedPrefix}letra *<texto>*_
âÂ° à¶¬âð _${usedPrefix}wikipedia *<texto>*_
âÂ° à¶¬âð _${usedPrefix}ytsearch *<texto>*_
âÂ° à¶¬âð _${usedPrefix}apkdone *<texto>*_
âÂ° à¶¬âð _${usedPrefix}apkgoogle *<texto>*_
âÂ° à¶¬âð _${usedPrefix}apkmody *<texto>*_
âÂ° à¶¬âð _${usedPrefix}apkshub *<texto>*_
âÂ° à¶¬âð _${usedPrefix}happymod *<texto>*_
âÂ° à¶¬âð _${usedPrefix}hostapk *<texto>*_
âÂ° à¶¬âð _${usedPrefix}revdl *<texto>*_
âÂ° à¶¬âð _${usedPrefix}toraccino *<texto>*_
âÂ° à¶¬âð _${usedPrefix}uapkpro *<texto>*_
â
â  <ð¸ðð»ððð/>
â
â*- ð´ðð²ðð¸ð±ð´ ð»ð°ð ðð¸ð¶ðð¸ð´ð½ðð´ð ð¿ð°ð»ð°ð±ðð°ð ð¾ ðµðð°ðð´ð ðð¸ð½ ð½ð¸ð½ð¶ðð½ ð¿ðð´ðµð¸ð¹ð¾ (#, /, *, .)* 
â_(ð¢ð ð ð ðð ððððððð)_
âÂ° à¶¬âð _Quien es tu sempai botsito 7w7_
âÂ° à¶¬âð _Te diagnostico con gay_
âÂ° à¶¬âð _A nadie le importa_
âÂ° à¶¬âð _Fiesta del admin_
âÂ° à¶¬âð _Fiesta del administrador_ 
âÂ° à¶¬âð _Vivan los novios_
âÂ° à¶¬âð _Feliz cumpleaÃ±os_
âÂ° à¶¬âð _Noche de paz_
âÂ° à¶¬âð _Buenos dias_
âÂ° à¶¬âð _Buenos tardes_
âÂ° à¶¬âð _Buenos noches_
âÂ° à¶¬âð _Audio hentai_
âÂ° à¶¬âð _Chica lgante_
âÂ° à¶¬âð _Feliz navidad_
âÂ° à¶¬âð _Vete a la vrg_
âÂ° à¶¬âð _Pasa pack Bot_
âÂ° à¶¬âð _Atencion grupo_
âÂ° à¶¬âð _Marica quien_
âÂ° à¶¬âð _Murio el grupo_
âÂ° à¶¬âð _Oh me vengo_
âÂ° à¶¬âð _Viernes_
âÂ° à¶¬âð _Baneado_
âÂ° à¶¬âð _Sexo_
âÂ° à¶¬âð _Hola_
âÂ° à¶¬âð _Un pato_
âÂ° à¶¬âð _Nyanpasu_
âÂ° à¶¬âð _Te amo_
âÂ° à¶¬âð _Yamete_
âÂ° à¶¬âð _BaÃ±ate_
âÂ° à¶¬âð _Es puto_
âÂ° à¶¬âð _La biblia_
âÂ° à¶¬âð _Onichan_
âÂ° à¶¬âð _Mierda de Bot_
âÂ° à¶¬âð _Siuuu_
âÂ° à¶¬âð _Rawr_
âÂ° à¶¬âð _UwU_
âÂ° à¶¬âð _:c_
âÂ° à¶¬âð _a_
â
â  <âð¼ââð¸ððð¼âðð¸ð/>
â
âÂ° à¶¬âð ï¸ _${usedPrefix}afk *<motivo>*_
âÂ° à¶¬âð ï¸ _${usedPrefix}acortar *<enlace / link / url>*_
âÂ° à¶¬âð ï¸ _${usedPrefix}calc *<operacion math>*_
âÂ° à¶¬âð ï¸ _${usedPrefix}del *<respondre a mensaje del Bot>*_
âÂ° à¶¬âð ï¸ _${usedPrefix}qrcode *<texto>*_
âÂ° à¶¬âð ï¸ _${usedPrefix}readmore *<texto1| texto2>*_
âÂ° à¶¬âð ï¸ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
âÂ° à¶¬âð ï¸ _${usedPrefix}styletext *<texto>*_
âÂ° à¶¬âð ï¸ _${usedPrefix}traducir *<texto>*_
â  <ââð¾ - ðððððð¼ð - ð¼âðâðððð¸/>
âÂ° à¶¬âðµ _${usedPrefix}balance_
âÂ° à¶¬âðµ _${usedPrefix}claim_
âÂ° à¶¬âðµ _${usedPrefix}top_
âÂ° à¶¬âðµ _${usedPrefix}levelup_
âÂ° à¶¬âðµ _${usedPrefix}myns_
âÂ° à¶¬âðµ _${usedPrefix}perfil_
âÂ° à¶¬âðµ _${usedPrefix}work_
âÂ° à¶¬âðµ _${usedPrefix}minar_
âÂ° à¶¬âðµ _${usedPrefix}buy_
âÂ° à¶¬âðµ _${usedPrefix}buyall_
âÂ° à¶¬âðµ _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
âÂ° à¶¬âðµ _${usedPrefix}verificar_
âÂ° à¶¬âðµ _${usedPrefix}unreg *<numero de serie>*_
â
â  <ðððâðð¼âð/>
â
âÂ° à¶¬âð½ _${usedPrefix}sticker *<responder a imagen o video>*_
âÂ° à¶¬âð½ _${usedPrefix}sticker *<enlace / link / url>*_
âÂ° à¶¬âð½ _${usedPrefix}s *<responder a imagen o video>*_
âÂ° à¶¬âð½ _${usedPrefix}s *<enlace / link / url>*_
âÂ° à¶¬âð½ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
âÂ° à¶¬âð½ _${usedPrefix}semoji *<tipo> <emoji>*_
âÂ° à¶¬âð½ _${usedPrefix}attp *<texto>*_
âÂ° à¶¬âð½ _${usedPrefix}ttp *<texto>*_
âÂ° à¶¬âð½ _${usedPrefix}pat *<@tag>*_
âÂ° à¶¬âð½ _${usedPrefix}slap *<@tag>_
âÂ° à¶¬âð½ _${usedPrefix}kiss *<@tag>*_
âÂ° à¶¬âð½ _${usedPrefix}dado_
âÂ° à¶¬âð½ _${usedPrefix}wm *<packname> <author>*_
âÂ° à¶¬âð½ _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
âÂ° à¶¬âð½ _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_
â
â  <ððâð¼â ð ððð»ð¼âð¸ð»ðâð¼ð/>
â
âÂ° à¶¬âð _${usedPrefix}cajafuerte_
âÂ° à¶¬âð _${usedPrefix}enable *restrict*_
âÂ° à¶¬âð _${usedPrefix}disable *restrict*_
âÂ° à¶¬âð _${usedPrefix}enable *autoread*_
âÂ° à¶¬âð _${usedPrefix}disable *autoread*_
âÂ° à¶¬âð _${usedPrefix}enable *public*_
âÂ° à¶¬âð _${usedPrefix}disable *public*_
âÂ° à¶¬âð _${usedPrefix}enable *pconly*_
âÂ° à¶¬âð _${usedPrefix}disable *pconly*_
âÂ° à¶¬âð _${usedPrefix}enable *gconly*_
âÂ° à¶¬âð _${usedPrefix}disable *gconly*_
âÂ° à¶¬âð _${usedPrefix}banchat_
âÂ° à¶¬âð _${usedPrefix}unbanchat_
âÂ° à¶¬âð _${usedPrefix}banuser *<@tag>*_
âÂ° à¶¬âð _${usedPrefix}unbanuser *<@tag>*_
âÂ° à¶¬âð _${usedPrefix}banuser *<@tag>*_
âÂ° à¶¬âð _${usedPrefix}bc *<texto>*_
âÂ° à¶¬âð _${usedPrefix}bcchats *<texto>*_
âÂ° à¶¬âð _${usedPrefix}bcgc *<texto>*_
âÂ° à¶¬âð _${usedPrefix}cleartpm_
âÂ° à¶¬âð _${usedPrefix}restart_
âÂ° à¶¬âð _${usedPrefix}update_
âÂ° à¶¬âð _${usedPrefix}addprem *<@tag>*_
âÂ° à¶¬âð _${usedPrefix}delprem *<@tag>*_
âÂ° à¶¬âð _${usedPrefix}listprem_
  â
â­ââ¯
â â¯
âã¤ã¤ã¤ A____A
âã¤ã¤ã¤ |ã»ãã»|
âã¤ã¤ã¤ |ã£ãï½|
âã¤ã¤ã¤ |ããã|
âã¤ã¤ã¤ |ããã|
âã¤ã¤ã¤ Uï¿£ï¿£U
â ââââ â¢ â â¢ âââââ®
â°ââââ â¢ â â¢ âââââ¯`
const fake = { quoted: {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 999999,
status: 1,
surface : 1,
message: wm, 
orderTitle: 'WaBot',
thumbnail: imagen2, 
sellerJid: '0@s.whatsapp.net'
}}}}      
const owner = "5219992095479@s.whatsapp.net"
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{buttonId: `#donar`, buttonText: {displayText: 'ð® ð³ð¾ð½ð°ð ð®'}, type: 1},
{buttonId: `#menuaudios`, buttonText: {displayText: 'ð ð¼ð´ð½ð ð°ðð³ð¸ð¾ð ð'}, type: 1},
{buttonId: `#menucompleto`, buttonText: {displayText: 'ð ð¼ð´ð½ð ð²ð¾ð¼ð¿ð»ð´ðð¾ ð'}, type: 1},
]
let buttonMessage = {
document: imagen1, 
fileName: `á´Ê á´á´á´á´Ê Êá´á´ á´á´ á´¡Êá´á´sá´á´á´â©`, 
mimetype: `application/${document}`,
jpegThumbnail: imagen1,
caption: texto1,
fileLength: "99999999999999",
mentions:[m.sender, owner],
footer: `ððð ð¼ð¢ðððð ð±ðð`,
buttons: buttons,
headerType: 4,
    
contextInfo: {
"mentionedJid": [m.sender, owner],
"externalAdReply": {
"showAdAttribution": true,
"title": `ï¼ï¸¶ï¸¿ï¸¶ï¼ï¼å¸ `,
"mediaType": 2, 
"previewType": "VIDEO",
"thumbnail": imagen3,
"mediaUrl": 'https://youtu.be/eC9TfKICpcY',
"sourceUrl": 'https://www.pornhub.com'
}}} 

conn.sendMessage(m.chat, buttonMessage, fake)

}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|menÃº|memu|memÃº|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}


