import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_STRONG
 *
 * 0xD05AF216D970F274

 * 
 * If set to true, vehicle will not take crash damage, but is still susceptible to damage from bullets and explosives
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} strongFlag
 */
export function setVehicleStrong(vehicle: VehicleIndex, strongFlag: boolean): void {
	const setVehicleStrong_result = Citizen.invokeNative<void>('0xD05AF216D970F274', vehicle, strongFlag);
	return setVehicleStrong_result;
}