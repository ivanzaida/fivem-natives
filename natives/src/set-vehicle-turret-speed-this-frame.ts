import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_TURRET_SPEED_THIS_FRAME
 *
 * 0x17AB03DCC210B35D

 * 
 * Sets a vehicle's turret speed on a per-frame basis
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} turretSpeed
 */
export function setVehicleTurretSpeedThisFrame(vehicle: VehicleIndex, turretSpeed: number): void {
	const setVehicleTurretSpeedThisFrame_result = Citizen.invokeNative<void>('0x17AB03DCC210B35D', vehicle, turretSpeed);
	return setVehicleTurretSpeedThisFrame_result;
}