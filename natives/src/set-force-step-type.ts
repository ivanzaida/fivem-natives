import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_FORCE_STEP_TYPE
 *
 * 0xBA5E2010650D3EE0

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} force
 * @param {number} stepType
 * @param {number} detectionValuesIdx
 */
export function setForceStepType(ped: PedIndex, force: boolean, stepType: number, detectionValuesIdx: number): void {
	const setForceStepType_result = Citizen.invokeNative<void>('0xBA5E2010650D3EE0', ped, force, stepType, detectionValuesIdx);
	return setForceStepType_result;
}