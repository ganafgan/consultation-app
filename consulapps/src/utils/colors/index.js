const mainColors = {
    green1: '#1280fe',
    green2: '#BFFBF8',
    dark1: '#112340',
    dark2: '#495A75',
    dark3: '#8092AF',
    grey1: '#7D8797',
    grey2: '#F5F5F5',
    grey3: '#EDEEF0',
    grey4: '#B1B7C2',
    blue1: '#66e4de',
    blue2: '#008BCA',
    black1: '#000000',
    black2: 'rgba(0, 0, 0, 0.5)',
    red1: '#E06379',
    white: '#FFFFFF'
}

export const colors = {
    primary : mainColors.green1,
    secondary : mainColors.dark1,
    tertiary: mainColors.blue1,
    white : 'white',
    black : 'black',
    disable: mainColors.grey3,
    text : {
        primary : mainColors.dark1,
        secondary : mainColors.grey1,
        menuInactive : mainColors.grey4,
        menuActive : mainColors.green1,
        subTitle: mainColors.dark3
    },
    button : {
        primary : {
            background : mainColors.green1,
            text : 'white'
        },
        secondary : {
            background : 'white',
            text : mainColors.dark1
        },
        disable: {
            background: mainColors.grey3,
            text: mainColors.grey4
        }
    },
    border : mainColors.grey2,
    cardLight: mainColors.green2,
    LoadingBackground: mainColors.black2,
    error: mainColors.red1
}

