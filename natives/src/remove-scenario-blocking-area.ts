import { ScenarioBlockingIndex } from '@ivanzaida/structures'

/**
 * PED:REMOVE_SCENARIO_BLOCKING_AREA
 *
 * 0xD7B6A43ACC36D868

 * 
 * ------------------------------------------------------------------
 * @param {ScenarioBlockingIndex} scenarioBlocking
 * @param {boolean} network
 */
export function removeScenarioBlockingArea(scenarioBlocking: ScenarioBlockingIndex, network: boolean = false): void {
	const removeScenarioBlockingArea_result = Citizen.invokeNative<void>('0xD7B6A43ACC36D868', scenarioBlocking, network);
	return removeScenarioBlockingArea_result;
}