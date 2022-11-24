

import Matter from "matter-js"


var Vector = Matter.Vector

class Attractor
{
    constructor(x, y, force, balls)
    {
        this.pos = Vector.create(x, y);
        this.force = force;
        this.balls = balls; 
    }

    attract()
    {
        let force = Vector.create(0, 0);
        
        this.balls.forEach(ball => {
            let dist = Vector.sub(this.pos, ball.get_pos());
            force = Vector.mult(dist, 0.001 * this.force);
            ball.add_velocity(force);
        });
    }
}

export default Attractor;