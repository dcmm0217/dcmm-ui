<template>
  <button class="mm-button" :class="buttonStyle"><slot /></button>
</template>

<script lang="ts" setup>
import './style/index.less';
import { computed } from 'vue';
defineOptions({ name: 'mm-button' });
type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>()
const buttonStyle = computed(()=>{
  return { [`mm-button--${buttonProps.type}`]: buttonProps.type };
})



</script>
