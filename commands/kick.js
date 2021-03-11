const discord = require('discord.js')
module.exports = { 
    name: "kick",
    description: "kicks someone",
    run: async(client, message, args) => {
	  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Vous n'avez pas la permission!")
        let target = message.mentions.members.first()

        if(!target) return message.reply("Veuillez mentionner un membre!")

        if(target.id === message.author.id) {
            return message.reply("Vous ne pouvez pas vous kick!")
        }

        let reason = args.slice(1).join(' ')

        if(!reason) return message.reply("Veuillez donner une raison!")

        let embed = new discord.MessageEmbed()
        .setTitle("Membre kick")
        .addField("Membre", target.user.tag)
        .setColor("RANDOM")
        .addField("Moderateur", message.author.tag)
        .addField("Raison", `${reason}`)
        await message.channel.send(embed)
        await target.kick(reason)
    }
}
module.exports.help = {
    name: "kick"
}