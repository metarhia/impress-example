{

  master: {
    protocol:  'jstp',
    address:   '127.0.0.1',
    ports:     [250],
    slowTime:  '1s'
  },

  www: {
    protocol:  'http',
    address:   '*',
    ports:     [80],
    slowTime:  '1s',
    timeout:   '30s',
    keepAlive: '5s',
    applications: ['example']
  }

}