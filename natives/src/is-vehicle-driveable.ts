import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_DRIVEABLE
 *
 * 0xD9F5E1FEFD1329E4

 * 
 * Must be used before using many of the other vehicle commands.
 * 
 * p1 is always 0 in the scripts.
 * 
 * p1 = check if vehicle is on fire
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} checkFire
 * @returns {boolean}  
 */
export function isVehicleDriveable(vehicle: VehicleIndex, checkFire: boolean = false): boolean {
	const isVehicleDriveable_result = Citizen.invokeNative<boolean>('0xD9F5E1FEFD1329E4', vehicle, checkFire);
	return isVehicleDriveable_result;
}