/**
 * CFX:SET_LIGHT_TYPE
 *
 * 0xCB58679D

 * Change the light type of a already created light.Certain light type needs more configurations to work properly (Like direction, flags or size)
 * 
 * ------------------------------------------------------------------
 * @param {number} lightType The type of light
 */
export function setLightType(lightType: number): void {
	const setLightType_result = Citizen.invokeNative<void>('0xCB58679D', lightType);
	return setLightType_result;
}