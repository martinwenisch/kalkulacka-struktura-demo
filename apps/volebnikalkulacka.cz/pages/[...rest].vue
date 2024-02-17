<template>
  <div>
    test-{{ $route.params.rest }}
    <AvatarComponent size="small" image-url="https://i.pravatar.cc/300" />
  </div>
</template>

<script setup>
import { AvatarComponent } from "ui";
</script>
