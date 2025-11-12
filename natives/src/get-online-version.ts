/**
 * NETWORK:GET_ONLINE_VERSION
 *
 * 0x5DABD035363E4E52

 * 
 * Online version is defined here: update\update.rpf\common\data\version.txt
 * 
 * Example:
 * 
 * [ONLINE_VERSION_NUMBER]
 * 1.33
 * 
 * _GET_ONLINE_VERSION() will return "1.33"
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {string}  
 */
export function getOnlineVersion(): string {
	const getOnlineVersion_result = Citizen.invokeNative<string>('0x5DABD035363E4E52', );
	return getOnlineVersion_result;
}