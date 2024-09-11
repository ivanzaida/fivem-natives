/**
 * NETSHOPPING:NET_GAMESERVER_DELETE_CHARACTER
 *
 * 0xD1BAD83E70275AEB

 * 
 * ------------------------------------------------------------------
 * @param {number} character
 * @param {boolean} clearBank
 * @param {number} reason
 * @returns {boolean}  
 */
export function netGameserverDeleteCharacter(character: number, clearBank: boolean, reason: number): boolean {
	const netGameserverDeleteCharacter_result = Citizen.invokeNative<boolean>('0xD1BAD83E70275AEB', character, clearBank, reason);
	return netGameserverDeleteCharacter_result;
}