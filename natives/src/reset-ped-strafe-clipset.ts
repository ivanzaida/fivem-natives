import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:RESET_PED_STRAFE_CLIPSET
 *
 * 0x529EC998DD2C51F8

 * 
 * Resets the strafe clipset to the default for the ped type.
 * The default strafe clipset is defined in peds.meta under <StrafeClipSet>
 * DON'T FORGET to unstream the clipset if no longer needed
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function resetPedStrafeClipset(ped: PedIndex): void {
	const resetPedStrafeClipset_result = Citizen.invokeNative<void>('0x529EC998DD2C51F8', ped);
	return resetPedStrafeClipset_result;
}