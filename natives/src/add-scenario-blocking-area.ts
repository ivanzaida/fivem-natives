import { ScenarioBlockingIndex } from '@ivanzaida/structures'

/**
 * PED:ADD_SCENARIO_BLOCKING_AREA
 *
 * 0xA7B0B03284E7503C

 * 
 * ------------------------------------------------------------------
 * @param {number} minX
 * @param {number} minY
 * @param {number} minZ
 * @param {number} maxX
 * @param {number} maxY
 * @param {number} maxZ
 * @param {boolean} network
 * @param {boolean} cancelActive Should this call cause peds already using points in the specified area to leave their points
 * @param {boolean} blockPeds Does this area affect ped scenarios (either this or bBlockPeds must be TRUE)
 * @param {boolean} blockVehicles Does this area affect vehicle scenarios
 * @returns {ScenarioBlockingIndex}  
 */
export function addScenarioBlockingArea(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number, network: boolean = false, cancelActive: boolean = true, blockPeds: boolean = true, blockVehicles: boolean = true): ScenarioBlockingIndex {
	const addScenarioBlockingArea_result = Citizen.invokeNative<ScenarioBlockingIndex>('0xA7B0B03284E7503C', minX, minY, minZ, maxX, maxY, maxZ, network, cancelActive, blockPeds, blockVehicles);
	return addScenarioBlockingArea_result;
}