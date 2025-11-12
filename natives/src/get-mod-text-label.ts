import { VehicleIndex, EModType } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_MOD_TEXT_LABEL
 *
 * 0x1340575A0EEE0622

 * 
 * Returns the text label of a mod type for a given vehicle
 * 
 * Use GET_FILENAME_FOR_AUDIO_CONVERSATION to get the part name in the game's language
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EModType} modSlot
 * @param {number} mod
 * @returns {string}  
 */
export function getModTextLabel(vehicle: VehicleIndex, modSlot: EModType | number, mod: number): string {
	const getModTextLabel_result = Citizen.invokeNative<string>('0x1340575A0EEE0622', vehicle, modSlot, mod);
	return getModTextLabel_result;
}