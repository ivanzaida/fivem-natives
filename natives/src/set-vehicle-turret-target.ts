import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_TURRET_TARGET
 *
 * 0xAD263B112A654D47

 * 
 * Sets the target position for a turret to point at
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} turret
 * @param {number} targetPositionX
 * @param {number} targetPositionY
 * @param {number} targetPositionZ
 * @param {boolean} snapToPosition
 */
export function setVehicleTurretTarget(vehicle: VehicleIndex, turret: number, targetPositionX: number, targetPositionY: number, targetPositionZ: number, snapToPosition: boolean = false): void {
	const setVehicleTurretTarget_result = Citizen.invokeNative<void>('0xAD263B112A654D47', vehicle, turret, targetPositionX, targetPositionY, targetPositionZ, snapToPosition);
	return setVehicleTurretTarget_result;
}