var presence = new Presence({
    clientId: "684756736095289366",
    mediaKeys: false
});

    presence.on("UpdateData", () => {
        

        var presenceData = {
            largeImageKey: "hentaiser",
        };
    
        {
            presenceData.state = "Just browsing..."
        }
    
        if (document.location.pathname.includes("/signup")) {
            presenceData.state = "Creating an account"
        }

        if (document.location.pathname.includes("/login")) {
            presenceData.state = "Logging into their account"
        }

        if (document.location.pathname.includes("/profile")) {
            presenceData.state = "Editing their profile"
        }

        if (document.location.pathname.includes("/book")) {
            presenceData.state = "About to start reading"
        }

        if (document.location.pathname.includes("/pages")) {
            presenceData.state = "Reading page " + document.querySelector("#pageIndicator").textContent
        }
    
        if (document.location.pathname.includes("/books/favorites")) {
            presenceData.state = "Browsing their favorite Doujinshi"
        }

        if (document.location.pathname.includes("/books/tag")) {
            presenceData.state = "Browsing Doujinshi by tags"
        }
    
        if (document.location.pathname.includes("/books/search/tags")) {
            presenceData.state = "Searching Doujinshi by tags"
        }
    
        if (document.location.pathname.includes("/books/search/text")) {
            presenceData.state = "Searching Doujinshi by text"
        }
    
        if (document.location.pathname.includes("/anime")) {
            presenceData.state = "Watching Hentai"
        }

        if (document.location.pathname.includes("/animes/favorites")) {
            presenceData.state = "Browsing their favorite Hentai"
        }
    
        if (document.location.pathname.includes("/animes/search/tags")) {
            presenceData.state = "Searching Hentai by tags"
        }

        if (document.location.pathname.includes("/animes/tag")) {
            presenceData.state = "Browsing Hentai by tags"
        }
    
        if (document.location.pathname.includes("/animes/search/text")) {
            presenceData.state = "Searching Hentai by text"
        }

        if (document.location.pathname.includes("/pages")) presenceData.details = presenceData.details = document.title;
        else { presenceData.details = document.querySelector("h1").textContent }
        presence.setActivity(presenceData)

    });
