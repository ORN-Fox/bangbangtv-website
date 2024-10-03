<template>
    <div class="col-lg-4 col-md-6 col-sm-6 mix" :class="category">
        <div class="portfolio__item">
            <div class="portfolio__item__video set-bg" :data-setbg="`https://i.ytimg.com/vi/${videoHash}/hqdefault.jpg`">
                <a :href="`https://www.youtube.com/watch?v=${videoHash}`" class="play-btn video-popup">
                    <i class="fa fa-play"></i>
                </a>
            </div>
            <div class="portfolio__item__text">
                <h4>{{ title }}</h4>
                <ul>
                    <li v-for="tag in tags" :key="tag">
                        {{ tag }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';

    @Options({
        props: {
            category: String,
            videoHash: String,
            title: String,
            tags: Array<string>()
        }
    })
    export default class PortfolioItem extends Vue {
        category!: string;
        videoHash!: string;
        title!: string;
        tags!: [];
    }
</script>