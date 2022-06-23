import BackTop from "components/content/backTop/BackTop"

export const scrollToTop = {
    data() {
        return {
            isBackTopShow: false,
        }
    },
    components: {
        BackTop,
    },
    methods: {
        backTopClick() {
          this.$refs.scroll.scrollTo(0, 0)
        },
    }
}