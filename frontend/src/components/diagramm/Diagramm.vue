<template>
    <div id="container" @clicked="zoom_out">
        <Ball :legend="true" :x="this.total_ball.x" :y="this.total_ball.y" :name="this.total_ball.name" :size="this.total_ball.size" :color="this.total_ball.color" :emissions="total_ball.emissions"/>
        <Scale :x="this.center.x" :y="this.center.y" :increment="this.scale_increment" :scale="this.scale" :nb_of_rings="7" :color="'grey'"/>
        <Ball @clicked="onClickChild" v-for="(item, index) in ballObjects" :key="'item' + index" :index="index" :x="item.xv" :y="item.yv" :size="item.size" :name="item.name" :iso="item.iso" :color="item.color" :emissions="item.emissions" :zoom_factor="zoom_factor"/>
    </div>
</template>

<script>
import Ball from './Ball.vue'
import Scale from './Scale.vue'
import CO2Ball from '@/assets/physics/co2ball'
import Attractor from '@/assets/physics/attractor'
import Matter from "matter-js"
//import cait_to_json from '@/data_loader'

export default {
    name: 'Diagramm',
    props: {
    },
    components: {
        Ball,
        Scale
    },
    computed: {
        active_tab: function() {
            return this.$store.state.app.activeTab.toLowerCase();
        },
        sectors: function() {
            return this.$store.state.sectors;
        },
        dummy_data() {
            return this.$store.state.data.CAIT;
        },
        center: function() {
            return {x: window.innerWidth/2, y: window.innerHeight/2}
        }
    },
    async mounted() {
        await this.loadData();
        document.getElementById("container").style.left = "0px"; 
        document.getElementById("container").style.transform ="scale(1)";
        document.getElementById("container").style.top = "0px";
        this.run();
    },

    async created() {   
        
    },

    methods: {
        onClickChild(value) {
            //console.log(this.ballObjects)
            if(this.active_tab != 'per sector'){
                if(!(this.balls[value].children_visible)) {
                    this.zoom_in(value);
                }
            }
        },
        zoom_out() {
            this.zoomed_in = false;
            this.zoom_factor = 1;
            this.running = true;
            this.$store.commit('RESET_ACTIVE_SPECIFIC')
            this.balls[this.zoomed_ball_index].toggle_children();
            document.getElementById("container").style.left = "0px";            
            document.getElementById("container").style.transform ="scale(1)";
            document.getElementById("container").style.top = "0px";
            this.balls.forEach(ball => { ball.set_color("black"); })
            this.total_ball.color = "#FFC833";
        },
        zoom_in(index) {
            this.zoomed_in = true;
            this.zoomed_ball_index = index;
            this.running = false;
            this.$store.state.app.activeSpecific = this.balls[index].name;
            let x = this.balls[index].get_pos().x;
            let y = this.balls[index].get_pos().y;
            let d = this.balls[index].get_diameter();
            let target_d = window.innerHeight * 0.5;
            let scale = 0.5 * target_d/d;
            this.zoom_factor = scale;
            document.getElementById("container").style.left= window.innerWidth/2 -(x*scale) + "px";            
            document.getElementById("container").style.transform="scale("+ scale +")";
            document.getElementById("container").style.top= window.innerHeight/2 -(y*scale) + "px";
            this.balls.forEach(ball => { if(ball.children_visible) ball.toggle_children(); })
            this.balls[index].toggle_children();
            this.balls.forEach(ball => { if(!ball.children_visible) ball.set_color("transparent"); })
            this.total_ball.color = "transparent";
        },
        getData(current_balls) {
            let tmp_countries = [];
            let tmp_sectors = [];
            current_balls.forEach(ball => {
                tmp_countries.push(ball.get_json());
                if(ball.children_visible && ball.has_children())
                {
                    let children = ball.get_children_json();
                    children.forEach(child => tmp_sectors.push(child));
                }
            });
            
            this.ballObjects = tmp_countries.concat(tmp_sectors);

            this.total_size = 0;
            let total_emissions = 0;
            tmp_countries.forEach(country => {
                this.total_size += country.size;
                total_emissions += country.emissions;
            });
            this.total_ball.size = this.total_size;
            this.total_ball.emissions = total_emissions;
            this.total_ball.x = (window.innerWidth / 2) - Math.sqrt(this.total_ball.size / Math.PI);
            this.total_ball.y = (window.innerHeight / 2) - Math.sqrt(this.total_ball.size / Math.PI);
        },
        async loadData() {
            /*
            this.country_data = await cait_to_json('../assets/CAIT/total/', 
                                      'cait_total_allGHG.csv',
                                     ['cait_electricity_allGHG.csv',
                                      'cait_transportation_allGHG.csv',
                                      'cait_waste_allGHG.csv',
                                      'cait_agriculture_allGHG.csv'],
                                     ['China', 'United States', 'India', 'Russia', 'Indonesia', 'Brazil', 'Japan', 'Iran', 'Germany']);
                                     */

            
            this.balls = this.json_to_balls(this.dummy_data, this.$store.state.data.population, this.scale);
            this.sector_balls = this.json_to_sector_balls(this.dummy_data, this.scale);
            
            
        },
        run() {
            let engine = Matter.Engine.create();
            let sector_engine = Matter.Engine.create();
            let runner = Matter.Runner.create();
            let attractor = new Attractor(window.innerWidth / 2, window.innerHeight / 2, 1, this.balls.concat(this.sector_balls));

            Matter.Runner.start(runner, engine);
            Matter.Runner.start(runner, sector_engine);
            this.balls.forEach(ball => ball.add_to_world(engine.world));
            this.sector_balls.forEach(ball => ball.add_to_world(sector_engine.world));
            engine.world.gravity.scale = 0; 
            sector_engine.world.gravity.scale = 0; 

            this.prev_tab = this.active_tab;

            
            setInterval(() => {
                if(this.$store.state.app.activeSpecific == '' && this.zoomed_in) {
                    this.zoom_out();
                }
                
                if((this.active_tab != this.prev_tab) && this.running) {
                    if(this.active_tab == 'per sector') {
                        
                        Matter.Runner.start(runner, sector_engine);
                        //Matter.Runner.stop(runner, engine);
                        this.sector_balls.forEach(ball => ball.reset_size());
                    }
                    else if(this.prev_tab == 'per sector') {
                        Matter.Runner.start(runner, engine);
                        Matter.Runner.stop(runner, sector_engine);
                        this.balls.forEach(ball => ball.reset_size());
                    }
                }
                
                switch (this.active_tab){
                    case 'per country':
                        this.global_tab(engine, runner, attractor, false);
                        break;
                    case 'per sector':
                        this.sector_tab(sector_engine, runner, attractor);
                        break;
                    case 'per person':
                        this.global_tab(engine, runner, attractor, true);
                        break;
                    default:
                        this.global_tab(engine, runner, attractor, this.balls, false);
                        break;
                }
                this.prev_running = this.running;
                this.prev_tab = this.active_tab;
            }, 33) 
        },
        
        global_tab(engine, runner, attractor, per_person) {
            let prev_total = 0;
            this.balls.forEach(ball => prev_total += ball.body.target_size);

            let prev_sectors = this.balls[0].emissions_toggles;

            let current_sectors = this.$store.state.sectors

            if(prev_sectors[0] != current_sectors.Energy || prev_sectors[1] != current_sectors.Traffic || prev_sectors[2] != current_sectors.Agriculture || prev_sectors[3] != current_sectors.Others) {
                this.emissions_changed = true;
            }
            
            if(this.prev_running != this.running) {
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
                ball.set_per_person(per_person, prev_total)
                ball.set_categories([this.$store.state.sectors.Energy, 
                                     this.$store.state.sectors.Traffic, 
                                     this.$store.state.sectors.Agriculture, 
                                     this.$store.state.sectors.Others])
                ball.update();
            });

            if(this.emissions_changed) {
                let new_emissions = 0;
                this.balls.forEach(ball => new_emissions += ball.body.target_size);
                let new_probablities = this.co2_to_probabilities((new_emissions /  1000) * 80);
                this.$emit('probabilities_changed', new_probablities);
            }
            this.emissions_changed = false;
            this.getData(this.balls);
        },

        sector_tab(engine, runner, attractor) {
            let prev_total = 0;
            this.sector_balls.forEach(ball => prev_total += ball.body.target_size);

            let prev_sectors = this.balls[0].emissions_toggles;

            let current_sectors = this.$store.state.sectors

            if(prev_sectors[0] != current_sectors.Energy || prev_sectors[1] != current_sectors.Traffic || prev_sectors[2] != current_sectors.Agriculture || prev_sectors[3] != current_sectors.Others) {
                this.emissions_changed = true;
            }
            
            if(this.prev_running != this.running) {
                if(this.running) {
                    Matter.Runner.run(runner, engine);
                }
                else {
                    Matter.Runner.stop(runner);
                }
            }
            
            attractor.pos = {x: window.innerWidth / 2, y: window.innerHeight / 2};
            attractor.attract();
            

            this.sector_balls.forEach(ball => {
                ball.set_categories([this.$store.state.sectors.Energy, 
                                     this.$store.state.sectors.Traffic, 
                                     this.$store.state.sectors.Agriculture, 
                                     this.$store.state.sectors.Others])
                ball.update();
            });

            if(this.emissions_changed) {
                let new_emissions = 0;
                this.sector_balls.forEach(ball => new_emissions += ball.body.target_size);
                let new_probablities = this.co2_to_probabilities((new_emissions /  1000) * 80);
                this.$emit('probabilities_changed', new_probablities);
            }
            this.emissions_changed = false;
            this.getData(this.sector_balls);
        },

        co2_to_probabilities(co2) {
            let probability_table = [0, 17, 33, 50, 67, 83];
            let co2_table = [[1350,  900,  650,  500,  400,  300],
                             [4000, 2300, 1700, 1350, 1150,  900],
                             [5000, 3300, 2500, 2050, 1700, 1400]];

            let indices = [-1, -1, -1];

            for(let i = 0; i < co2_table[0].length; i++)
            {
                for(let j = 0; j < co2_table.length; j++)
                {
                    if(co2_table[j][i] > co2)
                    {
                        indices[j] = i;
                    }
                }
            }

            let probabilities = [0, 0, 0];

            for(let i = 0; i < co2_table.length; i++) {
                if(indices[i] == co2_table[0].length - 1) {
                    probabilities[i] = probability_table[indices[i]].toFixed(1);
                }
                else if(indices[i] == -1) {
                    probabilities[i] = probability_table[0].toFixed(1);
                }
                else {
                    probabilities[i] = ((co2_table[i][indices[i]] - co2) / (co2_table[i][indices[i]] - co2_table[i][indices[i] + 1]) * (probability_table[indices[i] + 1] - probability_table[indices[i]]) + probability_table[indices[i]]).toFixed(1);
                }
            }
            return probabilities;
        },
       
        json_to_balls(countries, population, scale) {
            
            //ordering countries by total co2 emissions
            for(let i = 0; i < countries.length; i++) {
                for(let j = 0; j < countries.length; j++) {
                    if(countries[j].co2_emissions[0] < countries[i].co2_emissions[0]) {
                        let tmp      = countries[j];
                        countries[j] = countries[i];
                        countries[i] = tmp;

                        let tmp2      = population[j];
                        population[j] = population[i];
                        population[i] = tmp2;
                    }
                }
            }
            //placing the balls in a grid pattern
            //let max_size = countries[0].co2_emissions[0];
            //let dist = 4 * Math.sqrt(scale * max_size / Math.PI);

            //let grid_columns = parseInt(Math.sqrt(countries.length));
            //if(countries.length < 5) grid_columns = countries.length;
            //let grid_rows = parseInt(countries.length / 5) + 1;

            let w0 = window.innerWidth / 2;
            let h0 = window.innerHeight / 2;


            let tmp_balls = [];

            console.log(countries[0].export_emissions)

            for(let i = 0; i < countries.length - 0; i++) {
                //console.log(countries[i].name + ": " + countries[i].export_emissions)
                console.log(countries[i])
                tmp_balls.push(new CO2Ball(w0 - 50 + Math.random() * 100, 
                                           h0 - 50 + Math.random() * 100,
                                           countries[i].name,
                                           countries[i].iso,
                                           countries[i].total_emissions,
                                           ['Energy', 'Traffic', 'Agriculture', 'Others'],
                                           countries[i].co2_emissions,
                                           population[i].population,
                                           //countries[i].export_emissions,
                                           scale));
            }
            return tmp_balls;
        },
        json_to_sector_balls(countries, scale){
            //placing the balls in a grid pattern
            let max_size = countries[0].co2_emissions[0];
            let dist = 4 * Math.sqrt(scale * max_size / Math.PI);

            let grid_columns = parseInt(Math.sqrt(countries.length));
            if(countries.length < 5) grid_columns = countries.length;
            let grid_rows = parseInt(countries.length / 5) + 1;

            let w0 = window.innerWidth / 2;
            let h0 = window.innerHeight / 2;

            let tmp_balls = [];

            let sectors = ['Energy', 'Traffic', 'Agriculture', 'Others'];

            let sector_emissions = [0, 0, 0, 0];

            for(let i = 0; i < countries.length; i++) {
                for(let j = 0; j < countries[i].co2_emissions.length; j++) {
                    sector_emissions[j] += countries[i].co2_emissions[j];
                }
            }

            for(let i = 0; i < 4; i++) {
                let current_sector_emissions = [0, 0, 0, 0];
                current_sector_emissions[i] = sector_emissions[i]
                
                tmp_balls.push(new CO2Ball(w0 + dist * (i % grid_columns) - (dist * grid_columns) / 2, 
                                           h0 + dist * parseInt(i / grid_columns) - (dist * grid_rows) / 2,
                                           sectors[i],
                                           sectors[i],
                                           sector_emissions[i],
                                           sectors,
                                           current_sector_emissions,
                                           0,
                                           scale));
            }
            return tmp_balls;
        }
    },

    data() {
        return {
            ballObjects: [],
            balls: [],
            sector_balls: [],
            scale: 4,
            country_data: [],
            total_ball: {
                x: 0,
                y: 0,
                name: "",
                size: 0,
                emissions: 0,
                color: '#FFC833'
            },
            total_emissions: 0,
            running: true,
            prev_sectors: [],
            prev_running: true,
            prev_tab: '',
            emissions_changed: true,
            zoomed_in: false,
            zoomed_ball_index: 0,
            zoom_factor: 1,
            scale_increment: 10000
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