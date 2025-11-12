import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_TANK_TURRET_POSITION
 *
 * 0x8C3B2540B29146AA

 * 
 * Sets a tank vehicle's turret position
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} turretPosition
 * @param {boolean} snapToPosition
 */
export function setVehicleTankTurretPosition(vehicle: VehicleIndex, turretPosition: number, snapToPosition: boolean = false): void {
	const setVehicleTankTurretPosition_result = Citizen.invokeNative<void>('0x8C3B2540B29146AA', vehicle, turretPosition, snapToPosition);
	return setVehicleTankTurretPosition_result;
}