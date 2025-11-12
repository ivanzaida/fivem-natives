/**
 * WATER:SET_DEEP_OCEAN_SCALER
 *
 * 0x1F28B185E40612B5

 * 
 * Sets a value that determines how aggressive the ocean waves will be. Values of 2.0 or more make for very aggressive waves like you see during a thunderstorm.
 * 
 * Works only ~200 meters around the player.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} scaler
 */
export function setDeepOceanScaler(scaler: number): void {
	const setDeepOceanScaler_result = Citizen.invokeNative<void>('0x1F28B185E40612B5', scaler);
	return setDeepOceanScaler_result;
}