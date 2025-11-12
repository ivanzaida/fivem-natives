/**
 * NETSHOPPING:NET_GAMESERVER_START_SESSION_RESTART
 *
 * 0x31DC11BF434AF20B

 * 
 * Start a session restart must be called when we are in mp and have
 * received a presence message and is safe to retrieve the inventory and/or player balance)
 * 
 * Note: only one of the arguments can be set to true at a time
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} inventory
 * @param {boolean} playerbalance
 * @returns {boolean}  
 */
export function netGameserverStartSessionRestart(inventory: boolean, playerbalance: boolean): boolean {
	const netGameserverStartSessionRestart_result = Citizen.invokeNative<boolean>('0x31DC11BF434AF20B', inventory, playerbalance);
	return netGameserverStartSessionRestart_result;
}