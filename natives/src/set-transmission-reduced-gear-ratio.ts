/**
 * VEHICLE:_SET_TRANSMISSION_REDUCED_GEAR_RATIO
 *
 * 0x337EF33DA3DDB990

 * 
 * ------------------------------------------------------------------
 */
export function setTransmissionReducedGearRatio(): void {
	const setTransmissionReducedGearRatio_result = Citizen.invokeNative<void>('0x337EF33DA3DDB990', );
	return setTransmissionReducedGearRatio_result;
}