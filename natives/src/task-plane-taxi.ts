import { PedIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_PLANE_TAXI
 *
 * 0xD3EF88657552E38E

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} plane
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} cruiseSpeed
 * @param {number} targetReachedDist
 */
export function taskPlaneTaxi(ped: PedIndex, plane: VehicleIndex, coorsX: number, coorsY: number, coorsZ: number, cruiseSpeed: number, targetReachedDist: number): void {
	const taskPlaneTaxi_result = Citizen.invokeNative<void>('0xD3EF88657552E38E', ped, plane, coorsX, coorsY, coorsZ, cruiseSpeed, targetReachedDist);
	return taskPlaneTaxi_result;
}