const keystone = require('keystone');
const { Types } = keystone.Field;

const Banner = new keystone.List('Banner');


Banner.add({
    title: {
        type: Types.Text,
        require: true,
        initial:true,
        label: "Título do Banner",
      },
    text: {
        type: Types.Textarea,
        require: true,
        initial:true,
        label:"Texto do Banner"
      },
    imageBanner:{
        type: Types.CloudinaryImages,
        require: true,
        initial:true,
        label: "Imagem do Banner",
    },
});

Banner.register();
