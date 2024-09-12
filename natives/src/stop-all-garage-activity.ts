/**
 * VEHICLE:STOP_ALL_GARAGE_ACTIVITY
 *
 * 0x7C450B28DDDE0513

 * 
 * ------------------------------------------------------------------
 */
export function stopAllGarageActivity(): void {
	const stopAllGarageActivity_result = Citizen.invokeNative<void>('0x7C450B28DDDE0513', );
	return stopAllGarageActivity_result;
}