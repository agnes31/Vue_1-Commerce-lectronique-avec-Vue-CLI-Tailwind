export default {
    props: ['inventory', 'updateInv'],
    data () {
      return {
        message: null,
        submitted: false,
        product: {},
        id: parseInt(this.$route.params.id)
      }
    },
    methods: {
      updateProduct () {
        ProductDataService.update(this.id, this.product)
          .then(response => {
            this.updateInv(this.productIndex, this.product)
            this.submitted = true
            this.message = null
          })
          .catch((e) => {
            this.message = e.response.data.message
          })
      }
    },
    computed: {
      productIndex () {
        const index = this.inventory.findIndex((p) => {
          return p.id === this.id
        })
        return index
      }
    },
    mounted () {
      ProductDataService.get(this.id)
        .then(response => {
          this.product = response.data
        })
    }
  }
</script>
