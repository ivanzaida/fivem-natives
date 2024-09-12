import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_WHEELS_EXTENDED_INSTANTLY
 *
 * 0xAB4E52390141B4E7

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function setWheelsExtendedInstantly(vehicle: VehicleIndex): void {
	const setWheelsExtendedInstantly_result = Citizen.invokeNative<void>('0xAB4E52390141B4E7', vehicle);
	return setWheelsExtendedInstantly_result;
}