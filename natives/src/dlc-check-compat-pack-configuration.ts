/**
 * DLC:DLC_CHECK_COMPAT_PACK_CONFIGURATION
 *
 * 0xDB6AE360ACDD6885

 * 
 * Detects if a DLC pack is present
 * 
 * This function is hard-coded to always return 1.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function dlcCheckCompatPackConfiguration(): boolean {
	const dlcCheckCompatPackConfiguration_result = Citizen.invokeNative<boolean>('0xDB6AE360ACDD6885', );
	return dlcCheckCompatPackConfiguration_result;
}