import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:HIDE_TOMBSTONE
 *
 * 0x8EA0917E9BF68ABF

 * 
 * Disables detachable bumber from domnator4, dominator5, dominator6, see https://gfycat.com/SecondUnluckyGosling
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} hideTombstone
 */
export function hideTombstone(vehicle: VehicleIndex, hideTombstone: boolean): void {
	const hideTombstone_result = Citizen.invokeNative<void>('0x8EA0917E9BF68ABF', vehicle, hideTombstone);
	return hideTombstone_result;
}