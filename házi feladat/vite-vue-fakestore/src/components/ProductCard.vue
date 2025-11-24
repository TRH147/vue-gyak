<template>
 <div class="product-card">
  <img :src="product.image" alt="" />
  <h3>{{ product.title }}</h3>
  <p class="category">{{ product.category }}</p>
  <div class="price-add">
    <strong>${{ product.price }}</strong>
    <button @click="$emit('add', product)">Add</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: { product: { type: Object, required: true } },
  methods: {
    addToCart() { this.$emit('add', this.product) }
  }
}
</script>
