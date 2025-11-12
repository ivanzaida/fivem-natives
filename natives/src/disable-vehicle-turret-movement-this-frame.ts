import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:DISABLE_VEHICLE_TURRET_MOVEMENT_THIS_FRAME
 *
 * 0x9A81B26B3D3B37C7

 * 
 * Sets a vehicle's turret speed on a per-frame basis
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function disableVehicleTurretMovementThisFrame(vehicle: VehicleIndex): void {
	const disableVehicleTurretMovementThisFrame_result = Citizen.invokeNative<void>('0x9A81B26B3D3B37C7', vehicle);
	return disableVehicleTurretMovementThisFrame_result;
}