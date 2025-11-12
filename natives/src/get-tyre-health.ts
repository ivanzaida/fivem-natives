import { VehicleIndex, EScWheelList } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_TYRE_HEALTH
 *
 * 0x2F800AD09C30EAFF

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
export function getTyreHealth(vehicle: VehicleIndex, wheelNumber: EScWheelList | number): number {
	const getTyreHealth_result = Citizen.invokeNative<number>('0x2F800AD09C30EAFF', vehicle, wheelNumber);
	return getTyreHealth_result;
}