import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_PARACHUTE_DEPLOYED
 *
 * 0x385CCC1DF7554BE9

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleParachuteDeployed(vehicle: VehicleIndex): boolean {
	const isVehicleParachuteDeployed_result = Citizen.invokeNative<boolean>('0x385CCC1DF7554BE9', vehicle);
	return isVehicleParachuteDeployed_result;
}