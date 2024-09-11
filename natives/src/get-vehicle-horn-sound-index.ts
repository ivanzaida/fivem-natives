import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:GET_VEHICLE_HORN_SOUND_INDEX
 *
 * 0xEEDADE9115768A64

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleHornSoundIndex(vehicle: VehicleIndex): number {
	const getVehicleHornSoundIndex_result = Citizen.invokeNative<number>('0xEEDADE9115768A64', vehicle);
	return getVehicleHornSoundIndex_result;
}