import { PedIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_PLANE_LAND
 *
 * 0x6F09ACD24CD7E2D1

 * 
 * Tells a ped in a plane to land
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {number} runWayStartX
 * @param {number} runWayStartY
 * @param {number} runWayStartZ
 * @param {number} runWayEndX
 * @param {number} runWayEndY
 * @param {number} runWayEndZ
 */
export function taskPlaneLand(ped: PedIndex, vehicle: VehicleIndex, runWayStartX: number, runWayStartY: number, runWayStartZ: number, runWayEndX: number, runWayEndY: number, runWayEndZ: number): void {
	const taskPlaneLand_result = Citizen.invokeNative<void>('0x6F09ACD24CD7E2D1', ped, vehicle, runWayStartX, runWayStartY, runWayStartZ, runWayEndX, runWayEndY, runWayEndZ);
	return taskPlaneLand_result;
}