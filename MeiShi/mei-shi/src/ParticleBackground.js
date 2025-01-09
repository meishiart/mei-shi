import React, { Component } from 'react';
import p5 from 'p5';

class ParticleBackground extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    
    // Make sure zoff is initialized
    this.zoff = 0;
    this.timeScale = 0.0002;
    
    // Bind the method to maintain context
    this.updateFlowField = this.updateFlowField.bind(this);
    this.updateAndDisplayParticles = this.updateAndDisplayParticles.bind(this);
    this.sketch = this.sketch.bind(this);
    
    // Initialize properties
    this.particles = [];
    this.flowField = [];
    this.cols = 0;
    this.rows = 0;
    this.particleCount = 2000;
    this.flowFieldScale = 30;
    
    // Define settings
    this.settings = {
      background: [10, 10, 10],
      flow: {
        baseForce: 0.3,
        turbulence: 0.3,
        upwardBias: 0.2
      },
      particles: {
        size: { min: 1, max: 3 },
        speed: { min: 2, max: 4 },
        primary: [255, 215, 0],     // Gold
        secondary: [255, 248, 220],  // Cream
        tertiary: [218, 165, 32],    // Golden Rod
        alpha: {
          min: 12, 
          max: 55, 
        },
      }
    };
  }

  sketch = (p) => {
    // Store reference to component's settings and properties
    const settings = this.settings;
    const flowFieldScale = this.flowFieldScale;
    const particles = this.particles;
    const flowField = this.flowField;
    let cols = this.cols;
    let rows = this.rows;

    class Particle {
      constructor(settings) {
        this.settings = settings;
        this.p5 = p;
        this.init();
      }
      
      init() {
        this.pos = this.p5.createVector(
          this.p5.random(this.p5.width), 
          this.p5.random(this.p5.height)
        );
        this.vel = this.p5.createVector(0, -this.p5.random(0.1, 0.5));
        this.acc = this.p5.createVector(0, 0);
        this.size = this.p5.random(this.settings.particles.size.min, this.settings.particles.size.max);
        this.maxSpeed = this.p5.random(this.settings.particles.speed.min, this.settings.particles.speed.max);
        this.alpha = this.p5.random(this.settings.particles.alpha.min, this.settings.particles.alpha.max);
        this.color = this.getColor();
        this.lifespan = this.p5.random(200, 255);
        this.originalLifespan = this.lifespan;
      }

      getColor() {
        const colors = [
          this.settings.particles.primary,
          this.settings.particles.secondary,
          this.settings.particles.tertiary
        ];
        return this.p5.random(colors);
      }

      update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.lifespan -= 0.7;
        
        if (this.isDead()) {
          this.init();
        }
      }

      display() {
        this.p5.noStroke();
        const alpha = (this.lifespan / this.originalLifespan) * this.alpha;
        this.p5.fill(this.color[0], this.color[1], this.color[2], alpha);
        this.p5.ellipse(this.pos.x, this.pos.y, this.size);
      }

      isDead() {
        return (
          this.lifespan < 0 ||
          this.pos.y < -10 ||
          this.pos.x < -10 ||
          this.pos.x > this.p5.width + 10
        );
      }

      applyForce(force) {
        this.acc.add(force);
      }

      follow(flowField) {
        let x = this.p5.floor(this.pos.x / this.settings.flowFieldScale);
        let y = this.p5.floor(this.pos.y / this.settings.flowFieldScale);
        let index = x + y * this.cols;
        
        if (flowField[index]) {
          let force = flowField[index].copy();
          this.applyForce(force);
        }
      }
    }

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      p.pixelDensity(2);
      p.colorMode(p.RGB, 255, 255, 255, 255);

      this.cols = p.floor(p.width / flowFieldScale);
      this.rows = p.floor(p.height / flowFieldScale);
      this.flowField = new Array(this.cols * this.rows);
      
      // Initialize particles with settings
      for (let i = 0; i < this.particleCount; i++) {
        particles.push(new Particle(settings));
      }
      
      p.background(settings.background);
    };

    p.draw = () => {
      p.fill(settings.background[0], settings.background[1], settings.background[2], 12);
      p.noStroke();
      p.rect(0, 0, p.width, p.height);
      
      this.updateFlowField(p);
      this.updateAndDisplayParticles(p);
    };

    p.windowResized = () => {
      // Store the current background color
      // const bgColord = settings.background;
      
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      cols = p.floor(p.width / flowFieldScale);
      rows = p.floor(p.height / flowFieldScale);
      this.flowField = new Array(cols * rows);
      
      // // Use the stored background color
      // if (Array.isArray(bgColor)) {
      //   p.background(bgColor[0], bgColor[1], bgColor[2]);
      // } else {
      //   p.background(0); // fallback to black if background color is undefined
      // }
    };

  //   p.mouseMoved = () => {
  //     const mouseStrength = 0.1;
  //     this.particles.forEach(particle => {
  //       const d = p.dist(p.mouseX, p.mouseY, particle.pos.x, particle.pos.y);
  //       if (d < 100) {
  //         const force = p.createVector(
  //           particle.pos.x - p.mouseX,
  //           particle.pos.y - p.mouseY
  //         );
  //         force.setMag(mouseStrength);
  //         particle.applyForce(force);
        // }
      // });
    // };
  };

  updateFlowField = (p) => {
    let yoff = 0;
    for (let y = 0; y < this.rows; y++) {
      let xoff = 0;
      for (let x = 0; x < this.cols; x++) {
        const index = x + y * this.cols;
        
        // Use this.zoff instead of zoff
        const angle = p.noise(
          xoff * this.settings.flow.noiseScale, 
          yoff * this.settings.flow.noiseScale, 
          this.zoff
        ) * p.TWO_PI * 2;
        
        // Add upward bias
        const upwardBias = this.settings.flow.upwardBias;
        const finalAngle = p.lerp(angle, -p.PI/2, upwardBias);
        
        const v = p.createVector(p.cos(finalAngle), p.sin(finalAngle));
        v.setMag(this.settings.flow.baseForce);
        
        this.flowField[index] = v;
        xoff += 1;
      }
      yoff += 1;
    }
    this.zoff += this.timeScale;  // Make sure we're using this.zoff
  };

  updateAndDisplayParticles = (p) => {
    p.blendMode(p.ADD);
    this.particles.forEach(particle => {
      particle.follow(this.flowField);
      particle.update(p);
      particle.display(p);
    });
    p.blendMode(p.NORMAL);
  };

  componentDidMount() {
    if (this.myRef.current) {
      this.myP5 = new p5(this.sketch, this.myRef.current);
    }
  }

  componentWillUnmount() {
    if (this.myP5) {
      this.myP5.remove();
    }
  }

  render() {
    return (
      <div
        ref={this.myRef}
        style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}
      />
    );
  }
}

export default ParticleBackground;