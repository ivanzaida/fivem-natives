import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_PLAYBACK_GOING_ON_FOR_VEHICLE
 *
 * 0x050D073F91C5243C

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isPlaybackGoingOnForVehicle(vehicle: VehicleIndex): boolean {
	const isPlaybackGoingOnForVehicle_result = Citizen.invokeNative<boolean>('0x050D073F91C5243C', vehicle);
	return isPlaybackGoingOnForVehicle_result;
}