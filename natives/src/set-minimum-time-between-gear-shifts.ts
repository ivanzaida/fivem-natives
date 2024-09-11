/**
 * VEHICLE:_SET_MINIMUM_TIME_BETWEEN_GEAR_SHIFTS
 *
 * 0x16CFBC5E7EB32861

 * 
 * ------------------------------------------------------------------
 */
export function setMinimumTimeBetweenGearShifts(): void {
	const setMinimumTimeBetweenGearShifts_result = Citizen.invokeNative<void>('0x16CFBC5E7EB32861', );
	return setMinimumTimeBetweenGearShifts_result;
}