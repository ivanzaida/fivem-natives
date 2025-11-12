/**
 * CFX:SET_LIGHT_COLOR
 *
 * 0x65FE5132

 * Set the color of a specified light.
 * 
 * ------------------------------------------------------------------
 * @param {number} r Red color component (0255)
 * @param {number} g Green color component (0255)
 * @param {number} b Blue color component (0255)
 */
export function setLightColor(r: number, g: number, b: number): void {
	const setLightColor_result = Citizen.invokeNative<void>('0x65FE5132', r, g, b);
	return setLightColor_result;
}