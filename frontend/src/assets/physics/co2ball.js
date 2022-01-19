import Matter from "matter-js"
import Attractor from '@/assets/physics/attractor'

class Ball
{
    constructor(x, y, name, iso, size, scale, color)
    {
        this.name = name;
        this.iso = iso;
        this.initial_pos = {x: x, y: y};
        this.current_size = 10;
        this.target_size = size;
        this.scale = scale;
        this.body = Matter.Bodies.circle(x, y, Math.sqrt(scale * size / Math.PI));
        Matter.Body.set(this.body, "frictionAir", 0.03)
        Matter.Body.set(this.body, "friction", 0.0) 
        this.color = color;
        this.current_color = color;
        this.world;
    } 

    set_collision_group(group)
    {
        this.body.collisionFilter.group = group;
        this.body.collisionFilter.mask = group;
    }

    add_to_world(world)
    {
        this.world = world;
        Matter.World.add(world, this.body);
    }

    remove_from_world(world)
    {
        Matter.World.remove(world, this.body);
    }

    add_velocity(val)
    {
        Matter.Body.set(this.body, 'velocity', Matter.Vector.add(this.body.velocity, val));
    }

    reset_size()
    {
        //let position = this.body.position;
        Matter.World.remove(this.world, this.body);
        this.body = Matter.Bodies.circle(window.innerWidth / 2 - 50 + 100 * Math.random(), 
                                         window.innerHeight / 2 - 50 + 100 * Math.random(), 
                                         Math.sqrt(this.scale * 10 / Math.PI))
        Matter.World.add(this.world, this.body);
        this.current_size = 10;
    }

    set_size(size)
    {
        this.target_size = size;
    }

    set_pos(new_pos)
    {
        Matter.Body.set(this.body, 'position', new_pos);
    }

    get_pos()
    {
        return {x: this.body.position.x, y: this.body.position.y}
    }

    update()
    {
        let ease = 0.92;

        let factor = ease + (1 - ease) * ((this.target_size / this.current_size));
        factor = 1 + (factor - 1) * 2;
        if(factor - 1 > 1) factor = 2;
        let correction_term = 1 + ((this.current_size / (this.body.area / this.scale) - 1) / 2);

        let next_size = this.current_size * factor;
        

        if(next_size < 5) 
        {
            this.current_color = 'transparent';
            //Matter.Body.setPosition(this.body, this.initial_pos)
        }
        else 
        {
            this.current_size *= factor;
            this.current_color = this.color;
            Matter.Body.scale(this.body, 
                              correction_term + ((factor - 1) / 2), 
                              correction_term + ((factor - 1) / 2));
        }

    }

    get_json()
    {
        return {
            xv:    this.body.position.x - Math.sqrt(this.scale * this.current_size / Math.PI),
            yv:    this.body.position.y - Math.sqrt(this.scale * this.current_size / Math.PI),
            size:  this.current_size * this.scale,
            name:  this.name,
            iso:   this.iso,
            color: this.current_color,
            emissions: this.current_size * (this.current_size > 20)
        }
    }
}
class CO2Ball
{
    constructor(x, y, name, iso, total_emissions, sector_names, emissions_by_category, population, export_emissions, scale)
    {
        this.name = name;
        this.iso = iso;
        this.total_emissions = total_emissions;
        this.emissions_by_category = emissions_by_category;
        this.emissions_toggles = [];
        emissions_by_category.forEach(() => this.emissions_toggles.push(false));
        this.body = new Ball(x, y, this.name, iso, total_emissions, scale, 'black');
        this.children = [];
        //emissions_by_category.forEach(category => this.children.push(new Ball(x, y, "", '', category, scale, 'grey')));
        
        if(this.population != 0)
        {
            for(let i = 0; i < emissions_by_category.length; i++) 
            {
                this.children.push(new Ball(x, y, sector_names[i], '', emissions_by_category[i], scale, 'grey'));
            }
        }
        
        this.children_visible = false;
        this.children_attractor = new Attractor(x, y, 5.0, this.children);
        this.engine = Matter.Engine.create();
        this.engine.world.gravity.scale = 0;
        this.population = population;
        this.world_population = 7673.0;
        this.per_person = false;
        this.global_emissions = 0;
        this.export_emissions = export_emissions;
        this.export = false;
    }

    set_scale(val)
    {
        this.body.scale = val;
        this.children.forEach(child => child.body.scale = val);
    }

    reset_size()
    {
        this.body.reset_size();
    }

    get_scale()
    {
        return this.body.scale;
    }

    set_color(color)
    {
        this.body.color = color;
    }

    get_diameter()
    {
        return Math.sqrt(this.body.scale * this.body.current_size / Math.PI);
    }

    set_per_person(val, global_emissions)
    {
        this.global_emissions = global_emissions;
        this.per_person = val;
        if(val)
        {
            for(let i = 0; i < this.children.length; i++)
            {
                this.children[i].set_size((this.emissions_by_category[i] / this.population) * (this.world_population / 15));
            }
        }
        else
        {
            for(let i = 0; i < this.children.length; i++)
            {
                this.children[i].set_size(this.emissions_by_category[i]);
            }
        }
    }

    set_export(val)
    {
        this.export = val;
    }

    add_to_world(world)
    {
        this.body.add_to_world(world);
        
        /*
        this.children.forEach(child => 
        {
            child.add_to_world(world);
            child.set_collision_group(this.c_collision_group);
        })
        */
    }
    
    remove_from_world(world)
    {
        this.body.remove_from_world(world);
    }
    toggle_emission(index)
    {
        if(index < this.emissions_toggles.length)
        {
            this.emissions_toggles[index] = !this.emissions_toggles[index];
        }
        let new_size = this.total_emissions;
        for(let i = 0; i < this.emissions_by_category.length; i++)
        {
            new_size -= this.emissions_by_category[i] * this.emissions_toggles[i];
        }
        
        this.body.set_size(new_size);
    }


    set_categories(categories)
    {
        for(let i = 0; i < categories.length; i++)
        {
            this.emissions_toggles[i] = categories[i];
            this.children[i].target_size = this.emissions_by_category[i] * categories[i] + 1;
            if(this.per_person)
            {
                this.children[i].target_size = (this.children[i].target_size / this.population) * (this.world_population / 15);
            }
        }
    }

    add_children_to_world(world)
    {
        this.children.forEach(child => 
        {
            Matter.World.add(world, child);
            child.collisionFilter.group = this.c_collision_group;
        })
    }

    has_children()
    {
        return (this.children.length > 0);
    }

    toggle_children()
    {
        this.children_visible = !this.children_visible;

        if(this.children_visible)
        {
            Matter.Runner.run(this.engine);
            this.children.forEach(child => 
            {
                child.add_to_world(this.engine.world);
                child.reset_size(); 
                child.set_pos({x: this.get_pos().x - 50 + 100 * Math.random(), y: this.get_pos().y - 50 + 100 * Math.random()})
            })
        } 
        else
        {
            Matter.Runner.stop(this.engine);
            this.children.forEach(child => child.remove_from_world(this.engine.world))
        }
    }

    add_velocity(vel) { this.body.add_velocity(vel) }

    get_pos() { return this.body.get_pos() }

    update() 
    { 
        this.body.target_size = this.total_emissions;
        for (let i = 0; i < this.emissions_toggles.length; i++)
        {
            this.body.target_size -= this.emissions_by_category[i] * !this.emissions_toggles[i];
        }

        if(this.per_person)
        {
            //world_population / 15 is provisional, should be global emissions / number of countries
            this.body.target_size = (this.body.target_size / this.population) * (this.world_population / 15);
        }
        
        if(this.export)
        {
            this.body.target_size += (this.body.target_size * this.export_emissions) / 100;
        }
        

        this.body.update();

        if(this.children_visible)
        {
            this.children_attractor.pos = this.body.get_pos();
            this.children_attractor.attract();
            this.children.forEach(child => child.update());
        }
    } 


    get_json()
    {
        return this.body.get_json();
    }

    get_children_json()
    {
        let json = [];
        this.children.forEach(child => json.push(child.get_json()));
        return json;
    }
}

export default CO2Ball