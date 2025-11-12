/**
 * PED:SET_PED_HEALTH_PENDING_LAST_DAMAGE_EVENT_OVERRIDE_FLAG
 *
 * 0x12100CAEF6D8A8EF

 * 
 * Override to allow the pending last damage event flag to get reset without health being set to max. Used for game modes where players are respawned with less than full health which interferes with kill tracking.
 * This should be reset back to false when it's no longer needed.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} overrideValue
 */
export function setPedHealthPendingLastDamageEventOverrideFlag(overrideValue: boolean): void {
	const setPedHealthPendingLastDamageEventOverrideFlag_result = Citizen.invokeNative<void>('0x12100CAEF6D8A8EF', overrideValue);
	return setPedHealthPendingLastDamageEventOverrideFlag_result;
}