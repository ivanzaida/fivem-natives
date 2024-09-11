import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_VEHICLE_HORN_SOUND_INDEX
 *
 * 0x315A149C242011DE

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} hornSound
 */
export function setVehicleHornSoundIndex(vehicle: VehicleIndex, hornSound: number): void {
	const setVehicleHornSoundIndex_result = Citizen.invokeNative<void>('0x315A149C242011DE', vehicle, hornSound);
	return setVehicleHornSoundIndex_result;
}