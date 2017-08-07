{

  // Server ports bind configuration
  // Each server is named server on specified address and port

  master: {
    protocol:  'jstp',
    transport: 'tcp',
    address:   '127.0.0.1',
    ports:     [250],
    slowTime:  '1s'
  },

  www: {
    protocol:  'http', // http or jstp
    transport: 'tcp', // tcp or tls for http; tcp, tls, ws or wss for jstp
    address:   '*',
    ports:     [80],
    slowTime:  '1s',
    timeout:   '30s',
    keepAlive: '5s',
    applications: ['example'], // undefined for all
    // inspect: 2000 // inspect Chrome developer tools
  },

  rpc: {
    protocol:  'jstp',
    transport: 'tcp',
    address:   '*',
    ports:     [3000, [1]], // Example: [81, [-1]]
    applications: ['example'],
    heartbeat: '2s'
  },

  webRpc: {
    protocol:  'jstp',
    transport: 'ws',
    address:   '*',
    ports:     [8000],
    applications: ['example'],
    slowTime:  '1s'
  }

}
