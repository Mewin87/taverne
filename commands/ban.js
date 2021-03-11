const discord = require('discord.js')
module.exports = { 
    name: "ban",
    description: "ban someone",
    run: async(client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Vous n'avez pas la permission!")
        let target = message.mentions.members.first()

        if(!target) return message.reply("Veuillez mentionner un membre")

        if(target.id === message.author.id) {
            return message.reply("Vous ne pouvez pas vous kick!")
        }

        let reason = args.slice(1).join(' ')

        if(!reason) return message.reply("Veuillez donner une raison!")

        let embed = new discord.MessageEmbed()
        .setTitle("Membre Ban")
        .addField("Membre", target.user.tag)
        .addField("Moderateur", message.author.tag)
        .addField("Raison", `${reason}`)
        await message.channel.send(embed)
        await target.ban({reason:reason})
    }
}
module.exports.help = {
    name: "ban"
}