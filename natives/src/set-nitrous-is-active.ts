/**
 * VEHICLE:SET_NITROUS_IS_ACTIVE
 *
 * 0x465EEA70AF251045

 * 
 * ------------------------------------------------------------------
 */
export function setNitrousIsActive(): void {
	const setNitrousIsActive_result = Citizen.invokeNative<void>('0x465EEA70AF251045', );
	return setNitrousIsActive_result;
}