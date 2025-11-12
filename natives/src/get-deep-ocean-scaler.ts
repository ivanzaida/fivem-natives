/**
 * WATER:GET_DEEP_OCEAN_SCALER
 *
 * 0x13AC55E5C01A1052

 * 
 * Gets the aggressiveness factor of the ocean waves.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getDeepOceanScaler(): number {
	const getDeepOceanScaler_result = Citizen.invokeNative<number>('0x13AC55E5C01A1052', );
	return getDeepOceanScaler_result;
}