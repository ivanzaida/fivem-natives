import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_ROCKET_BOOST_FILL
 *
 * 0xFEB2DDED3509562E

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} fillAmount
 */
export function setRocketBoostFill(vehicle: VehicleIndex, fillAmount: number): void {
	const setRocketBoostFill_result = Citizen.invokeNative<void>('0xFEB2DDED3509562E', vehicle, fillAmount);
	return setRocketBoostFill_result;
}