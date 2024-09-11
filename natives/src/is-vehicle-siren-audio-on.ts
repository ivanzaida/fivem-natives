import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_SIREN_AUDIO_ON
 *
 * 0xE21E573B1795892D

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleSirenAudioOn(vehicle: VehicleIndex): boolean {
	const isVehicleSirenAudioOn_result = Citizen.invokeNative<boolean>('0xE21E573B1795892D', vehicle);
	return isVehicleSirenAudioOn_result;
}