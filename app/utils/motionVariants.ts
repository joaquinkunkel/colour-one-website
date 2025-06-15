export const viewportOnce = {
  once: true,
};

export const contentParentVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut" as const,
      staggerChildren: 0.1,
      delay: 0.15,
    },
  },
};

export const contentVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut" as const,
    },
  },
};

export const teamListVariants = {
  hidden: {
    y: 12,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  },
};

export const menuButtonVariants = {
  expanded: {
    opacity: 0,
    x: -10,
    pointerEvents: "none",
    scale: 0.8,
    width: 120,
    zIndex: 100,
    display: "none",
    transition: {
      duration: 0,
      ease: "easeInOut" as const,
    },
  },
  collapsed: {
    display: "block",
    opacity: 1,
    pointerEvents: "auto",
    scale: 1,
    width: 120,
    zIndex: 0,
    transition: {
      duration: 0,
      ease: "easeInOut" as const,
    },
  },
};

export const mobileMenuButtonVariants = {
  expanded: {
    opacity: 0,
    y: -10,
    pointerEvents: "none",
    scale: 0.8,
    width: 120,
    zIndex: 100,
    display: "none",
    transition: {
      duration: 0,
      ease: "easeInOut" as const,
    },
  },
  collapsed: {
    display: "block",
    opacity: 1,
    pointerEvents: "auto",
    scale: 1,
    width: 120,
    zIndex: 0,
    transition: {
      duration: 0,
      ease: "easeInOut" as const,
    },
  },
};

export const expandedMenuVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut" as const,
      staggerChildren: 0.05,
    },
  },
};

export const mobileExpandedMenuVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut" as const,
      staggerChildren: 0.1,
    },
  },
};

export const navItemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
    pointerEvents: "none",
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    pointerEvents: "auto",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export const mobileNavItemVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    pointerEvents: "none",
    transition: {
      duration: 0,
      ease: "easeInOut" as const,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    pointerEvents: "auto",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export const collapseButtonVariants = {
  collapsed: {
    opacity: 0,
    x: -20,
    width: 120,
    display: "none",
    pointerEvents: "none",
    transition: {
      duration: 0,
      ease: "easeInOut" as const,
    },
  },
  expanded: {
    opacity: 1,
    x: 0,
    width: 120,
    display: "block",
    pointerEvents: "auto",
    transition: {
      duration: 0,
      ease: "easeOut" as const,
    },
  },
};

export const mobileCollapseButtonVariants = {
  collapsed: {
    opacity: 0,
    y: -20,
    width: 120,
    display: "none",
    pointerEvents: "none",
    transition: {
      duration: 0,
      ease: "easeInOut" as const,
    },
  },
  expanded: {
    opacity: 1,
    y: 0,
    width: 120,
    display: "block",
    pointerEvents: "auto",
    transition: {
      duration: 0,
      ease: "easeOut" as const,
    },
  },
};

export const colourOneButtonVariants = {
  hidden: {
    opacity: 0,
    x: 20,
    pointerEvents: "none",

    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
  visible: {
    opacity: 1,
    x: -10,
    pointerEvents: "auto",
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
};

export const searchButtonVariants = {
  hidden: {
    opacity: 0,
    x: 20,
    pointerEvents: "none",

    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    pointerEvents: "auto",

    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
};

export const mobileNavWrapperVariants = {
  expanded: {
    height: "100vh",
    background: 'var(--color-background-60)',
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
  collapsed: {
    height: "80px",
    transition: {
      duration: 0,
      ease: "easeOut" as const,
    },
  },
};