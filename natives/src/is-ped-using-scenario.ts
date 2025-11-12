import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_USING_SCENARIO
 *
 * 0x282B0289FBD3C119

 * 
 * Full list of ped scenarios by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/scenariosCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} szScenario
 * @returns {boolean}  
 */
export function isPedUsingScenario(ped: PedIndex, szScenario: string): boolean {
	const isPedUsingScenario_result = Citizen.invokeNative<boolean>('0x282B0289FBD3C119', ped, szScenario);
	return isPedUsingScenario_result;
}