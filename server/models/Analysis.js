const keystone = require('keystone');
const { Types } = keystone.Field;

const Analysis = new keystone.List('Analysis');

Analysis.add({
    firstText:{
        firstTopic: {
            type: Types.Text,
            required: true,
            initial: true,
            label: "Descrição no primeiro "
        },
        secondTopic: {
            type: Types.Text,
            required: true,
            initial: true,
            label: "Descrição no segundo parágrafo"
        },
    },
    firstImage: {
        type: Types.CloudinaryImages,
        require: true,
    },
    secondImage: {
        type: Types.CloudinaryImages,
        require: true
    }
})
Analysis.register();