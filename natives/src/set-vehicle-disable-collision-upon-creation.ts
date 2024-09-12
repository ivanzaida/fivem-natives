import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_DISABLE_COLLISION_UPON_CREATION
 *
 * 0xAF60E6A2936F982A

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} disableCollision
 */
export function setVehicleDisableCollisionUponCreation(vehicle: VehicleIndex, disableCollision: boolean): void {
	const setVehicleDisableCollisionUponCreation_result = Citizen.invokeNative<void>('0xAF60E6A2936F982A', vehicle, disableCollision);
	return setVehicleDisableCollisionUponCreation_result;
}