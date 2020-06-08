const Service = require('@liteflow/service');

const liteflow = new Service();

liteflow.listenTask({
    searchQuery: require('./tasks/searchQuery')
})
.on('error', (error) => console.error(error));
