import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:RESET_PED_LAST_VEHICLE
 *
 * 0x61BB4B7411E1DF82

 * 
 * Resets the value for the last vehicle driven by the Ped.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function resetPedLastVehicle(ped: PedIndex): void {
	const resetPedLastVehicle_result = Citizen.invokeNative<void>('0x61BB4B7411E1DF82', ped);
	return resetPedLastVehicle_result;
}