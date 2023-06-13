export type theme = {
  colors: {
    primary: {
      low: string;
      medium: string;
      high: string;

      contentOfLow: string;
      contentOfMedium: string;
      contentOfHigh: string;
    };

    secondary: {
      low: string;
      medium: string;
      high: string;

      contentOfLow: string;
      contentOfMedium: string;
      contentOfHigh: string;
    };

    background: {
      low: string;
      medium: string;
      high: string;

      contentOfLow: string;
      contentOfMedium: string;
      contentOfHigh: string;
    };

    shadow: {
      default: string;
      contentOfDefault: string;
    };

    transparent: {
      default: string;
      contentOfDefault: string;
    };

    attention: {
      success: string;
      warning: string;
      danger: string;

      contentOfSuccess: string;
      contentOfWarning: string;
      contentOfDanger: string;
    };

    text: {
      low: string;
    };
  };
  sizes: {
    font12: number;
    font14: number;
    font16: number;
    font18: number;
    font24: number;
    font100: number;
    height40: number;
    info: number;
    description: number;
    subTitle: number;
    title: number;
    iconFilter: number;
    arrow: number;
    arrow30: number;
    heightTabBar: number;
    logoHeight: number;
    heightTextAreaField: number;
  };
};
