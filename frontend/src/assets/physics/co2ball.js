import Matter from "matter-js"

class CO2Ball
{
    constructor(x, y, name, total_emissions, emissions_by_category, scale)
    {
        this.name = name;
        this.total_emissions = total_emissions;
        this.emissions_by_category = emissions_by_category;
        this.emissions_toggles = [];
        emissions_by_category.forEach(() => this.emissions_toggles.push(false));
        this.target_size = total_emissions;
        this.current_size = this.target_size;
        this.scale = scale;
        this.body = Matter.Bodies.circle(x, y, Math.sqrt(scale * this.target_size / Math.PI), {}, 20);
    }

    toggle_emission(index)
    {
        if(index < this.emissions_toggles.length)
        {
            this.emissions_toggles[index] = !this.emissions_toggles[index]
        }
    }

    update()
    {
        this.target_size = this.total_emissions;
        for(let i = 0; i < this.emissions_by_category.length; i++)
        {
            this.target_size -= this.emissions_by_category[i] * this.emissions_toggles[i];
        }
        let ease = 0.9;
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
            xv:   this.body.position.x - Math.sqrt(this.scale * this.current_size / Math.PI),
            yv:   this.body.position.y - Math.sqrt(this.scale * this.current_size / Math.PI),
            size: this.current_size * this.scale,
            name: this.name
        }
    }
}

export default CO2Ball