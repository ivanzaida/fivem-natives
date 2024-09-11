/**
 * CFX:SET_MODEL_HEADLIGHT_CONFIGURATION
 *
 * 0X7F6B8D75

 * This native is deprecated and does nothing!
 * 
 * ------------------------------------------------------------------
 * @param {number} modelHash
 * @param {number} ratePerSecond
 * @param {number} headlightRotation
 * @param {boolean} invertRotation
 */
export function setModelHeadlightConfiguration(modelHash: number, ratePerSecond: number, headlightRotation: number, invertRotation: boolean): void {
	const setModelHeadlightConfiguration_result = Citizen.invokeNative<void>('0X7F6B8D75', modelHash, ratePerSecond, headlightRotation, invertRotation);
	return setModelHeadlightConfiguration_result;
}