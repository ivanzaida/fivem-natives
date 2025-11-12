import { VehicleIndex, EScWheelList } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_TYRE_HEALTH
 *
 * 0x8110C3A5371AD12D

 * 
 * SET_TYRE_WEAR_RATE must be active, otherwise values set to <1000.0f will default to 350.0f
 * 
 * Usable wheels:
 * 0: wheel_lf
 * 1: wheel_rf
 * 2: wheel_lm1
 * 3: wheel_rm1
 * 4: wheel_lr
 * 5: wheel_rr
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScWheelList} wheelNumber
 * @param {number} health
 */
export function setTyreHealth(vehicle: VehicleIndex, wheelNumber: EScWheelList | number, health: number): void {
	const setTyreHealth_result = Citizen.invokeNative<void>('0x8110C3A5371AD12D', vehicle, wheelNumber, health);
	return setTyreHealth_result;
}