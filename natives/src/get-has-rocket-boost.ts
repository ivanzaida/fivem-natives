import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_HAS_ROCKET_BOOST
 *
 * 0xA03728CC57F6DD36

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getHasRocketBoost(vehicle: VehicleIndex): boolean {
	const getHasRocketBoost_result = Citizen.invokeNative<boolean>('0xA03728CC57F6DD36', vehicle);
	return getHasRocketBoost_result;
}