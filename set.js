const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	zenz: 'https://zenzapis.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //Apikey Premium
}
global.Prefix = 'Multi'
global.meki = '79303894386'
global.ownerNumber = '79303894386'
global.gud = 'Elaina Bot' 
global.ownee = 'you shit'
global.ownername = 'ElainaDev'
global.owner = ['79303894386'] 
global.pemilik = ['79303894386'] 
global.premium = ['79303894386'] 
global.packname = 'where i am'
global.slebew = 'Elaina Bot'
global.fake = 'Elaina bot || ❤️ Multi Device'
global.author = 'Anj' 
global.let1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.let2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.let3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.let4 = 'application/zip'
global.let5 = 'application/pdf'
global.let6 = 'application/vnd.android.package-archive'
global.sessionName = 'Session'
global.prefa = ['#','!','/','']
global.sp = '' 
global.mess = {
    success: 'Done ~',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '*Wait A Minutes To Process!*',
    done: 'Done !',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    wrongFormat: 'Perintah Salah!!\nSertakan Link setelah Command..',
    example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'
,
    example2: 'Good Bye @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'    
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}

global.thumb = fs.readFileSync('./media/image/Elaina.jpg')
global.fakeImg = fs.readFileSync('./media/image/Bruh.jpg')
global.lol = fs.readFileSync('./media/image/let.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
