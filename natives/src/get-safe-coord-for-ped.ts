import { Vector3, EGetSafeCoordFlags } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * PATHFIND:GET_SAFE_COORD_FOR_PED
 *
 * 0xC0EEE6A2207F3CB8

 * 
 * Checks to see if it can find a safe bit of ground to place a ped.
 * This command has been extended to provide a set of bitflags to give more control over how it searches for positions.
 * (The old onlyOnPavement parameter still works but you should start using the GSC_FLAG_ONLY_PAVEMENT instead as it will be removed eventually.)
 * Use this carefully since it can have a considerable performance hit, having to stall the game whilst it queries navmesh polygons
 * 
 * Flags can be found [here](https://vhub.wiki/enums/GET_SAFE_COORD_FLAGS)
 * 
 * When a safe coord could not be found the result of a function is false and outSafeCoors == Vector3.Zero.
 * 
 * In the scripts these flags are used: 0, 14, 12, 16, 20, 21, 28. 0 is most commonly used, then 16.
 * 
 * 16 works for me, 0 crashed the script.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {boolean} onlyOnPavement
 * @param {Vector3} outSafeCoors [Ref]
 * @param {EGetSafeCoordFlags} flags
 * @returns {boolean}  
 */
export function getSafeCoordForPed(coorsX: number, coorsY: number, coorsZ: number, onlyOnPavement: boolean, outSafeCoors: Vector3 /* ptr */, flags: EGetSafeCoordFlags | number = 0): boolean {
	const outSafeCoorsPtr = new Vector3Ref();
	const getSafeCoordForPed_result = Citizen.invokeNative<boolean>('0xC0EEE6A2207F3CB8', coorsX, coorsY, coorsZ, onlyOnPavement, outSafeCoorsPtr.dataView, flags);
	outSafeCoorsPtr.copyToVector(outSafeCoors);
	return getSafeCoordForPed_result;
}