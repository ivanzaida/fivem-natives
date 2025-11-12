import { VehicleIndex, EScWheelList } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_TYRE_WEAR_RATE
 *
 * 0xA62C98856A88DC66

 * 
 * Returns the multiplier value from SET_TYRE_WEAR_RATE
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
 * @returns {number}  
 */
export function getTyreWearRate(vehicle: VehicleIndex, wheelNumber: EScWheelList | number): number {
	const getTyreWearRate_result = Citizen.invokeNative<number>('0xA62C98856A88DC66', vehicle, wheelNumber);
	return getTyreWearRate_result;
}