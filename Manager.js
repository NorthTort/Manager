const Discord = require('discord.js');

const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var prefix = '!'

 client.on('message', message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + 'ek')) {
        message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
		message.channel.sendMessage('<:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> @everyone <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> \n Идёт набор на ежедневную катку!');
	 }
	 if(message.content.startsWith(prefix + 'turnir')) {
        message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
		message.channel.sendMessage('<:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> @everyone <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> <:Liderstvo:456581505066729474> \n Идёт набор на турнир! Успей встать в очередь на поражение!');
	 }
	  if(message.content.startsWith(prefix + 'kubek')) {
        message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
		message.channel.sendMessage('<:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> @everyone <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> \n Граждане Имперского города! Делайте ваши ставки! Кто победит в ежедневной катке!? \n Кликайте по иконке претендента!');
	 }
	 if(message.content.startsWith(prefix + 'kubtur')) {
        message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
		message.channel.sendMessage('<:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> @everyone <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> <:KolesoUdachi:469348898058797058> \n Граждане Имперского города! Делайте ваши ставки! Кто победит в сегодняшнем турнире!? \n Кликайте по иконке претендента!');
	 }
	 if(message.content.startsWith(prefix + 'sam')) {
  if(message.author.id !== '386834372466049024') return;
    const args = message.content.slice(prefix.length).split('sam');
	  message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
     		message.channel.sendMessage(message.content.slice(prefix.length).split('sam'));
	 }
	 if(message.content.startsWith(prefix + 'send')) {
  if(message.author.id !== '435498881040777231') return;
    const args = message.content.slice(prefix.length).split('send');
	  message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
     		message.channel.sendMessage(message.content.slice(prefix.length).split('send'));
	 }
if(message.content.startsWith(prefix + 'pros')) {
  if(message.author.id !== '445139297230913537') return;
    const args = message.content.slice(prefix.length).split('chris');
	  message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
     		message.channel.sendMessage(message.content.slice(prefix.length).split('pros'));
	 }

if(message.content.startsWith(prefix + 'cq')) {
  if(message.author.id !== '331129112598937600') return;
    const args = message.content.slice(prefix.length).split('cq');
	  message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
     		message.channel.sendMessage(message.content.slice(prefix.length).split('cq'));
	 }

if(message.content.startsWith(prefix + 'ivb')) {
  if(message.author.id !== '523946123606491151') return;
    const args = message.content.slice(prefix.length).split('ivb');
	  message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
     		message.channel.sendMessage(message.content.slice(prefix.length).split('ivb'));
	 }

	 if(message.content.startsWith(prefix + 'stt')) {
  if(message.author.id !== '253263899556708353') return;
    const args = message.content.slice(prefix.length).split('stt');
	  message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
     		message.channel.sendMessage(message.content.slice(prefix.length).split('stt'));
	 }

 	// Арты победителя
if(message.content.startsWith(prefix + 'hero')) {
        message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
message.channel.send({
  embed: {
    thumbnail: {
         url: 'attachment://file.png'
      }
   },
   files: [{
      attachment: 'https://downloader.disk.yandex.ru/preview/fbcb349be89dc23146228583c794e4d49b2d99e4428708523f778524f771a252/5edc0721/_B0aXmp4RJTYYcc2mgnKlukcjmSxFfjpDAzKDOagSbS6IaYXKU6OkDH5WmG3IgBKpJWaitkXT6P0hc0SiNlMIA==?uid=0&filename=Miv.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&owner_uid=432648688&size=2048x2048',
      name: 'Win Hero.png'
   }]
})
.then(console.log)
.catch(console.error);
}
//Карта
if(message.content.startsWith(prefix + 'map')) {
        message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
message.channel.send({
  embed: {
    thumbnail: {
         url: 'attachment://file.h5m'
      }
   },
   files: [{
      attachment: 'https://github.com/NorthTort/Valeria/raw/master/Tri_Dorogi.h5m',
      name: 'Tri Dorogi.h5m'
   }]
})
.then(console.log)
.catch(console.error);
}
//Сражение
if(message.content.startsWith(prefix + 'battle')) {
        message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
message.channel.send({
  embed: {
    thumbnail: {
         url: 'attachment://file.sav'
      }
   },
   files: [{
      attachment: 'https://github.com/NorthTort/Valeria/raw/master/HOMM5_Editor_Theory_rus.pdf',
      name: 'HOMM5_Editor_Theory_rus.pdf'
   }]
})
.then(console.log)
.catch(console.error);
}

let messageArray = message.content.split(" ");
let args = messageArray.slice(1);
    if(message.content.startsWith(prefix + 'calc')) {
const sayMessage1 = args.join(" ");
        message.channel.send(eval(sayMessage1))
     }

 });

 client.on('guildMemberUpdate', (oldMember, newMember) => {
  if(client.User.role.id !== '543916621522272262') return;
     member.guild.channels.get('432864200864301059').send(' TEXT **' + member.user + '**, TEXT.');
 	});

client.on('guildMemberAdd', member => {
    member.guild.channels.get('432864200864301059').send('<:Prisoedinenie:572126670929133591> <:Prisoedinenie:572126670929133591> <:Prisoedinenie:572126670929133591> <:Prisoedinenie:572126670929133591> <:Prisoedinenie:572126670929133591> **' + member.user + '**, приветствую тебя, Воин! <:Prisoedinenie:572126670929133591> <:Prisoedinenie:572126670929133591> <:Prisoedinenie:572126670929133591> <:Prisoedinenie:572126670929133591> <:Prisoedinenie:572126670929133591> \n Прочти правила сервера, чтобы не налажать: <#464435496773484554>.');
	});


client.on('guildMemberRemove', member => {
    member.guild.channels.get('432864200864301059').send('<:Nadzor:460625006045429778> <:Nadzor:460625006045429778> <:Nadzor:460625006045429778> <:Nadzor:460625006045429778> <:Nadzor:460625006045429778> **' + member.user + '**, беги! Жалкий трус! <:Nadzor:460625006045429778> <:Nadzor:460625006045429778> <:Nadzor:460625006045429778> <:Nadzor:460625006045429778> <:Nadzor:460625006045429778>');
    // channel-id - Надо вводить ид канала куда будет писаться это сообщение
});

client.login(process.env.BOT_TOKEN);
