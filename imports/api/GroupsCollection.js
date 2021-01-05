import { createCollection } from 'meteor/quave:collections';

import SimpleSchema from 'simpl-schema';

const GroupsCollection = createCollection({
    name: 'groups',
    schema: new SimpleSchema({
        name: {
            type: String,
        },
    }),
});

export default GroupsCollection;
