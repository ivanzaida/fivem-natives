/**
 * GRAPHICS:OVERRIDE_NIGHTVISION_LIGHT_RANGE
 *
 * 0x23F669E51BF7ABC7

 * 
 * ------------------------------------------------------------------
 * @param {number} range
 */
export function overrideNightvisionLightRange(range: number): void {
	const overrideNightvisionLightRange_result = Citizen.invokeNative<void>('0x23F669E51BF7ABC7', range);
	return overrideNightvisionLightRange_result;
}