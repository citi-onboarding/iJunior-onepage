const keystone = require('keystone');
const { Types } = keystone.Field;

const Banner = new keystone.List('Banner');

Banner.add({
  title: {
    type: Types.CloudinaryImage,
    require: true,
    initial: true,
    label: "Título do Banner",
  },
  text: {
    type: Types.Textarea,
    require: true,
    initial: true,
    label: "Texto do Banner"
  },
  imageBanner: {
    type: Types.CloudinaryImage,
    require: true,
    initial: true,
    label: "Imagem do Banner",
  },
});

Banner.register();
