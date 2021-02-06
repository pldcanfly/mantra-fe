<style lang="scss" scoped>
    .shortchar {
        $height: 25px;

        background-color: $c-dark-grey;
        display: flex;
        height: $height;
        line-height: $height;

        .roleicon {
            height: $height;
            width: $height;
            background-color: $c-light-grey;
        }
    }
</style>

<template>
    <div class="shortchar">
        <div class="roleicon">
            H
        </div>
        <div class="name">
            {{ character.name }}
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        props: {
            character: { type: Object,
                        required: true
                         }
        }

    });
</script>