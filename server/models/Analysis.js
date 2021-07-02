const keystone = require('keystone');
const { Types } = keystone.Field;

const Analysis = new keystone.List('Analysis');

Analysis.add({
  firstText: {
    firstTopic: {
      type: Types.Text,
      required: true,
      initial: true,
      label: "Descrição do tópico no primeiro texto"
    },
    secondTopic: {
      type: Types.Text,
      required: true,
      initial: true,
      label: "Descrição do tópico no primeiro texto"
    },
    thirdTopic: {
      type: Types.Text,
      required: true,
      initial: true,
      label: "Descrição do tópico no primeiro texto"
    },
  },
  secondText: {
    firstTopic: {
      type: Types.Text,
      required: true,
      initial: true,
      label: "Descrição do tópico no segundo texto"
    },
    secondTopic: {
      type: Types.Text,
      required: true,
      initial: true,
      label: "Descrição do tópico no segundo texto"
    },
    thirdTopic: {
      type: Types.Text,
      required: true,
      initial: true,
      label: "Descrição do tópico no segundo texto"
    },
  },
  firstImage: {
    type: Types.CloudinaryImages,
    require: true,
    initial: true,
    label: "Primeira imagem"
  },
  secondImage: {
    type: Types.CloudinaryImages,
    require: true,
    initial: true,
    label: "Segunda imagem"
  }
});

Analysis.register();