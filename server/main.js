import { Meteor } from 'meteor/meteor';
import GroupsCollection from '../imports/api/GroupsCollection';
import TopicsCollection from '../imports/api/TopicsCollection';
import ContentsCollection from '../imports/api/ContentsCollection';

Meteor.startup(() => {
  const groupId = GroupsCollection.insert({name: 'Group'});
  const topicId = TopicsCollection.insert({name: 'Topic', groupId});
  ContentsCollection.insert({name: 'Content', topicId});
});
