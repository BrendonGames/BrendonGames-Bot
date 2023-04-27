# BrendonGames-Bot
my first ever discord bot

This is meant for myself, but feel free to take a look

Made on [Replit](https://replit.com/@BrendonGames/BrendonGames-Bot)

# Use it yourself?
It's very simple to make this bot yours. I would recommend you inform yourself on how to use Discord.JS and Node.

You first need to set up an application on the [Discord Developer Portal](https://discord.com/developers/applications), then you need to make a bot in your application. Invite the bot to your server using the OAuth2. Copy the token you are provided. You now have multiple options:

## Replit
If you plan on hosting the bot via replit you can simply import the project from Github. Go to the secrets page on your Repl and call the secret `token`, place your copied token in the `value` (pictured below). 

![Replit token](https://github.com/BrendonGames/BrendonGames-Bot/blob/main/Replit-Token.png?raw=true)

Make sure you have installed all node packages. You should now be able to start the bot.

## Local PC
If you have a computer you'd like to use it's gonna be a bit different from Replit. Make sure you have Node installed on your PC. Open your favorite code editor. Create a `config.json` file and put in the following:
```JSON
{
    "token": "<your-token-here>"
}
```
Open the terminal in your current folder and type `node .` . The bot should now be on.

## Sidenote
Express will be opening a site on port `localhost:3000`, if you're using Replit it'll open the Webview tab. A few commands will be shown there, but not all. I'm lazy ¯\\\_(ツ)_/¯.
