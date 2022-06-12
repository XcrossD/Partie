public = {
    name: 'public',
    description: 'Sets the party to public.',
    parameters: '',
    requirement: 'leader',
    execute (Discord, client, message, args, prefix) {
        if (client.Util.getPartyProfile(message.guild.id, message.member.voice.channel.id, client).getMode() === 'public')
        return message.channel.send(new Discord.MessageEmbed()
            .setDescription('Your party is already `public`.')
            .setColor('#78acff').setAuthor('Partie', 'http://www.simpleimageresizer.com/_uploads/photos/e214e548/logo_25.png'))
        
        client.Util.getPartyProfile(message.guild.id, message.member.voice.channel.id, client).setPublic(client)
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Successful changed privacy mode.')
        .setDescription('Your party is now `public`.')
        .setColor('#78acff').setAuthor('Partie', 'http://www.simpleimageresizer.com/_uploads/photos/e214e548/logo_25.png'))
    }
}
module.exports = public