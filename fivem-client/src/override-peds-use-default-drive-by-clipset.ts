/**
 * CFX:OVERRIDE_PEDS_USE_DEFAULT_DRIVE_BY_CLIPSET
 *
 * 0xB14F8EAD

 * Allows the bypassing of default game behavior that prevents the use of [SET_PED_DRIVE_BY_CLIPSET_OVERRIDE](#_0xED34AB6C5CB36520) in certain scenarios to avoid clipping issues (e.g., when there is more than one Ped in a vehicle).Note: This flag and the overridden clipset are not replicated values and require synchronization through user scripts. Additionally, current game behavior also restricts applying this clipset locally when in first-person mode and will require a temporary workaround.
 * 
 * ------------------------------------------------------------------
 * @param {boolean} flag true to override, false to use default game behavior.
 */
export function overridePedsUseDefaultDriveByClipset(flag: boolean): void {
	const overridePedsUseDefaultDriveByClipset_result = Citizen.invokeNative<void>('0xB14F8EAD', flag);
	return overridePedsUseDefaultDriveByClipset_result;
}