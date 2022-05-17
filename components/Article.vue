<template>
  <div>
    <h1 class="articleTitle">{{ article.title }}</h1>
    <b-container>
      <b-row>
        <b-col>
          <TinyAuthor :author="article.author" class="articleAuthor"/>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="articleText">
      <b-row>
        <b-col>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur hendrerit congue. Mauris semper est
            sollicitudin blandit consectetur. Pellentesque sollicitudin tortor at dolor commodo, quis posuere elit
            tincidunt. Morbi quis neque eget risus placerat ullamcorper nec a ipsum. Aenean tempor nunc est, nec dignissim
            risus condimentum id. Aliquam placerat sodales erat, vel efficitur felis. Curabitur at sem id est faucibus
            aliquam. Pellentesque tincidunt lorem eu dapibus mattis. Suspendisse potenti. Quisque erat ante, luctus id
            congue ut, sagittis at nisl. Donec eu facilisis nibh, convallis aliquet magna. Nulla vel diam risus. Nullam
            ultrices velit non vulputate placerat. Morbi dictum nunc in viverra feugiat. Vivamus mollis maximus
            interdum.</p>
          <vue-mathjax class="formula" formula="$p(a)=0 \implies p(x)=(x-a)q(x)$"></vue-mathjax>
          <p>Pellentesque eu lacus sed nisi venenatis tempus. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Aenean ac tortor eu turpis porttitor fermentum sed dictum enim. Sed ut dignissim purus.
            Aenean convallis tellus nunc, sed egestas nulla rutrum ac. In et sapien et odio faucibus porttitor. Morbi
            vestibulum consequat efficitur. Duis vel posuere magna. Mauris rhoncus porta augue, at tristique massa ultricies
            non. Cras magna justo, accumsan sit amet mi fermentum, accumsan tempus tellus. Praesent varius metus quis enim
            volutpat congue. Nulla vel ex orci. Mauris viverra, quam a vestibulum tempor, tellus velit sollicitudin eros, et
            elementum turpis lectus quis elit. Quisque molestie ac lectus quis iaculis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel lectus bibendum, iaculis justo scelerisque,
            fringilla tellus. Pellentesque eget tellus efficitur purus porta lobortis. Integer dignissim blandit urna at
            porta. Morbi sit amet quam dui. Sed pellentesque quam pharetra, dictum massa non, varius erat. Nunc quis
            dignissim dolor. Duis venenatis convallis leo, in posuere purus lobortis at. Quisque a augue quis ante pulvinar
            dignissim. Nam iaculis nunc erat, nec vestibulum eros elementum posuere. Mauris semper ut nulla vitae faucibus.
            Nulla volutpat ac nisi et mattis. Sed bibendum tellus eget tincidunt dapibus. Donec ac est mattis risus eleifend
            scelerisque et bibendum justo. Ut tortor ligula, tristique in ultricies at, pharetra eu est. Quisque in erat sit
            amet nulla gravida mollis id vehicula dolor.</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      article: {
        title: "Lorem ipsum dolor sit amet",
        author: "Sven Svensson",
        date: "12/3/2022",
        content: "placeholder" // verkligt content hade gått här men det skulle se förskräckligt ut utan en faktiskt databas och så
      }
    }
  }
}
</script>

<style scoped>

.formula {
  display: flex;
  justify-content: center;
}

.articleText {
  margin-top: 1rem;
}

.articleTitle {
  text-align: center;
}

.articleAuthor  {
  justify-content: center;
}

</style>
