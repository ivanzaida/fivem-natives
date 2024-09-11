import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_TAXI_LIGHT_ON
 *
 * 0xB5A36B0C5D6C2884

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isTaxiLightOn(vehicle: VehicleIndex): boolean {
	const isTaxiLightOn_result = Citizen.invokeNative<boolean>('0xB5A36B0C5D6C2884', vehicle);
	return isTaxiLightOn_result;
}