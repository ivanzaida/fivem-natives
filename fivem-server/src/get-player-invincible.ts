import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_INVINCIBLE
 *
 * 0x680C90EE

 * Returns the Player's Invincible status.
 * This function will always return false if 0x733A643B5B0C53C1 is used to set the invincibility status. To always get the correct result, use this:
 *  bool IsPlayerInvincible(Player player)
 *     {
 *      auto addr = getScriptHandleBaseAddress(GET_PLAYER_PED(player));
 *         if (addr)
 *      {
 *          DWORD flag = (DWORD )(addr + 0x188);
 *             return ((flag & (1 << 8)) != 0) || ((flag & (1 << 9)) != 0);
 *       }
 *        return false;
 *  }
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function getPlayerInvincible(player: PlayerIndex): boolean {
	const getPlayerInvincible_result = Citizen.invokeNative<boolean>('0x680C90EE', player);
	return getPlayerInvincible_result;
}