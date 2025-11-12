import { PedIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_PLANE_GOTO_PRECISE_VTOL
 *
 * 0xF9B70B973193533C

 * 
 * Tells a plane with VTOL (like the Vulkan) to move precisely throughout the world.  Will fail for other vehicles
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {number} targetCoordsX
 * @param {number} targetCoordsY
 * @param {number} targetCoordsZ
 * @param {number} flightHeight
 * @param {number} minHeightAboveTerrain
 * @param {boolean} useDesiredOrientation
 * @param {number} desiredOrientation
 * @param {boolean} autoPilot Will apply the plane goto task directly to the vehicle, and apply some flags to allow this task to run with no driver
 */
export function taskPlaneGotoPreciseVtol(ped: PedIndex, vehicle: VehicleIndex, targetCoordsX: number, targetCoordsY: number, targetCoordsZ: number, flightHeight: number = 30, minHeightAboveTerrain: number = 20, useDesiredOrientation: boolean = false, desiredOrientation: number = 0, autoPilot: boolean = false): void {
	const taskPlaneGotoPreciseVtol_result = Citizen.invokeNative<void>('0xF9B70B973193533C', ped, vehicle, targetCoordsX, targetCoordsY, targetCoordsZ, flightHeight, minHeightAboveTerrain, useDesiredOrientation, desiredOrientation, autoPilot);
	return taskPlaneGotoPreciseVtol_result;
}