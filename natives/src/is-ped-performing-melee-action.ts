import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_PERFORMING_MELEE_ACTION
 *
 * 0xB73833BDAAE31047

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedPerformingMeleeAction(ped: PedIndex): boolean {
	const isPedPerformingMeleeAction_result = Citizen.invokeNative<boolean>('0xB73833BDAAE31047', ped);
	return isPedPerformingMeleeAction_result;
}