import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_ROCKET_BOOST_ACTIVE
 *
 * 0x5B29AF88D03CEB7A

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} shouldBeActive
 */
export function setRocketBoostActive(vehicle: VehicleIndex, shouldBeActive: boolean): void {
	const setRocketBoostActive_result = Citizen.invokeNative<void>('0x5B29AF88D03CEB7A', vehicle, shouldBeActive);
	return setRocketBoostActive_result;
}