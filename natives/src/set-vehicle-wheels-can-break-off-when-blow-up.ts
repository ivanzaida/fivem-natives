import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_WHEELS_CAN_BREAK_OFF_WHEN_BLOW_UP
 *
 * 0x7300EAE2F99BE3B7

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} canWheelsBreakoff
 */
export function setVehicleWheelsCanBreakOffWhenBlowUp(vehicle: VehicleIndex, canWheelsBreakoff: boolean): void {
	const setVehicleWheelsCanBreakOffWhenBlowUp_result = Citizen.invokeNative<void>('0x7300EAE2F99BE3B7', vehicle, canWheelsBreakoff);
	return setVehicleWheelsCanBreakOffWhenBlowUp_result;
}