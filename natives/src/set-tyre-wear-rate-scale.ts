import { VehicleIndex, EScWheelList } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_TYRE_WEAR_RATE_SCALE
 *
 * 0x7FFAD424E930B802

 * 
 * Controls how fast the tires wear out.
 * 
 * Default values from Rockstar's Open Wheel Race JSON's:
 * "owrtss" (Soft): 2.2
 * "owrtsm" (Medium): 1.7
 * "owrtsh" (Hard): 1.2
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
 * @param {number} wearRateScale
 */
export function setTyreWearRateScale(vehicle: VehicleIndex, wheelNumber: EScWheelList | number, wearRateScale: number): void {
	const setTyreWearRateScale_result = Citizen.invokeNative<void>('0x7FFAD424E930B802', vehicle, wheelNumber, wearRateScale);
	return setTyreWearRateScale_result;
}