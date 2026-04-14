<template>
  <div class="mechanical-frame" :class="{ 'mechanical-frame--pad': padded }">
    <span class="mf-corner mf-tl" aria-hidden="true" />
    <span class="mf-corner mf-tr" aria-hidden="true" />
    <span class="mf-corner mf-bl" aria-hidden="true" />
    <span class="mf-corner mf-br" aria-hidden="true" />
    <div class="mf-body">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  padded: { type: Boolean, default: true },
})
</script>

<style scoped>
.mechanical-frame {
  position: relative;
  border: 1px solid var(--mf-border, rgba(57, 240, 255, 0.38));
  background: var(--mf-bg, rgba(8, 11, 26, 0.88));
  box-shadow:
    0 0 0 1px rgba(255, 42, 122, 0.05),
    0 0 28px rgba(57, 240, 255, 0.07);
}

.mechanical-frame--pad .mf-body {
  padding: 1.15rem 1.25rem;
}

.mf-body {
  position: relative;
  z-index: 1;
}

.mf-corner {
  position: absolute;
  width: 12px;
  height: 12px;
  z-index: 2;
  pointer-events: none;
  border-color: var(--mf-corner, #39f0ff);
  border-style: solid;
}

.mf-tl {
  top: -1px;
  left: -1px;
  border-width: 2px 0 0 2px;
}

.mf-tr {
  top: -1px;
  right: -1px;
  border-width: 2px 2px 0 0;
}

.mf-bl {
  bottom: -1px;
  left: -1px;
  border-width: 0 0 2px 2px;
}

.mf-br {
  bottom: -1px;
  right: -1px;
  border-width: 0 2px 2px 0;
}
</style>
