export const optionsParticles = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  background: {
    color: {
      value: "#F404040",
    },
  },
  particles: {
    color: {
      value: "#000000",
    },
    links: {
      color: "#000000",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: undefined,
      enable: true,
      random: true,
      speed: 0.4,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

export const optionsParticlesStar = {
  color: {
    value: "#ffffff",
  },
  lineLinked: {
    enable: false,
  },
  move: {
    bounce: false,
    direction: "none",
    enable: true,
    outMode: "out",
    random: true,
    speed: 0.3,
    straight: false,
  },
  opacity: {
    anim: {
      enable: true,
      minimumValue: 0,
      speed: 1,
      sync: false,
    },
    random: true,
    value: 1,
  },
  shape: {
    type: "circle",
  },
  size: {
    random: true,
    value: 3,
  },
};
