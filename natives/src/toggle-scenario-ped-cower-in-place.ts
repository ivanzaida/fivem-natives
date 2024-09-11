import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:TOGGLE_SCENARIO_PED_COWER_IN_PLACE
 *
 * 0x2A3951555E558728

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} start
 */
export function toggleScenarioPedCowerInPlace(ped: PedIndex, start: boolean): void {
	const toggleScenarioPedCowerInPlace_result = Citizen.invokeNative<void>('0x2A3951555E558728', ped, start);
	return toggleScenarioPedCowerInPlace_result;
}