import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_NO_TIME_DELAY_BEFORE_SHOT
 *
 * 0x80DCC55011762DB5

 * 
 * Removes all time delay from aiming to firing for players.  Use when forcing an aim animation outside the standard set.
 * Must be called every frame.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function setPedNoTimeDelayBeforeShot(ped: PedIndex): void {
	const setPedNoTimeDelayBeforeShot_result = Citizen.invokeNative<void>('0x80DCC55011762DB5', ped);
	return setPedNoTimeDelayBeforeShot_result;
}