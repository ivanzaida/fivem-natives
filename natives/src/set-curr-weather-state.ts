/**
 * MISC:SET_CURR_WEATHER_STATE
 *
 * 0x2D213D9B5D0FE42B

 * Mixes two weather types. If percentWeather2 is set to 0.0f, then the weather will be entirely of weatherType1, if it is set to 1.0f it will be entirely of weatherType2. If it's set somewhere in between, there will be a mixture of weather behaviors. To test, try this in the RPH console, and change the float to different values between 0 and 1:
 * execute "NativeFunction.Natives.x578C752848ECFA0C(Game.GetHashKey(""RAIN""), Game.GetHashKey(""SMOG""), 0.50f);
 * Note that unlike most of the other weather natives, this native takes the hash of the weather name, not the plain string. These are the weather names and their hashes:
 * CLEAR  0x36A83D84
 * EXTRASUNNY  0x97AA0A79
 * CLOUDS  0x30FDAF5C
 * OVERCAST    0xBB898D2D
 * RAIN    0x54A69840
 * CLEARING    0x6DB1A50D
 * THUNDER 0xB677829F
 * SMOG    0x10DCF4B5
 * FOGGY   0xAE737644
 * XMAS    0xAAC9C895
 * SNOWLIGHT   0x23FB812B
 * BLIZZARD    0x27EA2814
 * / OLD INVALID INFO BELOW /
 * Not tested. Based purely on disassembly. Instantly sets the weather to sourceWeather, then transitions to targetWeather over the specified transitionTime in seconds.
 * If an invalid hash is specified for sourceWeather, the current weather type will be used.
 * If an invalid hash is specified for targetWeather, the next weather type will be used.
 * If an invalid hash is specified for both sourceWeather and targetWeather, the function just changes the transition time of the current transition.
 * 
 * ------------------------------------------------------------------
 * @param {number} prevTypeHashName
 * @param {number} nextTypeHashName
 * @param {number} interpVal
 */
export function setCurrWeatherState(prevTypeHashName: number, nextTypeHashName: number, interpVal: number): void {
	const setCurrWeatherState_result = Citizen.invokeNative<void>('0x2D213D9B5D0FE42B', prevTypeHashName, nextTypeHashName, interpVal);
	return setCurrWeatherState_result;
}