const Counter = {
  data() {
    return {
      showCode: false,
      indexCount: 0,
      ligushata: [
        { id: '1', label: 'left' },
        { id: '2', label: 'left' },
        { id: '3', label: 'left' },
        { id: '4', label: '' },
        { id: '5', label: 'right' },
        { id: '6', label: 'right' },
        { id: '7', label: 'right' }
      ],
      rocks: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 }
      ],
      code: ['–', '–', '–', '–', '–', '–', '–', '–', '–', '–', '–', '–', '–', '–', '–']
    }
  },
  mounted() {

  },
  methods: {
    startCopy(id, index) {
      if (this.ligushata[index].label === 'left' && index <= 5) {

        if (!this.ligushata[index + 1].label) {
          this.code[this.indexCount] = id
          this.indexCount++

          let tempLigushka = this.ligushata[index + 1]
          this.ligushata[index + 1] = this.ligushata[index]
          this.ligushata[index] = tempLigushka
        } else if (index <= 4) {
          if (!this.ligushata[index + 2].label) {
            this.code[this.indexCount] = id
            this.indexCount++

            let tempLigushka = this.ligushata[index + 2]
            this.ligushata[index + 2] = this.ligushata[index]
            this.ligushata[index] = tempLigushka
          }
        }

      } else if (this.ligushata[index].label === 'right' && index >= 1) {
        if (!this.ligushata[index - 1].label) {
          this.code[this.indexCount] = id
          this.indexCount++

          let tempLigushka = this.ligushata[index - 1]
          this.ligushata[index - 1] = this.ligushata[index]
          this.ligushata[index] = tempLigushka
        } else if (index >= 2) {
          if (!this.ligushata[index - 2].label) {
            this.code[this.indexCount] = id
            this.indexCount++

            let tempLigushka = this.ligushata[index - 2]
            this.ligushata[index - 2] = this.ligushata[index]
            this.ligushata[index] = tempLigushka
          }
        }
      }

      else {
        console.log('Это не лягушка');
      }
    },
    reset() {
      this.ligushata = [
        { id: '1', label: 'left' },
        { id: '2', label: 'left' },
        { id: '3', label: 'left' },
        { id: '4', label: '' },
        { id: '5', label: 'right' },
        { id: '6', label: 'right' },
        { id: '7', label: 'right' }
      ]
      this.code = ['–', '–', '–', '–', '–', '–', '–', '–', '–', '–', '–', '–', '–', '–', '–']
      this.indexCount = 0
      this.showCode = false
    }
  }
}


Vue.createApp(Counter).mount('#boloto')