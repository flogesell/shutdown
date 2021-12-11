<template>
    <div>
        <Ball v-for="(item, index) in ballObjects" :key="'item' + index" :x="item.xv" :y="item.yv" :size="item.size" :name="item.name" />
        <button @click="clicker"></button>
    </div>
</template>

<script>
import Ball from './Ball.vue'
import CO2Ball from '@/assets/physics/co2ball'
import Attractor from '@/assets/physics/attractor'
import Matter from "matter-js"
//import cait_to_json from '@/data_loader'

export default {
    name: 'Diagramm',
    components: {
        Ball
    },
    props: {
        /*
        balls: {
            type: Array,
            default: () => [new CO2Ball (100, 600, 'USA', 10000, [1000], 1), 
                            new CO2Ball (400, 600, 'Germany', 30000, [1000], 1),
                            new CO2Ball (400, 1000, 'Leel', 20000, [1000], 1)]
        }
        */
    },
    computed: {
        dummy_data() {
            return this.$store.state.CAIT;
        }
    },
    async mounted(){
        await this.loadData();
        this.run();
    },

    async created() {   
        
    },

    methods: {
        getData(){
            let tmp = [];
            this.balls.forEach(element => {
                tmp.push(element.get_json())
            });
            this.ballObjects = tmp;
        },
        async loadData(){
            /*
            this.country_data = await cait_to_json('../assets/CAIT/total/', 
                                      'cait_total_allGHG.csv',
                                     ['cait_electricity_allGHG.csv',
                                      'cait_transportation_allGHG.csv',
                                      'cait_waste_allGHG.csv',
                                      'cait_agriculture_allGHG.csv'],
                                     ['China', 'United States', 'India', 'Russia', 'Indonesia', 'Brazil', 'Japan', 'Iran', 'Germany']);
                                     */

            
            this.balls = this.json_to_balls(this.dummy_data, 4);
            
            
        },
        run(){
            let engine = Matter.Engine.create();
            let attractor = new Attractor(window.innerWidth / 2, window.innerHeight / 2, 0.7, this.balls);

            Matter.Runner.run(engine)
            this.balls.forEach(ball => Matter.World.add(engine.world, ball.body));
            engine.world.gravity.scale = 0;

            setInterval(() => {
                attractor.attract();
                this.balls.forEach(ball => {
                    ball.update();
                })
                this.getData();
            }, 33) 
        },
        clicker(){
             this.balls.forEach(element => {
                element.toggle_emission(0)
            });
        },
        json_to_balls(countries, scale)
        {
            
            //ordering countries by total co2 emissions
            for(let i = 0; i < countries.length; i++)
            {
                for(let j = 0; j < countries.length; j++)
                {
                    if(countries[j].co2_emissions[0] < countries[i].co2_emissions[0])
                    {
                        let tmp      = countries[j];
                        countries[j] = countries[i];
                        countries[i] = tmp;
                    }
                }
            }
            //placing the balls in a grid pattern
            let max_size = countries[0].co2_emissions[0];
            let dist = 4 * Math.sqrt(scale * max_size / Math.PI);

            let grid_columns = parseInt(Math.sqrt(countries.length));
            if(countries.length < 5) grid_columns = countries.length;
            let grid_rows = parseInt(countries.length / 5) + 1;

            let w0 = window.innerWidth / 2;
            let h0 = window.innerHeight / 2;


            let tmp_balls = [];

            for(let i = 0; i < countries.length - 1; i++)
            {
                tmp_balls.push(new CO2Ball(w0 + dist * (i % grid_columns) - (dist * grid_columns) / 2, 
                                           h0 + dist * parseInt(i / grid_columns) - (dist * grid_rows) / 2,
                                           countries[i].name,
                                           countries[i].total_emissions,
                                           countries[i].co2_emissions,
                                           scale));
            }
            return tmp_balls;
        }
    },

    data() {
         
        return{
            ballObjects: [],
            balls: [],
            country_data: []
        }
        
    }

}
</script>

<style>

</style>