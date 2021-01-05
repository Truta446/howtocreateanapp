import { createCollection } from 'meteor/quave:collections';

import SimpleSchema from 'simpl-schema';

const TopicsCollection = createCollection({
    name: 'topics',
    schema: new SimpleSchema({
        name: {
            type: String,
        },
        groupId: {
            type: String,
        },
    }),
});

export default TopicsCollection;
