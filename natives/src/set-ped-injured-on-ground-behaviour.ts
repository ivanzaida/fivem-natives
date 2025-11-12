import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_INJURED_ON_GROUND_BEHAVIOUR
 *
 * 0x7D6A73BC9D136D34

 * 
 * Use this to force the ped to use the injured on ground nm behaviour when he dies (note, a headshot will still override this currently).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} duration
 */
export function setPedInjuredOnGroundBehaviour(ped: PedIndex, duration: number): void {
	const setPedInjuredOnGroundBehaviour_result = Citizen.invokeNative<void>('0x7D6A73BC9D136D34', ped, duration);
	return setPedInjuredOnGroundBehaviour_result;
}