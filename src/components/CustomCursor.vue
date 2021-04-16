<template>
    <div>    
        <div ref="cursor" class="cursor"></div>
        <div ref="follower" class="follower"></div>
    </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
    mounted(){
        const { cursor, follower } = this.$refs;

        gsap.set(cursor,{xPercent:-50,yPercent:-50});
        gsap.set(follower,{xPercent:-50,yPercent:-50});

        window.addEventListener('mousemove',e => {

        gsap.to(cursor, {
            x:e.clientX,
            y:e.clientY,
            duration: 0.1,
        });

        gsap.to(follower, {
            x:e.clientX,
            y:e.clientY,
            duration: 0.5,
        });

        });
    }
    
}
</script>

<style>
.cursor{
    position: fixed;
    top: 0;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #718699;
    z-index: 2000;
    user-select: none;
    pointer-events: none;
}

.follower{
    z-index: 2000;
    position: fixed;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    background-color: #495e72;
    border-radius: 50%;
    opacity: 0.3;
    mix-blend-mode:multiply;
    user-select: none;
    pointer-events: none;
}
</style>