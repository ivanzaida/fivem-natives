import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CLEAR_PED_STORED_HAT_PROP
 *
 * 0x8452AC966C087132

 * 
 * Clears the ped's stored hat prop (cached when removing the hat when entering a vehicle, usually restored when getting out)
 * If this is called when in a vehicle, the stored hat prop will not get reapplied upon exit
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearPedStoredHatProp(ped: PedIndex): void {
	const clearPedStoredHatProp_result = Citizen.invokeNative<void>('0x8452AC966C087132', ped);
	return clearPedStoredHatProp_result;
}