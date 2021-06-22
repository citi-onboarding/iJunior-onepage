const keystone = require('keystone');
const { Types } = keystone.Field;

const Contact = new keystone.List('Contact');

Contact.add({
    firstCard: {
        topicOne: {
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
        topicTwo: {
            title: {
                type: Types.Text,
                require: true,
                initial: true,
                label: "Título do segundo tópico"
            },
            logos: {
                type: Types.CloudinaryImages,
                require: true,
                initial: true,
                label: "Logo do segundo tópico"
            },
            links: {
                type: Types.Url,
                require: true,
                initial: true,
                label: "Link correspondente"
            },
        },
        topicThree: {
            title: {
                type: Types.Text,
                require: true,
                initial: true,
                label: "Título do terceiro tópico"
            },
            logos: {
                type: Types.CloudinaryImages,
                require: true,
                initial: true,
                label: "Logo do terceiro tópico"
            },
            links: {
                type: Types.Url,
                require: true,
                initial: true,
                label: "Link correspondente"
            },
        },
        topicFour: {
            title: {
                type: Types.Text,
                require: true,
                initial: true,
                label: "Título do quarto tópico"
            },
            logos: {
                type: Types.CloudinaryImages,
                require: true,
                initial: true,
                label: "Logo do quarto tópico"
            },
            links: {
                type: Types.Url,
                require: true,
                initial: true,
                label: "Link correspondente"
            },
        },
    },
    secondCard: {
        options: {
            name: {
                type: Types.Text,
                label: "Nome do usuário"
            },
            phone: {
                type: Types.Text,
                label: "Número do usuário"
            },
            email: {
                type: Types.Text,
                label: "E-mail do usuário"
            },
            message: {
                type: Types.Text,
                label: "Mensagem do usuário"
            }
        }
    }
});
Contact.register();