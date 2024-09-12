import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_ROCKET_BOOST_ACTIVE
 *
 * 0x772683F12F46CE82

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isRocketBoostActive(vehicle: VehicleIndex): boolean {
	const isRocketBoostActive_result = Citizen.invokeNative<boolean>('0x772683F12F46CE82', vehicle);
	return isRocketBoostActive_result;
}