import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:TRIGGER_PED_SCENARIO_PANICEXITTOFLEE
 *
 * 0xD4DE27DF3E2EBFF4

 * 
 * Causes a ped to perform a specific scenario action.  DEPRECATED EXCEPT FOR USE IN DEBUGGING!
 * DO NOT USE IN GAME SCRIPTS!
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} dangerPositionX
 * @param {number} dangerPositionY
 * @param {number} dangerPositionZ
 * @returns {boolean}  
 */
export function triggerPedScenarioPanicexittoflee(ped: PedIndex, dangerPositionX: number, dangerPositionY: number, dangerPositionZ: number): boolean {
	const triggerPedScenarioPanicexittoflee_result = Citizen.invokeNative<boolean>('0xD4DE27DF3E2EBFF4', ped, dangerPositionX, dangerPositionY, dangerPositionZ);
	return triggerPedScenarioPanicexittoflee_result;
}