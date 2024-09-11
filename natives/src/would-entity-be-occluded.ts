import { ModelNames } from '@ivanzaida/structures'

/**
 * ENTITY:WOULD_ENTITY_BE_OCCLUDED
 *
 * 0xB74F8EB686030603

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} modelHashKey
 * @param {number} coordsX
 * @param {number} coordsY
 * @param {number} coordsZ
 * @param {boolean} assertIfModelIsntLoaded
 * @returns {boolean}  
 */
export function wouldEntityBeOccluded(modelHashKey: ModelNames, coordsX: number, coordsY: number, coordsZ: number, assertIfModelIsntLoaded: boolean = true): boolean {
	const wouldEntityBeOccluded_result = Citizen.invokeNative<boolean>('0xB74F8EB686030603', modelHashKey, coordsX, coordsY, coordsZ, assertIfModelIsntLoaded);
	return wouldEntityBeOccluded_result;
}