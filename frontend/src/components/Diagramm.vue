<template>
    <div>
        <Ball v-for="(item, index) in ballObjects" :key="'item' + index" :x="item.xv" :y="item.yv" :size="item.size" :name="item.name" />
        <button @click="clicker"></button>
    </div>
</template>

<script>
import Ball from './Ball.vue'
import CO2Ball from '@/co2ball'
import Attractor from '@/attractor'
import Matter from "matter-js"

export default {
    name: 'Diagramm',
    components: {
        Ball
    },
    props: {
        balls: {
            type: Array,
            default: () => [new CO2Ball (100, 600, 'USA', 10000, [1000], 1), 
                            new CO2Ball (400, 600, 'Germany', 30000, [1000], 1),
                            new CO2Ball (400, 1000, 'Leel', 20000, [1000], 1)]
        }
    },
    mounted(){
        this.getData()
    },

    created() {
        let engine = Matter.Engine.create()
        let attractor = new Attractor(400, 400, 2, this.balls)

        Matter.Runner.run(engine)
        this.balls.forEach(ball => Matter.World.add(engine.world, ball.body));
        engine.world.gravity.scale = 0;
        setInterval(() => {
            attractor.attract();
            this.balls.forEach(ball => {
                ball.update();
            })
            
            this.getData();
        }, 10)
    },

    methods: {
        getData(){
            let tmp = [];
            this.balls.forEach(element => {
                tmp.push(element.get_json())
            });
            this.ballObjects = tmp;
        },
        clicker(){
             this.balls.forEach(element => {
                element.toggle_emission(0)
            });
        }
    },

    data() {
        return{
            ballObjects: [],
        }
        
    }

}
</script>

<style>

</style>