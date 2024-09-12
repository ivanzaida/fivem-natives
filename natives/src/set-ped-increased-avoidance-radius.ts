import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_INCREASED_AVOIDANCE_RADIUS
 *
 * 0xB739D4CB4D58B663

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function setPedIncreasedAvoidanceRadius(ped: PedIndex): void {
	const setPedIncreasedAvoidanceRadius_result = Citizen.invokeNative<void>('0xB739D4CB4D58B663', ped);
	return setPedIncreasedAvoidanceRadius_result;
}