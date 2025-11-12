import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_FORKLIFT_FORK_HEIGHT
 *
 * 0x0D0DE7C657057F36

 * 
 * 0.0 = Lowest 1.0 = Highest. This is best to be used if you wanna pick-up a car since un-realistically on GTA V forklifts can't pick up much of anything due to vehicle mass. If you put this under a car then set it above 0.0 to a 'lifted-value' it will raise the car with no issue lol
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} forklift
 * @param {number} forkHeight
 */
export function setForkliftForkHeight(forklift: VehicleIndex, forkHeight: number): void {
	const setForkliftForkHeight_result = Citizen.invokeNative<void>('0x0D0DE7C657057F36', forklift, forkHeight);
	return setForkliftForkHeight_result;
}