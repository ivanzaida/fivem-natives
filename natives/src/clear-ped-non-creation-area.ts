/**
 * PED:CLEAR_PED_NON_CREATION_AREA
 *
 * 0x93586F94C370857F

 * 
 * ------------------------------------------------------------------
 */
export function clearPedNonCreationArea(): void {
	const clearPedNonCreationArea_result = Citizen.invokeNative<void>('0x93586F94C370857F', );
	return clearPedNonCreationArea_result;
}