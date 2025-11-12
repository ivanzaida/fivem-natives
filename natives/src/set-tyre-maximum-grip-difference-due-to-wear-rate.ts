import { VehicleIndex, EScWheelList } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_TYRE_MAXIMUM_GRIP_DIFFERENCE_DUE_TO_WEAR_RATE
 *
 * 0x5442E3C4F8176CE7

 * 
 * Controls how much traction the wheel loses.
 * 
 * Default values from Rockstar's Open Wheel Race JSON's:
 * "owrtds" (Soft): 0.05
 * "owrtdm" (Medium): 0.45
 * "owrtdh" (Hard): 0.8
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
 * @param {number} wearRateGripDiff
 */
export function setTyreMaximumGripDifferenceDueToWearRate(vehicle: VehicleIndex, wheelNumber: EScWheelList | number, wearRateGripDiff: number): void {
	const setTyreMaximumGripDifferenceDueToWearRate_result = Citizen.invokeNative<void>('0x5442E3C4F8176CE7', vehicle, wheelNumber, wearRateGripDiff);
	return setTyreMaximumGripDifferenceDueToWearRate_result;
}