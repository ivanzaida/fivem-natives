import { PedIndex } from '@ivanzaida/structures'

/**
 * HUD:REMOVE_COP_BLIP_FROM_PED
 *
 * 0xC0FC6E3E1A8FBF31

 * 
 * Interesting fact: A hash collision for this is RESET_JETPACK_MODEL_SETTINGS
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function removeCopBlipFromPed(ped: PedIndex): void {
	const removeCopBlipFromPed_result = Citizen.invokeNative<void>('0xC0FC6E3E1A8FBF31', ped);
	return removeCopBlipFromPed_result;
}