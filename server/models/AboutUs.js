const keystone = require('keystone');
const { Types } = keystone.Field;

const AboutUs = new keystone.List('AboutUs');



AboutUs.add({
    text: {
        type: Types.Textarea,
        label: "Texto",
      },
    carrousel:{
        card:{
            icon:{
                type: Types.CloudinaryImage,
                require: true,
                initial:true,
                label: "Imagem do Cartão",
            },
            title:{
                type: Types.Text,
                require: true,
                initial:true,
                label: "Título do Cartão",
            },
            texto:{
                type: Types.Text,
                require: true,
                initial:true,
                label: "Texto do Cartão",
            },
        },
    },
});

AboutUs.register();