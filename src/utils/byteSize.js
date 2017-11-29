'use strict'

/**
 * Convert a bytes value to a more human-readable format. Choose between [metric or IEC units](https://en.wikipedia.org/wiki/Gigabyte), summarised below.
 *
 * Value | Metric
 * ----- | -------------
 * 1000  | kB  kilobyte
 * 1000^2 | MB  megabyte
 * 1000^3 | GB  gigabyte
 * 1000^4 | TB  terabyte
 * 1000^5 | PB  petabyte
 * 1000^6 | EB  exabyte
 * 1000^7 | ZB  zettabyte
 * 1000^8 | YB  yottabyte
 *
 * Value | IEC
 * ----- | ------------
 * 1024  | KB kibibyte
 * 1024^2 | MB mebibyte
 * 1024^3 | GB gibibyte
 * 1024^4 | TB tebibyte
 * 1024^5 | PB pebibyte
 * 1024^6 | EB exbibyte
 * 1024^7 | ZB zebibyte
 * 1024^8 | YB yobibyte
 *
 * Value | Metric (octet)
 * ----- | -------------
 * 1000  | ko  kilooctet
 * 1000^2 | Mo  megaoctet
 * 1000^3 | Go  gigaoctet
 * 1000^4 | To  teraoctet
 * 1000^5 | Po  petaoctet
 * 1000^6 | Eo  exaoctet
 * 1000^7 | Zo  zettaoctet
 * 1000^8 | Yo  yottaoctet
 *
 * Value | IEC (octet)
 * ----- | ------------
 * 1024  | Kio kilooctet
 * 1024^2 | Mio mebioctet
 * 1024^3 | Gio gibioctet
 * 1024^4 | Tio tebioctet
 * 1024^5 | Pio pebioctet
 * 1024^6 | Eio exbioctet
 * 1024^7 | Zio zebioctet
 * 1024^8 | Yio yobioctet
 *
 */

class ByteSize {
  constructor(bytes, options) {
    options = options || {}
    options.units = options.units || 'iec'
    options.precision = typeof options.precision === 'undefined' ? 1 : options.precision

    var table = [{
      expFrom: 0,
      expTo: 1,
      metric: 'B',
      iec: 'B',
      metric_octet: 'o',
      iec_octet: 'o'
    }, {
      expFrom: 1,
      expTo: 2,
      metric: 'kB',
      iec: 'KB',
      metric_octet: 'ko',
      iec_octet: 'Kio'
    }, {
      expFrom: 2,
      expTo: 3,
      metric: 'MB',
      iec: 'MB',
      metric_octet: 'Mo',
      iec_octet: 'Mio'
    }, {
      expFrom: 3,
      expTo: 4,
      metric: 'GB',
      iec: 'GB',
      metric_octet: 'Go',
      iec_octet: 'Gio'
    }, {
      expFrom: 4,
      expTo: 5,
      metric: 'TB',
      iec: 'TB',
      metric_octet: 'To',
      iec_octet: 'Tio'
    }, {
      expFrom: 5,
      expTo: 6,
      metric: 'PB',
      iec: 'PB',
      metric_octet: 'Po',
      iec_octet: 'Pio'
    }, {
      expFrom: 6,
      expTo: 7,
      metric: 'EB',
      iec: 'EB',
      metric_octet: 'Eo',
      iec_octet: 'Eio'
    }, {
      expFrom: 7,
      expTo: 8,
      metric: 'ZB',
      iec: 'ZB',
      metric_octet: 'Zo',
      iec_octet: 'Zio'
    }, {
      expFrom: 8,
      expTo: 9,
      metric: 'YB',
      iec: 'YB',
      metric_octet: 'Yo',
      iec_octet: 'Yio'
    }]

    var base = options.units === 'metric' || options.units === 'metric_octet' ? 1000 : 1024

    for (var i = 0; i < table.length; i++) {
      var lower = Math.pow(base, table[i].expFrom)
      var upper = Math.pow(base, table[i].expTo)
      if (bytes >= lower && bytes < upper) {
        var units = table[i][options.units]
        if (i === 0) {
          this.value = String(bytes)
          this.unit = units
          return
        } else {
          this.value = (bytes / lower).toFixed(options.precision)
          this.unit = units
          return
        }
      }
    }

    this.value = String(bytes)
    this.unit = ''
  }

  toString() {
    return `${this.value} ${this.unit}`.trim()
  }
}

function byteSize(bytes, options) {
  return new ByteSize(bytes, options)
}

export default byteSize
