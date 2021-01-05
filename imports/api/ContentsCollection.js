import { createCollection } from 'meteor/quave:collections';

import SimpleSchema from 'simpl-schema';

const ContentsCollection = createCollection({
    name: 'contents',
    schema: new SimpleSchema({
        name: {
            type: String,
        },
        topicId: {
            type: String,
        },
    }),
});

export default ContentsCollection;
