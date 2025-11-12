/**
 * TASK:SET_GLOBAL_MIN_BIRD_FLIGHT_HEIGHT
 *
 * 0x78081A114400EA30

 * 
 * Needs to be looped! And yes, it does work and is not a hash collision.
 * Birds will try to reach the given height.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} height
 */
export function setGlobalMinBirdFlightHeight(height: number): void {
	const setGlobalMinBirdFlightHeight_result = Citizen.invokeNative<void>('0x78081A114400EA30', height);
	return setGlobalMinBirdFlightHeight_result;
}