import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:START_VEHICLE_ALARM
 *
 * 0x495F6DB2481DBAEE

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function startVehicleAlarm(vehicle: VehicleIndex): void {
	const startVehicleAlarm_result = Citizen.invokeNative<void>('0x495F6DB2481DBAEE', vehicle);
	return startVehicleAlarm_result;
}