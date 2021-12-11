

import Matter from "matter-js"


var Vector = Matter.Vector,
    Body   = Matter.Body

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
            
            let dist = Vector.sub(this.pos, ball.body.position);
            force = Vector.mult(dist, 0.001 * this.force);
            Body.set(ball.body, 'velocity', Vector.add(ball.body.velocity, force));
        });

        
    }
}

export default Attractor;