/**
 * MISC:OVERRIDE_FREEZE_FLAGS
 *
 * 0x8822ABB8DFD960E5

 * 
 * Implemented with acitivities in mind (e.g. pool game).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} override
 */
export function overrideFreezeFlags(override: boolean): void {
	const overrideFreezeFlags_result = Citizen.invokeNative<void>('0x8822ABB8DFD960E5', override);
	return overrideFreezeFlags_result;
}