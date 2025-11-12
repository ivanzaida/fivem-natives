import { ESwitchType } from '@ivanzaida/structures'

/**
 * STREAMING:GET_PLAYER_SWITCH_TYPE
 *
 * 0x1403FEB4554982F8

 * 
 * returns the type of currently active player switch
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {ESwitchType}  
 */
export function getPlayerSwitchType(): ESwitchType {
	const getPlayerSwitchType_result = Citizen.invokeNative<ESwitchType>('0x1403FEB4554982F8', );
	return getPlayerSwitchType_result;
}