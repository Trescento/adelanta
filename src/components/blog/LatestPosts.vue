<template>
  <section class="bg-brand-gray90 pb-24">
    <div class="bg-brand-purple-light">
      <h2 class="text-[2rem] font-bold text-brand text-center py-12">
        Últimas publicaciones
      </h2>
    </div>
    <div class="flex flex-col container">
          <div class="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr py-24 gap-8">
            <BlogPostItem
            v-motion="{
              initial: { opacity: 0, y: 20 },
              enter: { opacity: 1, y: 0 }
            }"
            v-for="post in posts"
            :key="post.id"
            :post="post"
            />
          </div>
      <div class="flex gap-2 justify-center">
        <button @click="previousPage" aria-label="Página de posts anterior" class="bg-brand rounded-full w-8 h-8 grid place-content-center">
          <CommonArrowIcon type="white" class="rotate-180" />
        </button>
        <button @click="nextPage" aria-label="Página de posts siguiente" class="bg-brand rounded-full w-8 h-8 grid place-content-center">
          <CommonArrowIcon type="white" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { type Post } from '../../interfaces/Post'

// Estados para los posts, el offset, y el límite por página
const posts = useState<Post[]>('posts', () => [])
const totalPosts = ref(36)
const offset = ref(2)
const limit = ref(6) // Puedes ajustar este valor según tus necesidades

// Método para cargar posts
async function loadPosts() {
  await useFetch(`/api/posts?state=PUBLISHED&sort=-updatedAt&limit=${limit.value}&offset=${offset.value}`, {
    onResponse: (data) => {
      if (data.response._data.results.length !== 0) {
        posts.value = data.response._data.results
        totalPosts.value = data.response._data.total - 2 // Resta 2 para no contar los posts de la página inicial
      }
    }
  })
}

// Método para ir a la próxima página
function nextPage() {
  if (offset.value + limit.value >= totalPosts.value) return // No hay más posts
  offset.value += limit.value
  loadPosts()
}

// Método para ir a la página anterior
function previousPage() {
  offset.value = Math.max(2, offset.value - limit.value) // Asegúrate de no tener un offset negativo
  loadPosts()
}

// Carga inicial de posts
loadPosts()
</script>