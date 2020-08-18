const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "hardware",
    description: "returns hardware",
    run: (message, args) => {
        var embed = new MessageEmbed()
            .addFields(
                {name: 'CPU', value: `[Intel Core i5 7600K @ 3.80GHz](https://www.amazon.com/Intel-i5-7600K-Desktop-Processors-BX80677I57600K/dp/B01MRRPPQS/ref=sr_1_15?dchild=1&keywords=Intel+Core+i5+7600K&qid=1597792530&sr=8-15)`, inline: false },
                {name: 'Ram', value: `[Crucial Ballistix 3200 MHz DDR4 16GB](https://www.amazon.com/Crucial-Ballistix-Desktop-Gaming-BL2K8G32C16U4B/dp/B083TRRT16/ref=sr_1_2?dchild=1&keywords=Crucial+Ballistix+3200+MHz+DDR4+16GB&qid=1597793070&sr=8-2)`, inline: false },
                {name: 'Motherboard', value: `[Supermicro C7Z170-M](https://www.amazon.com/Supermicro-Motherboard-Micro-DDR4-C7Z170-M/dp/B0150VCP06/ref=sr_1_1?dchild=1&keywords=Supermicro+C7Z170-M&qid=1597793084&sr=8-1)`, inline: false },
                {name: 'Graphics Card', value: `[NVIDIA GeForce GTX 1050 Ti](https://www.amazon.com/ASUS-Geforce-Phoenix-Graphics-PH-GTX1050TI-4G/dp/B01M360WG6/ref=sr_1_4?dchild=1&keywords=GeForce+GTX+1050+Ti&qid=1597793129&sr=8-4)`, inline: false },
                {name: 'Storage', value: `SSD: [931GB Western Digital WDC WDS100T2B0A-00SM50](https://www.amazon.com/Blue-NAND-1TB-SSD-WDS100T2B0A/dp/B073SBQMCX/ref=sr_1_4?dchild=1&keywords=931GB+Western+Digital+WDC+WDS100T2B0A-00SM50&qid=1597792700&sr=8-4)
                                          HDD: [931GB TOSHIBA HDWD110](https://www.amazon.com/Toshiba-5400RPM-Cache-Notebook-MQ01ABD100V/dp/B07NGTZWWZ/ref=sr_1_2?crid=XXOA1W3XFLNC&dchild=1&keywords=1tb+hdd+toshiba&qid=1597792818&sprefix=1tb+hdd+Tos%2Caps%2C185&sr=8-2)`, inline: false },
                {name: 'Motherboard', value: `[Supermicro C7Z170-M](https://www.amazon.com/Supermicro-Motherboard-Micro-DDR4-C7Z170-M/dp/B0150VCP06/ref=sr_1_1?dchild=1&keywords=Supermicro+C7Z170-M&qid=1597792864&sr=8-1)`, inline: false },
                {name: 'Headset', value: `[Corsair VOID PRO Wireless](https://www.amazon.com/dp/B0748K7JW6/ref=dp_cerb_2)`, inline: false },
                {name: 'Mouse', value: `[Logitech G502 Hero](https://www.amazon.com/Rat%C3%B3n-rendimiento-jugar-videojuegos-Logitech/dp/B07GBZ4Q68/ref=sr_1_1?dchild=1&keywords=Logitech+G502+Hero&qid=1597792965&sr=8-1)`, inline: false },
                {name: 'Keyboard', value: `[Logitech G910 Orion Spectrum](https://www.amazon.com/Logitech-Spectrum-Mechanical-Keyboard-920-008012/dp/B01GAONOAC/ref=sr_1_1?dchild=1&keywords=Logitech+G910+Orion+Spectrum&qid=1597792978&sr=8-1)`, inline: false },
            )

            .setColor(15158332)

        message.channel.send({embed: embed})
    }
}