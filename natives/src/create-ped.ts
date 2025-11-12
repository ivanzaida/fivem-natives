import { EPedType, ModelNames, PedIndex } from '@ivanzaida/structures'

/**
 * PED:CREATE_PED
 *
 * 0xB1DBFEB95C0EFB88

 * 
 * RegisterAsNetworkObject:		The new object will be created and synced on other machines if a network game is running
 * ScriptHostObject:		If true, this object has been created by the host portion of a network script and is vital to that script - it must always exist regardless of who is hosting the script.
 * If false, the object has been created by the client portion of a network script and can be removed when the client who created it leaves the script session.
 * 
 * https://alloc8or.re/gta5/doc/enums/ePedType.txt
 * 
 * Full list of peds by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/peds.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EPedType} pedType
 * @param {ModelNames} pedModelHashKey
 * @param {number} newCoorsX
 * @param {number} newCoorsY
 * @param {number} newCoorsZ
 * @param {number} pedHeading
 * @param {boolean} registerAsNetworkObject
 * @param {boolean} scriptHostObject
 * @returns {PedIndex}  
 */
export function createPed(pedType: EPedType | number, pedModelHashKey: ModelNames, newCoorsX: number, newCoorsY: number, newCoorsZ: number, pedHeading: number = 0, registerAsNetworkObject: boolean = true, scriptHostObject: boolean = true): PedIndex {
	const createPed_result = Citizen.invokeNative<PedIndex>('0xB1DBFEB95C0EFB88', pedType, pedModelHashKey, newCoorsX, newCoorsY, newCoorsZ, pedHeading, registerAsNetworkObject, scriptHostObject);
	return createPed_result;
}