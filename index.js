#!/usr/bin/env node

/**
 * nerd-jokes
 * Gives you not so funny jokes
 *
 * @author Aaron Chris <https://aaronteamaar.github.io/project-folio>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const axios = require('axios');
const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;


if(flags.type != 'nerdy' && flags.type != 'explicit'){
	flags.type = 'nerdy';
}
 
(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);

	if(input.includes('joke')){
		const res = await axios.get(`http://api.icndb.com/jokes/random?LimitTo=[${flags.type}]`)
	    console.log(res.data.value.joke)
	}
})();
