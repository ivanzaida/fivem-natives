import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CLOTH_PACKAGE_INDEX
 *
 * 0x71AA6A2F0208FC46

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} pkg
 */
export function setPedClothPackageIndex(ped: PedIndex, pkg: number): void {
	const setPedClothPackageIndex_result = Citizen.invokeNative<void>('0x71AA6A2F0208FC46', ped, pkg);
	return setPedClothPackageIndex_result;
}