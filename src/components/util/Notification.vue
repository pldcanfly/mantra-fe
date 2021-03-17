<style lang="scss">
#notification-container {
  position: fixed;
  top: 0;
  z-index: 999;
  left: 50%;
  transform: translateX(-50%);

  .notification {
    text-align: center;
    background-color: $c-green;
    color: #fff;
    padding: 20px;
    &.error {
      background-color: $c-red;
    }
  }

  .notificationlist-enter-active,
  .notificationlist-leave-active {
    transition: all 0.5s ease;
  }
  .notificationlist-enter-from,
  .notificationlist-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
}
</style>

<template>
  <teleport to="body">
    <div id="notification-container">
      <transition-group name="notificationlist">
        <div class="notification" :class="notification.type" :key="index" v-for="(notification, index) in notifications">
          {{ notification.message }}
        </div>
      </transition-group>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const notifications = computed(() => store.state.notifications.notifications);
    store.dispatch('clearStore');

    return {
      notifications,
    };
  },
});
</script>
