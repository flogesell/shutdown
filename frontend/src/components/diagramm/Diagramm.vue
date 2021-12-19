<template>
    <div id="container">
        <Ball :x="this.total_ball.x" :y="this.total_ball.y" :name="this.total_ball.name" :size="this.total_ball.size" :color="this.total_ball.color"/>
        <Ball @clicked="onClickChild" v-for="(item, index) in ballObjects" :key="'item' + index" :index="index" :x="item.xv" :y="item.yv" :size="item.size" :name="item.name" :color="item.color"/>
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
    props: {
        energy: Boolean,
        traffic: Boolean,
        agrar: Boolean
    },
    components: {
        Ball
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
        onClickChild (value) {
            
            if(this.balls[value].children_visible)
            {
                this.running = true;
                this.balls[value].toggle_children();
                document.getElementById("container").style.left = "0px";            
                document.getElementById("container").style.transform ="scale(1)";
                document.getElementById("container").style.top = "0px";
                this.balls.forEach(ball => { ball.set_color("black"); })
                this.total_ball.color = "#ddd";
            }
            else
            {
                this.running = false;
                let x = this.balls[value].get_pos().x;
                let y = this.balls[value].get_pos().y;
                let d = this.balls[value].get_diameter();
                let target_d = window.innerHeight * 0.5;
                let scale = 0.5 * target_d/d;
                document.getElementById("container").style.left= window.innerWidth/2 -(x*scale) + "px";            
                document.getElementById("container").style.transform="scale("+ scale +")";
                document.getElementById("container").style.top= window.innerHeight/2 -(y*scale) + "px";
                this.balls.forEach(ball => { if(ball.children_visible) ball.toggle_children(); })
                this.balls[value].toggle_children();
                this.balls.forEach(ball => { if(!ball.children_visible) ball.set_color("transparent"); })
                console.log(this.balls)
                this.total_ball.color = "transparent";
            }
        },
        getData(){
            let tmp_countries = [];
            let tmp_sectors = [];
            this.balls.forEach(ball => {
                tmp_countries.push(ball.get_json());
                if(ball.children_visible)
                {
                    let children = ball.get_children_json();
                    children.forEach(child => tmp_sectors.push(child));
                }
            });
            
            //console.log(tmp)
            this.ballObjects = tmp_countries.concat(tmp_sectors);

            this.total_emissions = 0;
            tmp_countries.forEach(country => this.total_emissions += country.size);
            this.total_ball.size = this.total_emissions;
            this.total_ball.x = (window.innerWidth / 2) - Math.sqrt(this.total_ball.size / Math.PI);
            this.total_ball.y = (window.innerHeight / 2) - Math.sqrt(this.total_ball.size / Math.PI);
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
            let runner = Matter.Runner.create();
            let attractor = new Attractor(window.innerWidth / 2, window.innerHeight / 2, 1, this.balls);

            //console.log(engine)

            Matter.Runner.start(runner, engine);
            this.balls.forEach(ball => ball.add_to_world(engine.world));
            engine.world.gravity.scale = 0; 

            let prev_running = this.running;

           
            setInterval(() => {
                if(prev_running != this.running) {
                    if(this.running) {
                        Matter.Runner.run(runner, engine);
                    }
                    else {
                        Matter.Runner.stop(runner);
                    }
                }
                if(this.running) {
                    attractor.pos = {x: window.innerWidth / 2, y: window.innerHeight / 2};
                    attractor.attract();
                }
                
                this.balls.forEach(ball => {
                    ball.update();
                })
                this.getData();
                prev_running = this.running;
            }, 33) 
        },
        clicker(){
            /*
            this.balls.forEach(element => {
                element.toggle_emission(0);
            });
            */
            
            this.balls[0].toggle_children();
           
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
                                           scale,
                                           i + 1));
            }
            return tmp_balls;
        }
    },

    data() {
        return{
            ballObjects: [],
            balls: [],
            country_data: [],
            total_ball: {
                x: 0,
                y: 0,
                name: "",
                size: 0,
                color: '#ddd'
            },
            total_emissions: 0,
            running: true
        }
        
    }

}
</script>

<style scoped>
    #container{
        position: absolute;
        display: inline-block;
      transition: 2s;
    }
</style>