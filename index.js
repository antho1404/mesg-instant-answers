const Service = require('@mesg/service');

const mesg = new Service();

mesg.listenTask({
    searchQuery: require('./tasks/searchQuery')
})
.on('error', (error) => console.error(error));
