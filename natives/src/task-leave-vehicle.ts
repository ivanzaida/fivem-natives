import { PedIndex, VehicleIndex, EEnterExitVehicleFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_LEAVE_VEHICLE
 *
 * 0x23EB5FC236231892

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
 * @param {EEnterExitVehicleFlags} flags
 */
export function taskLeaveVehicle(ped: PedIndex, vehicle: VehicleIndex, flags: EEnterExitVehicleFlags | number = 0): void {
	const taskLeaveVehicle_result = Citizen.invokeNative<void>('0x23EB5FC236231892', ped, vehicle, flags);
	return taskLeaveVehicle_result;
}