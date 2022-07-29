local WEBHOOK = "https://discordapp.com/api/webhooks/1002402924749668443/6gq1-j6C5pDMdQG3qE90i_DXuOxIGqOiuc4tl7U3Ck5yL-2mxpW0CcIi1rVia7HrR48f"


RegisterServerEvent('log')
AddEventHandler('log', function(data)
    print(data.name)
    local connect = {
        {
            ["color"] = "255",
            ["title"] = "Job Form ",
            ["description"] = "Name: \n **"..data.name.."** \n Phone Number: \n **"..data.number.."** \n Job Applied for: \n **"..data.jobname.."** \n Why To Chose you: \n**"..data.message.."**",
	        ["footer"] = {
                ["text"] = "",
            },
        }
    }
    PerformHttpRequest(WEBHOOK, function(err, text, headers) end, 'POST', json.encode({username = "Job Forms",  avatar_url = "https://cdn-icons-png.flaticon.com/512/65/65053.png",embeds = connect}), { ['Content-Type'] = 'application/json' })
end)

