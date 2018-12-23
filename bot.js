client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('$bc')){
 if(!message.author.id === '518170012595388436') return;
message.channel.sendMessage('جاري ارسال الرسالة لجميع اعضاء البوت |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.login("NTI2MDQ0MDkzNTc5Nzg4MzE4.Dv_c1A.EviQAknm9FUtT1sLpxtEHKgrhs0")
