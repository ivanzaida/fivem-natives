/**
 * CFX:RESET_WATER
 *
 * 0X1DA4791

 * Resets the water to the games default water.xml.
 * 
 * ------------------------------------------------------------------
 */
export function resetWater(): void {
	const resetWater_result = Citizen.invokeNative<void>('0X1DA4791', );
	return resetWater_result;
}