/**
 * GRAPHICS:ADD_TCMODIFIER_OVERRIDE
 *
 * 0x20F21369990AB23F

 * 
 * ------------------------------------------------------------------
 * @param {string} modifier
 * @param {string} override
 */
export function addTcmodifierOverride(modifier: string, override: string): void {
	const addTcmodifierOverride_result = Citizen.invokeNative<void>('0x20F21369990AB23F', modifier, override);
	return addTcmodifierOverride_result;
}