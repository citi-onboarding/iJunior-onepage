const keystone = require('keystone');

const { Types } = keystone.Field;

const modDelivery = new keystone.list('modDelivery');

modDelivery.add({
    elements: {
        firstElement: {
            textFirstElement: {
                type: Types.text,
                required: true,
                initial: true,
                label: "Descrição do primeiro passo",
            },
            secondElement: {
                type: Types.text,
                required: true,
                initial: true,
                label: "Descrição do segundo passo"
            },
            thirdElement: {
                type: Types.text,
                required: true,
                initial: true,
                label: "Descrição do terceiro passo"
            },
            fourthElement: {
                type: Types.text,
                required: true,
                initial: true,
                label: "Descrição do quarto passo"
            },
            fifthElement: {
                type: Types.text,
                required: true,
                initial: true,
                label: "Descrição do quinto passo"
            }
        }
    }
})
modDelivery.register();
