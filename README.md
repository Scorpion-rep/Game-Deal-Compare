# Game-Deal-Compare

When using this application, user can search for popular games or games of their choice with the the comparison of the retail price and sale price. There is also a display of random games and linked to see more information of different stores with the list of more games and best deals.
View Demo
https://siddysixsmith.github.io/Game-Deal-Compare/

# Application Design
WHEN type in search bar:
    + A list of games matched witht the keyword/title
    + Show cheapest price
    + A button showed to take to view more info of that game.
WHEN click on the button, the second API activated:     
There is a list of random games displayed, details included:
    + Normal Price.
    + Sale Price.
    + Game rating.
    + By follow a link, user can view extra info (on seperate tabs), displaying both User and Critic Reviews, Trailers and Summary of what the game is about. There is also info of Best PC Games of the year and more...
    + There is also a link to take user to view extra games and stores. 

# APIs used for the app
Look up for the deals: "https://www.cheapshark.com/api/1.0/deals?storeID=1&lowerPrice=25"
Look up for the games that matched title: "https://www.cheapshark.com/api/1.0/games?title=${userInput}&limit=20&exact=0"

# User Experience:
    + Search bar can be activated by pressing Enter or Click "Search".
    + When click on the links, new page will show up in seperate tabs.
    + User can type in title of the game they like, the app will show list of all Games that are matched with the title of the game.

# Local Storage:
    + Recent searches are stored for later access so it's convenient for user to get back to the previous searches without re-typing the title.
    + Search history can be cleared if user wishes to quit searching.

# Screenshots: 
![Alt text](/assets/images/Game-deal img1.png)
![Alt text](/assets/images/Game-deal img2.png)
