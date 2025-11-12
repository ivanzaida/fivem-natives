import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_PROP_LIGHT_COLOR
 *
 * 0x53AEF1FECF5138CF

 * 
 * If enable=TRUE, then overrides light color with (red,green,blue);
 * If enable=FALSE, then disables color override (so light's original color is used)
 * returns TRUE on success (light(s) attached to object were found and set to a new color), otherwise FALSE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {boolean} enable
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @returns {boolean}  
 */
export function setPropLightColor(object: ObjectIndex, enable: boolean, red: number, green: number, blue: number): boolean {
	const setPropLightColor_result = Citizen.invokeNative<boolean>('0x53AEF1FECF5138CF', object, enable, red, green, blue);
	return setPropLightColor_result;
}