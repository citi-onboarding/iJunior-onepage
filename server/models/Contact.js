const keystone = require('keystone');
const { Types } = keystone.Field;

const Contact = new keystone.List('Contact');

Contact.add({
    firstCard: {
        title: {
            type: Types.Text,
            require: true,
            initial: true,
            label: "Título do primeiro cartão"
        },
        logos: {
            type: Types.CloudinaryImages,
            require: true,
            initial: true,
            label: "Logos das redes sociais"
        },
        links: {
            type: Types.Url,
            require: true,
            initial: true,
            label: "Links das redes sociais"
        },
    },
    secondCard: {
        title: {
            type: Types.Text,
            require: true,
            initial: true,
            label: "Título do segundo cartão"
        },
        inputs: {
            name: {
                type: Types.Name,
                require: true,
                initial: true,
                label: "Nome do usuário"
            },
            phone: {
                type: Types.Number,
                require: true,
                initial: true,
                label: "Número do usuário"
            },
            email: {
                type: Types.Email,
                require: true,
                initial: true,
                label: "E-mail do usuário"
            },
            message: {
                type: Types.Text,
                require: true,
                initial: true,
                label: "Mensagem do usuário"
            }
        }
    }
});
Contact.register();