import { ConsoleListener } from '@ivanzaida/structures'

/**
 * CFX:REGISTER_CONSOLE_LISTENER
 *
 * 0X281B5448

 * Registers a listener for console output messages.
 * 
 * ------------------------------------------------------------------
 * @param {ConsoleListener} listener A function of (channel
 */
export function registerConsoleListener(listener: ConsoleListener): void {
	const registerConsoleListener_result = Citizen.invokeNative<void>('0X281B5448', listener);
	return registerConsoleListener_result;
}