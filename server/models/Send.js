const keystone = require('keystone');
const { Types } = keystone.Field;

const Send = new keystone.List('Send');


Send.add({
    title: {
        type: Types.Text,
        require: true,
        initial:true,
        label: "TÃ­tulo do Banner",
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

Send.register();

