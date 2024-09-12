/**
 * CAM:DISABLE_FIRST_PERSON_FLASH_EFFECT_THIS_UPDATE
 *
 * 0x5FD79E92E62966FB

 * 
 * ------------------------------------------------------------------
 */
export function disableFirstPersonFlashEffectThisUpdate(): void {
	const disableFirstPersonFlashEffectThisUpdate_result = Citizen.invokeNative<void>('0x5FD79E92E62966FB', );
	return disableFirstPersonFlashEffectThisUpdate_result;
}