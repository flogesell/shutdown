import Matter from "matter-js"
import Attractor from '@/assets/physics/attractor'

class Ball
{
    constructor(x, y, name, size, scale, color)
    {
        this.name = name;
        this.current_size = size;
        this.target_size = size;
        this.scale = scale;
        this.body = Matter.Bodies.circle(x, y, Math.sqrt(scale * size / Math.PI));
        this.color = color;
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
        this.body = Matter.Bodies.circle(this.body.position.x, this.body.position.x, Math.sqrt(this.scale * 1 / Math.PI))
        this.current_size = 1;
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
        let ease = 0.96;
        let factor = ease + (1 - ease) * ((this.target_size / this.current_size));
        let correction_term = 1 + ((this.current_size / (this.body.area / this.scale) - 1) / 2);

        this.current_size *= factor;

        Matter.Body.scale(this.body, 
                          correction_term + ((factor - 1) / 2), 
                          correction_term + ((factor - 1) / 2));
    }

    get_json()
    {
        return {
            xv:    this.body.position.x - Math.sqrt(this.scale * this.current_size / Math.PI),
            yv:    this.body.position.y - Math.sqrt(this.scale * this.current_size / Math.PI),
            size:  this.current_size * this.scale,
            name:  this.name,
            color: this.color
        }
    }
}
class CO2Ball
{
    constructor(x, y, name, total_emissions, emissions_by_category, scale, world, c_collision_group)
    {
        this.name = name;
        this.total_emissions = total_emissions;
        this.emissions_by_category = emissions_by_category;
        this.emissions_toggles = [];
        emissions_by_category.forEach(() => this.emissions_toggles.push(false));
        this.body = new Ball(x, y, this.name, total_emissions, scale, 'black');
        this.children = [];
        emissions_by_category.forEach(category => this.children.push(new Ball(x, y, "", category, scale, 'grey')));
        this.children_visible = false;
        this.children_attractor = new Attractor(x, y, 10.0, this.children);
        this.c_collision_group = c_collision_group;
        this.engine = Matter.Engine.create();
        this.engine.world.gravity.scale = 0;
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

    add_children_to_world(world)
    {
        this.children.forEach(child => 
        {
            Matter.World.add(world, child);
            child.collisionFilter.group = this.c_collision_group;
        })
    }

    toggle_children()
    {
        this.children_visible = !this.children_visible;

        if(this.children_visible)
        {
            Matter.Runner.run(this.engine);
            this.children.forEach(child => 
            {
                child.reset_size(); 
                child.set_pos({x: this.get_pos().x + 100 * Math.random(), y: this.get_pos().y + 100 * Math.random()})
                child.add_to_world(this.engine.world);
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