import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_SUFFERS_CRITICAL_HITS
 *
 * 0xE915224DCA36212A

 * 
 * Ped no longer takes critical damage modifiers if set to FALSE.
 * Example: Headshotting a player no longer one shots them. Instead they will take the same damage as a torso shot.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} suffersCriticalHitsFlag
 */
export function setPedSuffersCriticalHits(ped: PedIndex, suffersCriticalHitsFlag: boolean): void {
	const setPedSuffersCriticalHits_result = Citizen.invokeNative<void>('0xE915224DCA36212A', ped, suffersCriticalHitsFlag);
	return setPedSuffersCriticalHits_result;
}