import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_VEHICLE_BOOST_ACTIVE
 *
 * 0x8A85315947DF6C94

 * 
 * SET_VEHICLE_BOOST_ACTIVE(vehicle, 1, 0);
 * SET_VEHICLE_BOOST_ACTIVE(vehicle, 0, 0);
 * 
 * Will give a boost-soundeffect.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} veh
 * @param {boolean} active
 */
export function setVehicleBoostActive(veh: VehicleIndex, active: boolean): void {
	const setVehicleBoostActive_result = Citizen.invokeNative<void>('0x8A85315947DF6C94', veh, active);
	return setVehicleBoostActive_result;
}