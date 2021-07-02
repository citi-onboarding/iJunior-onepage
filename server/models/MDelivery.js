const keystone = require('keystone');
const { Types } = keystone.Field;

const MDelivery = new keystone.List('MDelivery');


MDelivery.add({
  textFirstElement: {
    type: Types.Text,
    required: true,
    initial: true,
    label: "Descrição do primeiro passo",
  },
  textSecondElement: {
    type: Types.Text,
    required: true,
    initial: true,
    label: "Descrição do segundo passo"
  },
  textThirdElement: {
    type: Types.Text,
    required: true,
    initial: true,
    label: "Descrição do terceiro passo"
  },
  textFourthElement: {
    type: Types.Text,
    required: true,
    initial: true,
    label: "Descrição do quarto passo"
  },
  textFifthElement: {
    type: Types.Text,
    required: true,
    initial: true,
    label: "Descrição do quinto passo"
  }
});

MDelivery.register();