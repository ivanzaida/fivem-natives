import { CommandHandler } from '@ivanzaida/structures'

/**
 * CFX:REGISTER_COMMAND
 *
 * 0X5FA79B0F

 * Registered commands can be executed by entering them in the client console (this works for client side and server side registered commands). Or by entering them in the server console/through an RCON client (only works for server side registered commands). Or if you use a supported chat resource, like the default one provided in the cfx-server-data repository, then you can enter the command in chat by prefixing it with a `/`.Commands registered using this function can also be executed by resources, using the [`ExecuteCommand` native](#_0x561C060B).The restricted bool is not used on the client side. Permissions can only be checked on the server side, so if you want to limit your command with an ace permission automatically, make it a server command (by registering it in a server script).Example result:![](https://i.imgur.com/TaCnG09.png)
 * 
 * ------------------------------------------------------------------
 * @param {string} commandName The command you want to register.
 * @param {CommandHandler} handler A handler function that gets called whenever the command is executed.
 * @param {boolean} restricted If this is a server command and you set this to true, then players will need the command.yourCommandName ace permission to execute this command.
 */
export function registerCommand(commandName: string, handler: CommandHandler, restricted: boolean): void {
	const registerCommand_result = Citizen.invokeNative<void>('0X5FA79B0F', commandName, handler, restricted);
	return registerCommand_result;
}