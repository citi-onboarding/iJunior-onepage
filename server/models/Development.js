const keystone = require('keystone');
const { Name } = require('keystone/lib/fieldTypes');
const { Types } = keystone.Field;

const Development = new keystone.List('Development');


Development.add({
    quote: {
        type: Types.Text,
        required: true,
        initial:true,
        label: "Citação",
      },
    comment: {
        type: Types.Text,
        required: true,
        initial:true,
        label:"Comentário da seção",
      },
      cards:{
          cardMvp:{
            textCardMvp:{
                type: Types.Text,
                required: true,
                initial:true,
                label:"Texto do cartão de MVP"
            },
          },
          cardModules:{
            textCardModules:{
                type: Types.Text,
                required: true,
                initial:true,
                label: "Texto do Cartão de Módulos"
            },
          }
      },

});

Development.register();
