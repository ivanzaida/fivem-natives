/**
 * OBJECT:FORCE_PICKUP_ROTATE_FACE_UP
 *
 * 0x82FFC7AC4E85D734

 * 
 * ------------------------------------------------------------------
 */
export function forcePickupRotateFaceUp(): void {
	const forcePickupRotateFaceUp_result = Citizen.invokeNative<void>('0x82FFC7AC4E85D734', );
	return forcePickupRotateFaceUp_result;
}