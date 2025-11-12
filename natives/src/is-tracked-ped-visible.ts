import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_TRACKED_PED_VISIBLE
 *
 * 0x731EE2A006FD5120

 * 
 * Test for a ped visibility using hardware visibility tracking
 * 
 * returns whether or not a ped is visible within your FOV, not this check auto's to false after a certain distance.
 * 
 * 
 * Target needs to be tracked.. won't work otherwise.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isTrackedPedVisible(ped: PedIndex): boolean {
	const isTrackedPedVisible_result = Citizen.invokeNative<boolean>('0x731EE2A006FD5120', ped);
	return isTrackedPedVisible_result;
}