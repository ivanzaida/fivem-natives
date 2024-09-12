import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_BUMPER_BOUNCING
 *
 * 0x8545B773982EAE2B

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} front
 * @returns {boolean}  
 */
export function isVehicleBumperBouncing(vehicle: VehicleIndex, front: boolean): boolean {
	const isVehicleBumperBouncing_result = Citizen.invokeNative<boolean>('0x8545B773982EAE2B', vehicle, front);
	return isVehicleBumperBouncing_result;
}