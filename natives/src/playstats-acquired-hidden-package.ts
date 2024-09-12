/**
 * STATS:PLAYSTATS_ACQUIRED_HIDDEN_PACKAGE
 *
 * 0x4E84B27CF8AA616F

 * 
 * ------------------------------------------------------------------
 * @param {number} id
 */
export function playstatsAcquiredHiddenPackage(id: number): void {
	const playstatsAcquiredHiddenPackage_result = Citizen.invokeNative<void>('0x4E84B27CF8AA616F', id);
	return playstatsAcquiredHiddenPackage_result;
}