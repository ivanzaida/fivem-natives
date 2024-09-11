import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_USING_ANY_SCENARIO
 *
 * 0x5110BDFA9CB51F2B

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedUsingAnyScenario(ped: PedIndex): boolean {
	const isPedUsingAnyScenario_result = Citizen.invokeNative<boolean>('0x5110BDFA9CB51F2B', ped);
	return isPedUsingAnyScenario_result;
}