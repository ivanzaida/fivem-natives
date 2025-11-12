/**
 * CFX:SET_LIGHT_CONE
 *
 * 0x9FE89EF5

 * Set the inner and outer cone angles of a specified light.
 * 
 * ------------------------------------------------------------------
 * @param {number} innerConeAngle The inner cone angle in degrees
 * @param {number} outerConeAngle The outer cone angle in degrees
 */
export function setLightCone(innerConeAngle: number, outerConeAngle: number): void {
	const setLightCone_result = Citizen.invokeNative<void>('0x9FE89EF5', innerConeAngle, outerConeAngle);
	return setLightCone_result;
}