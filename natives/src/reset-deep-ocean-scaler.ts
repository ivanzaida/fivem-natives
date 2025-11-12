/**
 * WATER:RESET_DEEP_OCEAN_SCALER
 *
 * 0x1FE002F8F0E4E900

 * 
 * Sets the waves intensity back to original (1.0 in most cases).
 * 
 * 
 * ------------------------------------------------------------------
 */
export function resetDeepOceanScaler(): void {
	const resetDeepOceanScaler_result = Citizen.invokeNative<void>('0x1FE002F8F0E4E900', );
	return resetDeepOceanScaler_result;
}