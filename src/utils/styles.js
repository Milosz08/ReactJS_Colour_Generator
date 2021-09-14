/**
 * @file styles.js
 * @author Miłosz Gilga (gilgamilosz451@gmail.com | milogil757@student.polsl.pl)
 * @brief JavaScript React Styled Components file.
 *
 * @project "react-colour-generator"
 * @version "^0.1.0"
 *
 * @date 09/14/2021
 */

/**
 * Constants defined for React Styled Component.
 * @type { object }
 */
const THEME = {

    //Background gradient configuration
    BACKGROUND_GRADIENT: `linear-gradient(45deg, #00C4C4, #632EB8)`,

    //Colors
    WHITE_COLOUR: '#ffffff',
    BLACK_COLOUR: '#212121',
    GRAY_COLOUR: '#d0d0d0',
    LIGHTGRAY_COLOUR: '#f4f5f7',
    GRAY_TINT_COLOUR: '#ecebeb',
    DARKGRAY_COLOUR: '#898989',
    TEXT_COLOUR: '#535353',
    PURPLE_COLOUR: '#5e72e4',
    DARK_PURPLE_COLOUR: '#4451a8',
    RED_COLOUR: '#7c2121',
    GREEN_COLOUR: '#15581b',
    BLUE_COLOUR: '#0c34b6',

    //Misc
    BORDER_RADIUS: '5px',
    BOX_SHADOW: '2px 2px 5px 0 rgba(0, 0, 0, .2)',

    BUTTONS_BOX_SHADOW: 'rgb(50 50 93 / 11%) 0 4px 6px, rgb(0 0 0 / 8%) 0 1px 3px;',
    MODAL_BOX_SHADOW: 'rgb(0 0 0 / 40%) 0 0 10px 0',

    BUTTON_MODES: {
        LIGHT: 'light',
        DARK: 'dark'
    }

};

export default THEME;