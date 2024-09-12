import { PedIndex, EPedType } from '@ivanzaida/structures'

/**
 * PED:GET_CAN_PED_BE_GRABBED_BY_SCRIPT
 *
 * 0x51150F0B2D9D1CF3

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} scanRandomPeds
 * @param {boolean} scanMissionPeds
 * @param {boolean} checkIfThePedIsInAGroup
 * @param {boolean} checkIfThePedIsInAVehicle
 * @param {boolean} checkPlayerPeds
 * @param {boolean} returnDeadOrDyingPeds
 * @param {boolean} returnPedsWithScriptedTasks
 * @param {EPedType} exclusionPedType
 * @returns {boolean}  
 */
export function getCanPedBeGrabbedByScript(ped: PedIndex, scanRandomPeds: boolean, scanMissionPeds: boolean, checkIfThePedIsInAGroup: boolean = false, checkIfThePedIsInAVehicle: boolean = false, checkPlayerPeds: boolean = false, returnDeadOrDyingPeds: boolean = false, returnPedsWithScriptedTasks: boolean = false, exclusionPedType: EPedType | number = 1): boolean {
	const getCanPedBeGrabbedByScript_result = Citizen.invokeNative<boolean>('0x51150F0B2D9D1CF3', ped, scanRandomPeds, scanMissionPeds, checkIfThePedIsInAGroup, checkIfThePedIsInAVehicle, checkPlayerPeds, returnDeadOrDyingPeds, returnPedsWithScriptedTasks, exclusionPedType);
	return getCanPedBeGrabbedByScript_result;
}