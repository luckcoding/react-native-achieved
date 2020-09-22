export const shadow = {
  outline: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: '#000000',
    shadowOpacity: 0.35,
    shadowRadius: 2,
    elevation: 4,
  },
  panel: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#002875',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 4,
  },
  hover: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#002975',
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  popup: {
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: '#002875',
    shadowOpacity: 0.1,
    shadowRadius: 25,
    elevation: 1,
  },
};

export type Shadow = keyof typeof shadow;
