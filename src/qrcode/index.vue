<template>
  <div></div>
</template>

<script type="text/javascript">
import QRCode from 'qrcode2'
export default {
  name: 'r-qrcode',
  data () {
    return {
      qrcode: null
    }
  },
  props: {
    text: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 128
    },
    width: {
      type: Number,
      default: 128
    },
    height: {
      type: Number,
      default: 128
    },
    dark: {
      type: String,
      default: '#000'
    },
    light: {
      type: String,
      default: '#FFF'
    },
    level: {
      type: String
    }
  },
  computed: {
    correctLevel () {
      const lv = typeof this.level === 'string' && ['L', 'M', 'Q', 'H'].includes(this.level.toUpperCase())
      ? this.level.toUpperCase()
      : 'H'
      return QRCode.CorrectLevel[lv]
    }
  },
  methods: {
    init () {
      this.qrcode = new QRCode(this.$el, {
        text: this.text,
        width: this.size || this.width,
        height: this.size || this.height,
        colorDark: this.dark,
        colorLight: this.light,
        correctLevel: this.correctLevel
      })
    }
  },
  watch: {
    text (v) {
      this.qrcode.makeCode(v)
    }
  },
  mounted () {
    this.init()
  }
}
</script>
