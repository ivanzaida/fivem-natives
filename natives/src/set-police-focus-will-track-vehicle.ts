import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_POLICE_FOCUS_WILL_TRACK_VEHICLE
 *
 * 0x869AEF17062BE178

 * 
 * If this is set to true the police focus circle is always focussed on the car. If this is false the player has a chance to escape police attention if undetected.
 * By default law enforcement vehicles have this bit set to true and all other cars have false.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} newVal
 */
export function setPoliceFocusWillTrackVehicle(vehicle: VehicleIndex, newVal: boolean): void {
	const setPoliceFocusWillTrackVehicle_result = Citizen.invokeNative<void>('0x869AEF17062BE178', vehicle, newVal);
	return setPoliceFocusWillTrackVehicle_result;
}