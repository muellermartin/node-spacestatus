const ms = require('ms');

module.exports = {

    intervalMs: ms('5m'),
    lookbackIntervalMs: ms('15m'),

    mqtt: {
        hostname: 'mqtt.core.bckspc.de',

        options: {
            qos: 1,
            retain: true
        },

        topics: {
            spaceStatus: 'sensor/space/status',
            memberPresent: 'sensor/space/member/present',
            memberNames: 'sensor/space/member/names',
            deviceCount: 'sensor/space/member/deviceCount'
        }
    },

    mysql: {
        hostname: 'violet.core.bckspc.de',
        username: '',
        password: '',
        database: ''
    },

    unifi: {
        hostname: '',
        port: 9443,
        username: '',
        password: '',
        site: 'default',
        network: '10.1.20.0/24'
    },

    nmap: {
        network: '10.1.20.0/24'
    }
};