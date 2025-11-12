import { PedIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:TASK_LEAVE_VEHICLE
 *
 * 0x7B1141C6

 * 
 * Flags from decompiled scripts:
 * 0 = normal exit and closes door.
 * 1 = normal exit and closes door.
 * 16 = teleports outside, door kept closed.
 * 64 = normal exit and closes door, maybe a bit slower animation than 0.
 * 256 = normal exit but does not close the door.
 * 4160 = ped is throwing himself out, even when the vehicle is still.
 * 262144 = ped moves to passenger seat first, then exits normally
 * 
 * Others to be tried out: 320, 512, 131072.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {number} flags
 */
export function taskLeaveVehicle(ped: PedIndex, vehicle: VehicleIndex, flags: number): void {
	const taskLeaveVehicle_result = Citizen.invokeNative<void>('0x7B1141C6', ped, vehicle, flags);
	return taskLeaveVehicle_result;
}