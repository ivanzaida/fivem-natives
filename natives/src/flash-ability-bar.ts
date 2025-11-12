/**
 * HUD:FLASH_ABILITY_BAR
 *
 * 0x8E8EDF5205B15D28

 * 
 * Starts the ability bar to flashing for a set period of time
 * Don't spam it! Or you'll be sorry!
 * PARAMS
 * millisecondsToFlashFor - <= 0 to stop.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} millisecondsToFlashFor
 */
export function flashAbilityBar(millisecondsToFlashFor: number): void {
	const flashAbilityBar_result = Citizen.invokeNative<void>('0x8E8EDF5205B15D28', millisecondsToFlashFor);
	return flashAbilityBar_result;
}