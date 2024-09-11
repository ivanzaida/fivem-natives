import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:FORCE_PED_TO_OPEN_PARACHUTE
 *
 * 0x5A816292AD6929DF

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function forcePedToOpenParachute(ped: PedIndex): void {
	const forcePedToOpenParachute_result = Citizen.invokeNative<void>('0x5A816292AD6929DF', ped);
	return forcePedToOpenParachute_result;
}