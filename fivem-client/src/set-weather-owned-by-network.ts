/**
 * CFX:SET_WEATHER_OWNED_BY_NETWORK
 *
 * 0X2703D582

 * Sets whether or not the weather should be owned by the network subsystem.To be able to use [_SET_WEATHER_TYPE_TRANSITION](#_0x578C752848ECFA0C), this has to be set to false.
 * 
 * ------------------------------------------------------------------
 * @param {boolean} network true to let the network control weather, false to not use network weather behavior.
 */
export function setWeatherOwnedByNetwork(network: boolean): void {
	const setWeatherOwnedByNetwork_result = Citizen.invokeNative<void>('0X2703D582', network);
	return setWeatherOwnedByNetwork_result;
}