import { PedIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_SUBMARINE_GOTO_AND_STOP
 *
 * 0x790442D9A27FBFC1

 * 
 * Tells a submarine to goto and stop at the position given
 * 
 * Used in am_vehicle_spawn.ysc and am_mp_submarine.ysc.
 * 
 * p0 is always 0, p5 is always 1
 * 
 * p1 is the vehicle handle of the submarine. Submarine must have a driver, but the ped handle is not passed to the native.
 * 
 * Speed can be set by calling SET_DRIVE_TASK_CRUISE_SPEED after
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {number} targetCoordsX
 * @param {number} targetCoordsY
 * @param {number} targetCoordsZ
 * @param {boolean} autoPilot Will apply the task directly to the vehicle, and apply some flags to allow this task to run with no driver
 */
export function taskSubmarineGotoAndStop(ped: PedIndex, vehicle: VehicleIndex, targetCoordsX: number, targetCoordsY: number, targetCoordsZ: number, autoPilot: boolean = false): void {
	const taskSubmarineGotoAndStop_result = Citizen.invokeNative<void>('0x790442D9A27FBFC1', ped, vehicle, targetCoordsX, targetCoordsY, targetCoordsZ, autoPilot);
	return taskSubmarineGotoAndStop_result;
}